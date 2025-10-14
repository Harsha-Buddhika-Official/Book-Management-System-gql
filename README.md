# 📚 Book Management System - Full Stack GraphQL Application

> A modern, full-stack Book Management System built with **React**, **GraphQL**, **Node.js**, and **MongoDB**. This comprehensive application provides both a beautiful user interface and a powerful GraphQL API for managing user accounts and book collections with complete authentication.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Node.js Version](https://img.shields.io/badge/Node.js-18.x-brightgreen)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![GraphQL](https://img.shields.io/badge/GraphQL-16.11.0-e10098)](https://graphql.org/)

## ✨ Features

### 🎨 Frontend (React Client)
- **Modern UI/UX**: Material-UI components with responsive design
- **Authentication**: Secure login/signup with JWT tokens and persistent authentication state
- **Book Management**: Complete CRUD operations with beautiful interface
- **Protected Routes**: Role-based access control and navigation guards
- **Real-time Updates**: Apollo Client with optimistic UI updates
- **Form Validation**: Comprehensive client-side and server-side validation
- **Mobile Responsive**: Optimized for all device sizes
- **Dark Mode Ready**: Modern theming system

### ⚡ Backend (GraphQL API)
- **GraphQL Schema**: Type-safe API with comprehensive queries and mutations
- **JWT Authentication**: Secure token-based user authentication
- **Database Integration**: MongoDB with Mongoose ODM
- **Password Security**: Bcrypt hashing for secure password storage
- **Error Handling**: Comprehensive error management and validation
- **CORS Support**: Proper cross-origin resource sharing configuration
- **Development Tools**: GraphQL Playground for API testing
- **Authentication Middleware**: Custom JWT verification with context injection

## 🛠️ Technology Stack

### Frontend Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | Core frontend framework |
| **Vite** | 7.1.7 | Fast build tool and dev server |
| **Material-UI** | 7.3.4 | Modern React UI components |
| **Apollo Client** | 3.14.0 | GraphQL client with caching |
| **React Router** | 7.9.3 | Client-side routing |
| **GraphQL** | 16.11.0 | Query language and runtime |
| **ESLint** | 9.36.0 | Code linting and formatting |

### Backend Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| **Node.js** | 18.x | JavaScript runtime environment |
| **Apollo Server** | 3.13.0 | GraphQL server implementation |
| **MongoDB** | Latest | NoSQL database |
| **Mongoose** | 8.19.0 | MongoDB ODM |
| **JWT** | 9.0.2 | Authentication tokens |
| **bcryptjs** | 3.0.2 | Password hashing |
| **dotenv** | 17.2.3 | Environment variable management |
| **nodemon** | 3.1.10 | Development server auto-restart |

## 📁 Project Structure

```
Book-Management-System-gql/
├── README.md                    # Project documentation
├── Client/                      # React Frontend Application
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── Components/          # Reusable UI components
│   │   │   ├── BookCard.jsx     # Book display card
│   │   │   ├── Footer.jsx       # Footer component
│   │   │   ├── Navbar.jsx       # Navigation bar
│   │   │   └── ProtectedRoute.jsx # Route protection
│   │   ├── pages/               # Application pages
│   │   │   ├── AddBook.jsx      # Add new book form
│   │   │   ├── BookGrid.jsx     # Book collection grid
│   │   │   ├── EditBook.jsx     # Edit book form
│   │   │   ├── Home.jsx         # Dashboard/landing page
│   │   │   ├── Login.jsx        # User login form
│   │   │   ├── Signup.jsx       # User registration form
│   │   │   └── ViewBook.jsx     # Book details view
│   │   ├── graphql/             # GraphQL operations
│   │   │   ├── queries.js       # GraphQL queries
│   │   │   └── mutation.js      # GraphQL mutations
│   │   ├── utils/               # Utility functions
│   │   │   └── AuthContext.jsx  # Authentication context
│   │   ├── apollo.js            # Apollo Client configuration
│   │   ├── App.jsx              # Main app component
│   │   └── main.jsx             # Application entry point
│   ├── eslint.config.js         # ESLint configuration
│   ├── index.html               # HTML template
│   ├── package.json             # Frontend dependencies
│   └── vite.config.js           # Vite configuration
└── Server/                      # GraphQL Backend API
    ├── config/
    │   └── db.js                # MongoDB connection configuration
    ├── graphql/
    │   ├── typeDefs.js          # GraphQL schema definitions
    │   └── resolvers.js         # GraphQL resolvers with auth middleware
    ├── Model/
    │   ├── user.js              # User model (Mongoose schema)
    │   └── book.js              # Book model (Mongoose schema)
    ├── .env                     # Environment variables (not tracked)
    ├── package.json             # Backend dependencies and scripts
    └── server.js                # Apollo Server entry point
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18.0.0 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone https://github.com/CodeCraft-Web/Book-Management-System-gql.git
cd Book-Management-System-gql
```

### 2. Backend Setup
```bash
# Navigate to server directory
cd Server

# Install dependencies
npm install

# Create environment configuration
# Create a .env file with your configuration
```

### 3. Frontend Setup
```bash
# Navigate to client directory (from project root)
cd Client

# Install dependencies
npm install
```

### 4. Environment Configuration

Create a `.env` file in the `Server` directory with these variables:

```env
MONGO_URI=mongodb://localhost:27017/bookstore_db
PORT=4000
JWT_SECRET=demo_secret_key_change_in_production
NODE_ENV=development
```

> **⚠️ Important:** 
> - Replace with your actual MongoDB connection string
> - Use a strong JWT secret (32+ characters) in production
> - Never commit your `.env` file to version control

### 5. Start the Application

#### 🚀 Quick Start (Recommended)
Open two terminal windows and run:

**Terminal 1 - Backend Server:**
```bash
cd Server
npm start
```

**Terminal 2 - Frontend Client:**
```bash
cd Client  
npm run dev
```

#### 🔧 Alternative: Individual Services
```bash
# Backend only (GraphQL API)
cd Server && npm start

# Frontend only (React App) 
cd Client && npm run dev
```

### 6. Access Your Application

| Service | URL | Description |
|---------|-----|-------------|
| **Frontend App** | [http://localhost:5173](http://localhost:5173) | React application (Vite dev server) |
| **GraphQL Playground** | [http://localhost:4000](http://localhost:4000) | Interactive API explorer |
| **GraphQL API Endpoint** | [http://localhost:4000/graphql](http://localhost:4000/graphql) | GraphQL API endpoint |

> **🎉 Success!** If both services are running, you can now register a new account and start managing your book collection!

## � GraphQL API Documentation

### 🔍 Schema Overview

<details>
<summary>📋 **Core Types**</summary>

```graphql
type user {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type book {
  id: ID!
  title: String!
  author: String
  year: Int
  genre: String
  image: String
  description: String
  language: String
  enterTime: String
}

type AuthPayload {
  token: String!
  user: user!
}
```
</details>

<details>
<summary>📝 **Input Types**</summary>

```graphql
input createUserInput {
  name: String!
  email: String!
  password: String!
  confirmPassword: String!
}

input inputUser {
  email: String
  password: String
}

input createBookInput {
  title: String!
  author: String
  year: Int
  genre: String
  image: String
  description: String
  language: String
  enterTime: String
}

input updateBookInput {
  title: String
  author: String
  year: Int
  genre: String
  image: String
  description: String
  language: String
}
```
</details>

### 🔍 Available Operations

#### **Queries**
| Operation | Description | Auth Required |
|-----------|-------------|---------------|
| `getUsers` | Fetch all registered users | ✅ Yes |
| `getUserById(id)` | Get specific user details | ✅ Yes |
| `getBooks` | Retrieve all books in collection | ❌ No |
| `getBookById(id)` | Get detailed book information | ❌ No |
| `me` | Get current authenticated user | ✅ Yes |

#### **Mutations**
| Operation | Description | Auth Required |
|-----------|-------------|---------------|
| `createUser(input)` | Create new user account | ❌ No |
| `loginUser(input)` | Authenticate existing user | ❌ No |
| `createBook(input)` | Add new book to collection | ✅ Yes |
| `updateBook(id, input)` | Update existing book | ✅ Yes |
| `deleteBook(id)` | Remove book from collection | ✅ Yes |

## 🎯 Quick Start Guide

### For Users
1. **🚀 Setup**: Follow the installation instructions above
2. **👤 Register**: Create your account through the beautiful signup form
3. **🔐 Login**: Authenticate to unlock all features
4. **� Explore**: Browse the book collection and discover new titles
5. **➕ Add Books**: Contribute to the library with the easy-to-use form
6. **✏️ Manage**: Edit or remove books you've added

### For Developers
1. **� Development**: Use GraphQL Playground at `http://localhost:4000`
2. **🧪 Testing**: Experiment with queries and mutations
3. **📖 Documentation**: Explore the auto-generated schema docs
4. **🔍 Debugging**: Check browser dev tools and server logs
5. **� Deploy**: Follow the deployment section for production setup

## 💻 API Usage Examples

<details>
<summary>🔐 **User Authentication**</summary>

**Register New User:**
```graphql
mutation CreateUser {
  createUser(input: {
    name: "John Doe"
    email: "john@example.com"
    password: "securePassword123"
    confirmPassword: "securePassword123"
  }) {
    token
    user {
      id
      name
      email
    }
  }
}
```

**Login User:**
```graphql
mutation LoginUser {
  loginUser(input: {
    email: "john@example.com"
    password: "securePassword123"
  }) {
    token
    user {
      id
      name
      email
    }
  }
}
```
</details>

<details>
<summary>📚 **Book Management**</summary>

**Add New Book:**
```graphql
mutation CreateBook {
  createBook(input: {
    title: "The Great Gatsby"
    author: "F. Scott Fitzgerald"
    year: 1925
    genre: "Fiction"
    language: "English"
    description: "A classic American novel about the Jazz Age"
    image: "https://example.com/gatsby-cover.jpg"
    enterTime: "2025-10-14T10:00:00Z"
  }) {
    id
    title
    author
    year
    genre
    enterTime
  }
}
```

**Get All Books:**
```graphql
query GetBooks {
  getBooks {
    id
    title
    author
    year
    genre
    description
    image
    language
    enterTime
  }
}
```

**Update Book:**
```graphql
mutation UpdateBook {
  updateBook(id: "book_id_here", input: {
    title: "The Great Gatsby - Updated Edition"
    description: "An updated description"
    year: 1925
    genre: "Classic Fiction"
  }) {
    id
    title
    description
    year
    genre
  }
}
```

**Get Current User:**
```graphql
query Me {
  me {
    id
    name
    email
  }
}
```
</details>

## 🐛 Troubleshooting

### 🔧 Common Issues & Solutions

<details>
<summary>❌ **Frontend Not Loading**</summary>

```bash
Error: Failed to fetch resource
```
**Solutions:**
- ✅ Ensure backend server is running on port 4000
- ✅ Check Apollo Client configuration in `Client/src/apollo.js`
- ✅ Verify network connectivity between frontend and backend
- ✅ Check browser console for detailed error messages
</details>

<details>
<summary>❌ **MongoDB Connection Error**</summary>

```bash
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solutions:**
- ✅ Start MongoDB service: `net start MongoDB` (Windows) or `brew services start mongodb/brew/mongodb-community` (macOS)
- ✅ Verify `.env` file `MONGO_URI` configuration
- ✅ Alternative: Use MongoDB Atlas cloud database
- ✅ Check MongoDB is listening on correct port (27017)
</details>

<details>
<summary>❌ **Authentication Issues**</summary>

```bash
Error: GraphQL error: Not authenticated
```
**Solutions:**
- ✅ Verify JWT token is stored in localStorage
- ✅ Check token expiration and refresh if needed
- ✅ Ensure AuthContext is properly implemented
- ✅ Verify Authorization header is sent with requests
</details>

<details>
<summary>❌ **CORS Policy Errors**</summary>

```bash
Error: CORS policy blocked
```
**Solutions:**
- ✅ Configure CORS in Apollo Server for frontend URL
- ✅ Ensure server allows origin `http://localhost:5173`
- ✅ Check preflight OPTIONS requests are handled
- ✅ Verify credentials are properly configured
</details>

<details>
<summary>❌ **Build/Dependency Errors**</summary>

```bash
Error: Cannot resolve dependency
```
**Solutions:**
- ✅ Clear node_modules and reinstall:
```bash
# For Windows
rmdir /s node_modules
del package-lock.json
npm install

# For macOS/Linux  
rm -rf node_modules package-lock.json
npm install
```
- ✅ Check Node.js version compatibility (18.x recommended)
- ✅ Verify all peer dependencies are installed
</details>

## 🔐 Security Features

✅ **Implemented Security Measures:**
- JWT-based authentication and authorization with 1-hour token expiration
- Password hashing with bcryptjs for secure storage
- Protected GraphQL queries and mutations using authentication middleware
- Authorization headers with Bearer token format
- Context-based authentication state management in React
- Secure token storage in localStorage with automatic header injection

⚠️ **Production Considerations:**
- Configure rate limiting for GraphQL endpoints
- Set up HTTPS for production deployment
- Implement input validation and sanitization for all user inputs
- Add environment-specific security headers
- Configure CORS properly for production domains
- Use stronger JWT secrets (32+ characters)
- Consider implementing refresh tokens for better security

## 🚧 Development Status

**Current Version:** 1.0.0  
**Status:** ✅ Production-ready full-stack application with JWT authentication  
**Last Updated:** October 2025

### ✅ Completed Features

<details>
<summary>🎨 **Frontend Application**</summary>

- ✅ **Modern UI/UX**: Material-UI v7.3.4 components
- ✅ **Authentication System**: Complete login/signup flow with automatic user retrieval
- ✅ **Protected Routes**: Route guards and navigation security  
- ✅ **Book Management**: Full CRUD interface with validation
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **State Management**: React Context API integration
- ✅ **Apollo Integration**: GraphQL client with caching
- ✅ **Form Validation**: Client-side validation with error handling
- ✅ **Loading States**: Skeleton loaders and progress indicators
</details>

<details>
<summary>⚡ **Backend API**</summary>

- ✅ **GraphQL Schema**: Complete type definitions and resolvers
- ✅ **JWT Authentication**: Secure token-based auth system
- ✅ **Password Security**: Bcryptjs hashing implementation
- ✅ **Database Integration**: MongoDB with Mongoose ODM
- ✅ **CRUD Operations**: User and book management
- ✅ **Error Handling**: Comprehensive error management
- ✅ **CORS Configuration**: Cross-origin resource sharing
- ✅ **Environment Config**: Secure environment variable handling
</details>

<details>
<summary>🛡️ **Security & Performance**</summary>

- ✅ **JWT Token Management**: Secure authentication flow with 1-hour expiration
- ✅ **Password Hashing**: Bcryptjs implementation with salt rounds
- ✅ **Input Validation**: Server-side data validation
- ✅ **Error Boundary**: Graceful error handling
- ✅ **Code Splitting**: Optimized bundle loading
- ✅ **Apollo Caching**: Efficient data management
</details>

### 🚀 Roadmap & Future Features

<details>
<summary>📈 **Version 3.0 - Enhanced Features**</summary>

- [ ] **Advanced Search**: Multi-field filtering (genre, author, year, rating)
- [ ] **Book Reviews**: User ratings and review system
- [ ] **Reading Lists**: Personal collections and wishlists  
- [ ] **User Profiles**: Avatar, preferences, and reading history
- [ ] **Social Features**: Follow users, share collections
- [ ] **Recommendation Engine**: AI-powered book suggestions
- [ ] **Reading Progress**: Track reading status and progress
- [ ] **Book Categories**: Advanced tagging and categorization
</details>

<details>
<summary>🔧 **Technical Enhancements**</summary>

- [ ] **Testing Suite**: Jest + React Testing Library + Cypress
- [ ] **Performance**: Code splitting, lazy loading, PWA features
- [ ] **Monitoring**: Application logging and error tracking
- [ ] **Security**: Rate limiting, input sanitization, OWASP compliance
- [ ] **DevOps**: Docker containerization + CI/CD pipelines
- [ ] **Scalability**: Redis caching, database indexing
- [ ] **Mobile App**: React Native version
- [ ] **Real-time**: GraphQL subscriptions for live updates
</details>

<details>
<summary>📊 **Admin & Analytics**</summary>

- [ ] **Admin Dashboard**: User management, book moderation
- [ ] **Analytics**: Usage statistics, popular books tracking
- [ ] **Content Management**: Bulk operations, import/export
- [ ] **Notifications**: Email alerts, reading reminders
- [ ] **API Keys**: Third-party integrations (Goodreads, Google Books)
- [ ] **Backup System**: Automated data backups
</details>

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🌐 Deployment Guide

### 🚀 Frontend Deployment (Vercel/Netlify)

<details>
<summary>**Vercel Deployment**</summary>

1. **Build the application:**
```bash
cd Client
npm run build
```

2. **Deploy to Vercel:**
```bash
npm install -g vercel
vercel --prod
```

3. **Environment Variables:**
```env
VITE_API_URL=https://bookapi-demo.vercel.app
VITE_GRAPHQL_URI=https://bookapi-demo.vercel.app/graphql
```
</details>

### ⚡ Backend Deployment (Railway/Render/Heroku)

<details>
<summary>**Railway Deployment**</summary>

1. **Connect your GitHub repository to Railway**
2. **Set environment variables in Railway dashboard:**
```env
MONGO_URI=mongodb+srv://demo:pass@cluster.mongodb.net/bookstore
PORT=4000
JWT_SECRET=secure_production_secret_key
NODE_ENV=production
```

3. **Deploy automatically on push to main branch**
</details>

<details>
<summary>**Production Environment Variables**</summary>

**Backend (.env):**
```env
MONGO_URI=mongodb+srv://demo:password@cluster.mongodb.net/bookstore_prod
PORT=4000
JWT_SECRET=production_jwt_secret_32_chars_minimum
NODE_ENV=production
CORS_ORIGIN=https://mybookapp.com
```

**Frontend (build-time):**
```env
VITE_API_URL=https://bookapi.herokuapp.com
VITE_GRAPHQL_URI=https://bookapi.herokuapp.com/graphql
```

> Replace all values with your actual production credentials
</details>

### 🔒 Production Checklist

- [ ] **Security**: Use strong JWT secrets (32+ characters)
- [ ] **Database**: Configure MongoDB Atlas with IP whitelist
- [ ] **CORS**: Set specific origins, avoid wildcards
- [ ] **HTTPS**: Enable SSL certificates for both frontend and backend
- [ ] **Environment**: Set NODE_ENV=production
- [ ] **Monitoring**: Set up logging and error tracking
- [ ] **Backup**: Configure automated database backups

## 🤝 Contributing

We welcome contributions! Here's how you can help improve this project:

### 🛠️ Development Workflow

1. **Fork & Clone**
```bash
git clone https://github.com/YOUR_USERNAME/Book-Management-System-gql.git
cd Book-Management-System-gql
```

2. **Create Feature Branch**
```bash
git checkout -b feature/amazing-new-feature
```

3. **Make Changes & Test**
```bash
# Install dependencies
cd Client && npm install
cd ../Server && npm install

# Run tests (when available)
npm test

# Start development servers
npm start
```

4. **Commit & Push**
```bash
git add .
git commit -m "✨ Add amazing new feature"
git push origin feature/amazing-new-feature
```

5. **Submit Pull Request**

### 📋 Contribution Guidelines

- **Code Style**: Follow existing patterns and use ESLint configurations
- **Commit Messages**: Use conventional commits (✨ feat, 🐛 fix, 📚 docs, etc.)
- **Testing**: Add tests for new features (when testing suite is available)
- **Documentation**: Update README and code comments
- **Breaking Changes**: Clearly document any breaking changes

### 🐛 Bug Reports & Feature Requests

- **Issues**: Use GitHub Issues with detailed descriptions
- **Labels**: Apply appropriate labels (bug, enhancement, question)
- **Templates**: Follow issue templates when available

## 📄 License

This project is licensed under the **ISC License** - see the `Server/package.json` file for details.

## 👥 Contributors & Maintainers

### 🏢 **CodeCraft-Web Organization**
- **Repository**: [Book-Management-System-gql](https://github.com/CodeCraft-Web/Book-Management-System-gql)
- **Original Author**: Harsha Buddhika

### 🙏 **Acknowledgments**
- Apollo GraphQL team for excellent documentation
- Material-UI team for beautiful React components  
- MongoDB team for the powerful database platform
- Vite team for the blazing fast build tool
- React team for the amazing framework

---

<div align="center">

**Made with ❤️ using React, GraphQL, and MongoDB**

*A modern, full-stack book management solution for the digital age*

[![GitHub stars](https://img.shields.io/github/stars/CodeCraft-Web/Book-Management-System-gql?style=social)](https://github.com/CodeCraft-Web/Book-Management-System-gql)
[![GitHub forks](https://img.shields.io/github/forks/CodeCraft-Web/Book-Management-System-gql?style=social)](https://github.com/CodeCraft-Web/Book-Management-System-gql)

[⬆️ Back to Top](#-book-management-system---full-stack-graphql-application)

</div>