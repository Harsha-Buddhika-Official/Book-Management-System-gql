import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { client, ApolloProvider } from "./apollo.js";
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
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/books" element={<BookGrid />} />
                <Route path="/books/add" element={<AddBook />} />
                <Route path="/books/edit/:id" element={<EditBook />} />
                <Route path="/books/view/:id" element={<ViewBook />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
