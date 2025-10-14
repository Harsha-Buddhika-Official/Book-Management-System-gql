import { Book } from "../Model/book.js";
import { User } from "../Model/user.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const requireAuth = (user) => {
  if (!user) {
    throw new Error("You must be logged in to perform this action");
  }
};

export const resolvers = {
  Query: {
    getUsers: async (_, __, { user }) => {
      requireAuth(user);
      const users = await User.find();
      return users;
    },

    getBooks: async () => {
      const books = await Book.find();
      return books;
    },

    getUserById: async (_, args, { user }) => {
      requireAuth(user);
      const founduser = await User.findById(args.id);
      if (!founduser) {
        throw new Error("User not found");
      }
      return founduser;
    },

    getBookById: async (_, args) => {
      const book = await Book.findById(args.id);
      if (!book) {
        throw new Error("Book not found");
      }
      return book;
    },

    me: async (_, __, { user }) => {
      requireAuth(user);
      const foundUser = await User.findById(user.userId);
      if (!foundUser) {
        throw new Error("User not found");
      }
      return foundUser;
    },
  },

  Mutation: {
    createUser: async (_, args) => {
      const userInput = args.input;
      if (userInput.password !== userInput.confirmPassword) {
        throw new Error("Passwords do not match");
      }

      const existingUser = await User.findOne({ email: userInput.email });
      if (existingUser) {
        throw new Error("User with this email already exists");
      }
      const hashedPassword = await bcrypt.hash(userInput.password, 10)
      const newUser = new User({
        name: userInput.name,
        email: userInput.email,
        password: hashedPassword,
      });

      const savedUser = await newUser.save();
      const token = generateToken(savedUser._id);

      return {
        token,
        user: savedUser,
      };
    },

    loginUser: async (_, args) => {
      const { email, password } = args.input;
      const user = await User.findOne({ email });

      if (!user) {
        throw new Error("invalid Email or Password");
      }

      // const hashedPassword = await bcrypt.hash(password, 10)
      // if (user.password !== hashedPassword) {
      //   throw new Error("invalid Email or Password");
      // }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid credentials')
    }

      const token = generateToken(user._id);

      return { token, user };
    },

    createBook: async (_, args, { user }) => {
      requireAuth(user);

      const book = args.input;
      const newBook = new Book({
        title: book.title,
        author: book.author,
        year: book.year,
        genre: book.genre,
        image: book.image,
        description: book.description,
        language: book.language,
        enterTime: book.enterTime || new Date(),
      });

      const saveBook = await newBook.save();
      return saveBook;
    },

    updateBook: async (_, { id, input }, { user }) => {
      requireAuth(user);

      const updatedBook = await Book.findByIdAndUpdate(id, input, {
        new: true,
      });

      if (!updatedBook) {
        throw new Error("Book not found");
      }

      return updatedBook;
    },

    deleteBook: async (_, { id }, { user }) => {
      requireAuth(user);

      const deletedBook = await Book.findByIdAndDelete(id);
      if (!deletedBook) {
        throw new Error("Book not found");
      }

      return deletedBook;
    },
  },
};
