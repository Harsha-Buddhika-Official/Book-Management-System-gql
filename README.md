# 📚 Book Management System

A full-stack book management application with React, GraphQL, Node.js, and MongoDB.

## Features
- User authentication (JWT)
- Book CRUD operations
- Material-UI components
- GraphQL API
- MongoDB database

## Tech Stack
- **Frontend**: React, Vite, Material-UI, Apollo Client
- **Backend**: Node.js, Apollo Server, GraphQL
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT, bcryptjs

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/CodeCraft-Web/Book-Management-System-gql.git
cd Book-Management-System-gql
```

2. **Install dependencies**
```bash
# Backend
cd Server && npm install

# Frontend  
cd Client && npm install
```

3. **Environment Setup**
Create `.env` file in `Server` directory:
```env
MONGO_URI=mongodb://localhost:27017/bookstore_db
PORT=1000
JWT_SECRET=your_secret_key
NODE_ENV=development
```

4. **Start the application**
```bash
# Terminal 1 - Backend
cd Server && npm start

# Terminal 2 - Frontend
cd Client && npm run dev
```

5. **Access the app**
- Frontend: http://localhost:2000
- GraphQL Playground: http://localhost:1000

## API Operations

**Queries:**
- `getBooks` - Get all books
- `getBookById(id)` - Get book by ID
- `getUsers` - Get all users (auth required)
- `me` - Get current user (auth required)

**Mutations:**
- `createUser(input)` - Register user
- `loginUser(input)` - Login user
- `createBook(input)` - Add book (auth required)
- `updateBook(id, input)` - Update book (auth required)
- `deleteBook(id)` - Delete book (auth required)

**API Testing:** Use GraphQL Playground at http://localhost:1000

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License
ISC License - see `Server/package.json` for details.

## Author
**CodeCraft-Web Organization** - [Harsha Buddhika](https://github.com/CodeCraft-Web/Book-Management-System-gql)