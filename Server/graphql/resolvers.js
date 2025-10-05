import { User } from "../Model/user.js";

export const resolvers = {
  Query: {
    getUsers: async () => {
      const users = await User.find();
      return users;
    },
    userCount: async () => {
      const count = await User.countDocuments();
      return count;
    },
    getUserById: async (parent, args) => {
      const user = await User.findById(args.id);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    },
  },

  Mutation: {
    createUser: async (parent, args) => {
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
  },
};
