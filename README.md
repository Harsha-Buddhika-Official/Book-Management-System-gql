# 📚 Book Management System - Full Stack Application

A modern, full-featured Book Management System built with React, GraphQL, Node.js, and MongoDB. This comprehensive application provides both a beautiful user interface and a powerful GraphQL API for managing user accounts and book collections.

## 🚀 Features

### Frontend (React Client)
- 🎨 Modern, responsive UI with Material-UI components
- 🔐 User authentication (Login/Signup) with JWT
- 👁️ Password visibility toggle
- 📚 Interactive book grid and detailed view
- ➕ Add, edit, and manage books
- 🏠 Dashboard with statistics
- �️ Protected routes and authentication context
- 📱 Mobile-responsive design

### Backend (GraphQL API)
- ✅ User authentication and authorization
- ✅ JWT token-based authentication
- ✅ Create, read, update user accounts
- ✅ Complete book CRUD operations
- ✅ User and book statistics
- 🔐 Password validation and security

## 🛠️ Technology Stack

### Frontend
- **Framework:** React 18.3.1 with Vite
- **UI Library:** Material-UI (MUI) v7.3.4
- **GraphQL Client:** Apollo Client v3.14.0
- **Routing:** React Router DOM v7.9.3
- **State Management:** React Context API
- **Authentication:** JWT with Context Provider
- **Build Tool:** Vite with ESLint

### Backend
- **Runtime:** Node.js with ES6 Modules
- **API:** GraphQL with Apollo Server v3.13.0
- **Database:** MongoDB with Mongoose ODM v8.19.0
- **Authentication:** JSON Web Tokens (JWT) v9.0.2
- **Environment:** dotenv v17.2.3
- **Development:** nodemon v3.1.10

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
    │   └── db.js                # Database connection
    ├── graphql/
    │   ├── typeDefs.js          # GraphQL schema definitions
    │   └── resolvers.js         # GraphQL resolvers
    ├── Model/
    │   ├── user.js              # User model (Mongoose)
    │   └── book.js              # Book model (Mongoose)
    ├── .env                     # Environment variables
    ├── package.json             # Backend dependencies
    └── server.js                # Server entry point
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

# Install server dependencies
npm install

# Create environment file
cp .env.example .env  # or create .env manually
```

### 3. Frontend Setup
```bash
# Navigate to client directory (from root)
cd Client

# Install client dependencies
npm install
```

### 4. Environment Configuration
Create a `.env` file in the `Server` directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=4000
JWT_SECRET=your_jwt_secret_key
```

**Example configuration:**
```env
# Local MongoDB
MONGO_URI=mongodb://localhost:27017/book_management
PORT=4000
JWT_SECRET=your_super_secret_jwt_key

# Cloud MongoDB (Atlas)
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/book_management
PORT=4000
JWT_SECRET=your_super_secret_jwt_key
```

### 5. Start the Application

**Option 1: Run Both (Recommended)**
```bash
# Terminal 1 - Start Backend Server
cd Server
npm start

# Terminal 2 - Start Frontend Client
cd Client
npm run dev
```

**Option 2: Individual Services**
```bash
# Backend only (GraphQL API)
cd Server && npm start

# Frontend only (React App)
cd Client && npm run dev
```

### 6. Access the Application
- **Frontend:** http://localhost:5173 (Vite dev server)
- **Backend API:** http://localhost:4000 (GraphQL playground)
- **GraphQL Endpoint:** http://localhost:4000/graphql

## 🔗 API Documentation

### GraphQL Schema

#### Types

- **User**: Contains id, name, email, password, and timestamps
- **Book**: Contains id, title, author, year, genre, image, description, language, and timestamps
- **AuthPayload**: Contains token and user information for authentication

#### Input Types

- **RegisterInput**: name, email, password, confirmPassword
- **LoginInput**: email, password
- **BookInput**: title, author, year, genre, image, description, language

#### Queries

- **getUsers** - Retrieve all users (requires authentication)
- **getUserById(id)** - Get specific user by ID
- **getBooks** - Retrieve all books
- **getBookById(id)** - Get specific book by ID
- **getUserCount** - Get total number of users

#### Mutations

- **registerUser** - Create a new user account and return auth token
- **loginUser** - Authenticate user and return auth token
- **addBook** - Add a new book to the collection
- **updateBook** - Update existing book details
- **deleteBook** - Remove book from collection

## �️ Application Screenshots

### Frontend Features
- **🏠 Dashboard**: Welcome page with navigation and statistics
- **📋 Book Grid**: Visual book collection with search and filters
- **➕ Add Book**: Comprehensive book addition form
- **👤 Authentication**: Modern login/signup forms with validation
- **📖 Book Details**: Detailed view with edit/delete options
- **🔒 Protected Routes**: Secure authentication flow

### API Usage Examples

