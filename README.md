# 📚 Book Management System - GraphQL API

A modern, full-featured Book Management System built with GraphQL, Node.js, and MongoDB. This system allows users to manage both user accounts and book collections through a powerful GraphQL API.

## 🚀 Features

### User Management
- ✅ Create new user accounts
- ✅ Retrieve all users
- ✅ Get user by ID
- ✅ User count statistics
- 🔐 Password validation (confirmPassword matching)

### Book Management
- ✅ Add new books to the collection
- ✅ Retrieve all books
- ✅ Get book by ID
- 📖 Comprehensive book details (title, author, year, genre, image, description, language)

## 🛠️ Technology Stack

- **Backend Runtime:** Node.js (v22.14.0+)
- **API Layer:** GraphQL with Apollo Server v3.13.0
- **Database:** MongoDB with Mongoose ODM v8.19.0
- **Environment Management:** dotenv v17.2.3
- **Development:** nodemon v3.1.10
- **Module System:** ES6 Modules

## 📁 Project Structure

```
Book-Management-System-gql/
├── README.md                 # Project documentation
└── Server/
    ├── config/
    │   └── db.js            # Database connection configuration
    ├── graphql/
    │   ├── typeDefs.js      # GraphQL schema definitions
    │   └── resolvers.js     # GraphQL resolvers implementation
    ├── Model/
    │   ├── user.js          # User model (Mongoose schema)
    │   └── book.js          # Book model (Mongoose schema)
    ├── .env                 # Environment variables
    ├── .gitignore          # Git ignore rules
    ├── package.json        # Dependencies and scripts
    └── server.js           # Main application entry point
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18.0.0 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone https://github.com/Harsha-Buddhika-Official/Book-Management-System-gql.git
cd Book-Management-System-gql
```

### 2. Install Dependencies
```bash
cd Server
npm install
```

### 3. Environment Configuration
Create a `.env` file in the `Server` directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=your_preferred_port
```

**Example configuration:**
```env
# Local MongoDB
MONGO_URI=mongodb://localhost:27017/your_database_name
PORT=your_server_port

# MongoDB Atlas (recommended for production)
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name
PORT=your_server_port
```

### 4. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# For local MongoDB installation
mongod

# Or use MongoDB Atlas connection string in MONGO_URI
```

### 5. Run the Application
```bash
# Development mode with nodemon
npm start

# Production mode
nodemon
```

The GraphQL playground will be available at your configured server address.

## 🔗 API Documentation

### GraphQL Schema

#### Types

- **User**: Contains id, name, email, and password fields
- **Book**: Contains id, title, author, year, genre, image, description, and language fields

#### Input Types

- **createUserInput**: Required fields - name, email, password, confirmPassword
- **createBookInput**: Required field - title; Optional - author, year, genre, image, description, language

#### Queries

- **getUsers** - Retrieve all users
- **getUserById(id)** - Get specific user by ID
- **getBooks** - Retrieve all books
- **getBookById(id)** - Get specific book by ID
- **userCount** - Get total number of users

#### Mutations

- **createUser** - Create a new user account with name, email, and password
- **createBook** - Add a new book with title, author, year, genre, and other details

## 📝 Example Usage

### Available Operations
- **Create User**: `createUser(input: {name, email, password, confirmPassword})`
- **Get Users**: `getUsers` - Returns list of all users
- **Get User by ID**: `getUserById(id: "user_id")`
- **Create Book**: `createBook(input: {title, author, year, genre, etc.})`
- **Get Books**: `getBooks` - Returns list of all books
- **Get Book by ID**: `getBookById(id: "book_id")`

### Quick Start
1. Access GraphQL Playground at your server URL
2. Use the built-in schema explorer to see available operations
3. Test queries and mutations directly in the playground

## 🐛 Troubleshooting

### Common Issues

**1. Schema/Resolver Mismatch Error**
```
Error: Query.getBookById defined in resolvers, but not in schema
```
- **Solution:** Ensure all resolvers have corresponding schema definitions

**2. MongoDB Connection Error**
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
- **Solution:** Make sure MongoDB is running and the connection URI is correct in your `.env` file

**3. Input Type Error**
```
Error: The type of Mutation.createUser(input:) must be Input Type
```
- **Solution:** Use `input` keyword instead of `type` for input definitions

## 🔐 Security Notes

⚠️ **Important Security Considerations:**
- Passwords are currently stored in plain text - implement bcrypt hashing
- No authentication/authorization implemented
- No input validation or sanitization
- Consider implementing rate limiting
- Add CORS configuration for production

## 🚧 Development Status

**Current Version:** 1.0.0  
**Status:** ✅ Basic functionality implemented  

### Completed Features
- [x] User CRUD operations
- [x] Book CRUD operations  
- [x] GraphQL API setup
- [x] MongoDB integration
- [x] Basic validation

### Planned Improvements
- [ ] Password hashing and authentication
- [ ] Input validation and sanitization
- [ ] User authentication/authorization
- [ ] Book borrowing system
- [ ] Advanced search and filtering
- [ ] Unit and integration tests
- [ ] API documentation with GraphQL Playground
- [ ] Docker containerization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the `package.json` file for details.

## 👨‍💻 Author

**Harsha**  
GitHub: https://github.com/Harsha-Buddhika-Official/Book-Management-System-gql

---

**Made with ❤️ and GraphQL**