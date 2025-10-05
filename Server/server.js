import { ApolloServer } from "apollo-server";
import dotenv from 'dotenv';

dotenv.config();

const server = new ApolloServer({ typeDefs, resolvers });

const port = process.env.PORT;
const uri = `http://localhost:${port}`;
server.listen(port, () => {
  console.log(`server is running at ${uri}`);
});