#### User Registration
```graphql
mutation RegisterUser {
  registerUser(input: {
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

#### Add Book
```graphql
mutation AddBook {
  addBook(input: {
    title: "The Great Gatsby"
    author: "F. Scott Fitzgerald"
    year: 1925
    genre: "Fiction"
    language: "English"
    description: "A classic American novel"
  }) {
    id
    title
    author
    year
  }
}
```

### Quick Start Guide
1. **Setup**: Follow installation instructions above
2. **Register**: Create a user account through the frontend or GraphQL
3. **Login**: Authenticate to access protected features
4. **Explore**: Browse books, add new ones, and manage your collection
5. **API Testing**: Use GraphQL playground at http://localhost:4000

## 🐛 Troubleshooting

### Common Issues

**1. Frontend Not Loading**
```
Error: Failed to fetch resource
```
- **Solution:** Ensure backend server is running on correct port
- **Check:** Apollo Client configuration in `apollo.js`

**2. MongoDB Connection Error**
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
- **Solution:** Make sure MongoDB is running and `.env` MONGO_URI is correct
- **Alternative:** Use MongoDB Atlas cloud database

**3. Authentication Issues**
```
Error: GraphQL error: Not authenticated
```
- **Solution:** Ensure JWT token is valid and properly stored
- **Check:** AuthContext and token storage in localStorage

**4. CORS Errors**
```
Error: CORS policy blocked
```
- **Solution:** Configure CORS in Apollo Server for frontend URL
- **Check:** Server allows origin http://localhost:5173

**5. Build/Development Errors**
```
Error: Cannot resolve dependency
```
- **Solution:** Clear node_modules and reinstall dependencies
- **Commands:** `rm -rf node_modules package-lock.json && npm install`

## 🔐 Security Features

✅ **Implemented Security Measures:**
- JWT-based authentication and authorization
- Protected routes and API endpoints
- Password validation and confirmation
- Context-based authentication state management
- Secure token storage and management

⚠️ **Production Considerations:**
- Implement password hashing with bcrypt
- Add rate limiting for API endpoints
- Configure HTTPS for production deployment
- Implement input validation and sanitization
- Add environment-specific security headers
- Configure CORS properly for production domains

## 🚧 Development Status

**Current Version:** 2.0.0  
**Status:** ✅ Full-stack application with authentication  

### ✅ Completed Features
- [x] **Frontend React Application**
  - [x] Modern UI with Material-UI components
  - [x] User authentication (Login/Signup)
  - [x] Protected routes and navigation
  - [x] Book management interface
  - [x] Responsive design
  - [x] Context-based state management
- [x] **Backend GraphQL API**
  - [x] JWT authentication system
  - [x] User and book CRUD operations
  - [x] MongoDB integration with Mongoose
  - [x] GraphQL schema and resolvers
  - [x] Authentication middleware
- [x] **Core Functionality**
  - [x] User registration and login
  - [x] Book collection management
  - [x] Search and filtering
  - [x] Form validation

### 🚀 Upcoming Features
- [ ] Advanced search with filters (genre, author, year)
- [ ] Book borrowing and return system
- [ ] User profiles and preferences
- [ ] Book reviews and ratings
- [ ] Reading lists and favorites
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Export/import book collections
- [ ] Mobile app (React Native)
- [ ] Real-time updates with subscriptions

### 🔧 Technical Improvements
- [ ] Unit and integration testing
- [ ] Password hashing with bcrypt
- [ ] Advanced input validation
- [ ] Rate limiting and security headers
- [ ] Docker containerization
- [ ] CI/CD pipeline setup
- [ ] Performance optimization
- [ ] Error boundary implementation
- [ ] Logging and monitoring

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the `package.json` file for details.

## � Deployment

### Frontend (Vercel/Netlify)
1. Build the client: `cd Client && npm run build`
2. Deploy `dist` folder to your hosting service
3. Configure environment variables for production API URL

### Backend (Heroku/Railway/DigitalOcean)
1. Set production environment variables
2. Configure MongoDB Atlas for production database
3. Deploy server code with proper CORS configuration

### Environment Variables for Production
```env
# Backend (.env)
MONGO_URI=mongodb+srv://your-atlas-connection
PORT=4000
JWT_SECRET=your-production-jwt-secret
NODE_ENV=production

# Frontend (build-time)
VITE_API_URL=https://your-backend-api.com
```

## �👨‍💻 Contributors

**CodeCraft-Web Organization**  
- Repository: https://github.com/CodeCraft-Web/Book-Management-System-gql
- Original Author: Harsha Buddhika

### Contributing Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Follow the existing code style and structure
4. Write clear commit messages
5. Test your changes thoroughly
6. Update documentation as needed
7. Submit a pull request with detailed description

---

**Made with ❤️ using React, GraphQL, and MongoDB**  
*A modern full-stack book management solution*