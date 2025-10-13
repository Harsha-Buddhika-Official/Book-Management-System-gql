import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";
import jwt from "jsonwebtoken";

dotenv.config();

const getUser = async (token) => {
  try {
    if (token) {
      return jwt.verify(token, process.env.JWT_SECRET);
    }
    return null;
  } catch (error) {
    return null;
  }
};

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    const user = getUser(token.replace('Bearer ', ''));
    return { user };
  }
});

const port = process.env.PORT;
const uri = `http://localhost:${port}`;
server.listen(port, () => {
  connectDB();
  console.log(`server is running at ${uri}`);
});
