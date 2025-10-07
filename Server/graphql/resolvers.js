import { Book } from "../Model/book.js";
import { User } from "../Model/user.js";

export const resolvers = {
  Query: {
    getUsers: async () => {
      const users = await User.find();
      return users;
    },
    getBooks: async () => {
      const books = await Book.find();
      return books;
    },
    getUserById: async (_, args) => {
      const user = await User.findById(args.id);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
    getBookById: async (_, args) => {
      const book = await Book.findById(args.id);
      if (!book) {
        throw new Error("Book not found");
      }
      return book;
    },
  },

  Mutation: {
    createUser: async (_, args) => {
      const user = args.input;
      if (user.password !== user.confirmPassword) {
        throw new Error("Passwords do not match");
      }
      const newUser = new User({
        name: user.name,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
      });
      const savedUser = await newUser.save();
      return savedUser;
    },
    createBook: async (_, args) => {
      const book = args.input;

      const newBook = new Book({
        title: book.title,
        author: book.author,
        year: book.year,
        genre: book.genre,
        image: book.image,
        description: book.description,
        language: book.language,
      });
      const saveBook = await newBook.save();
      return saveBook;
    },
    updateBook: async (_, { id, input }) => {
      const updatedBook = await Book.findByIdAndUpdate(id, input, {
        new: true,
      });
      if (!updatedBook) {
        throw new Error("Book not found");
      }
      return updatedBook;
    },
    deleteBook: async (_, {id}) => {
      const deletedBook = await Book.findByIdAndDelete(id);
      if (!deletedBook) {
        throw new Error("Book not found");
      }
      return deletedBook;
    },
  },
};
