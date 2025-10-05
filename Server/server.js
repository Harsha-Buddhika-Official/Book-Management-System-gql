import { ApolloServer } from "apollo-server";
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import {typeDefs} from './graphql/typeDefs.js'
import {resolvers} from './graphql/resolvers.js'

dotenv.config();

const server = new ApolloServer({ typeDefs, resolvers });

const port = process.env.PORT;
const uri = `http://localhost:${port}`;
server.listen(port, () => {
  connectDB();
  console.log(`server is running at ${uri}`);
});
