import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { client, ApolloProvider } from "./apollo.js";
import { AuthProvider } from "./utils/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BookGrid from "./pages/BookGrid";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ViewBook from "./pages/ViewBook.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
    },
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <Router>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <Navbar />
              <main style={{ flex: 1 }}>
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/" element={<Login />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route
                    path="/books"
                    element={
                      <ProtectedRoute>
                        <BookGrid />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/add-book"
                    element={
                      <ProtectedRoute>
                        <AddBook />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/books/add"
                    element={
                      <ProtectedRoute>
                        <AddBook />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/books/edit/:id"
                    element={
                      <ProtectedRoute>
                        <EditBook />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/edit-book/:id"
                    element={
                      <ProtectedRoute>
                        <EditBook />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/books/view/:id"
                    element={
                      <ProtectedRoute>
                        <ViewBook />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/view-book/:id"
                    element={
                      <ProtectedRoute>
                        <ViewBook />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
