import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Alert,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { GET_BOOKS } from "../graphql/queries.js";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_BOOK } from "../graphql/mutation";
import BookCard from "../Components/BookCard.jsx";

const BookGrid = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const navigate = useNavigate();
  const [deleteBook] = useMutation(DELETE_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });
  
  const handleBookView = (id) => {
    navigate(`/books/view/${id}`);
  };

  const handleEditBook = (id) => {
    navigate(`/books/edit/${id}`);
  };

  const handleDeleteBook = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteBook({
          variables: { deleteBookId: id }
        });
      } catch (error) {
        console.error('Error deleting book:', error);
        alert('Failed to delete book. Please try again.');
      }
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "calc(100vh - 64px)",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="h4" fontWeight="bold">
              Book Collection
            </Typography>
            <Button 
              variant="contained" 
              startIcon={<Add />}
              onClick={() => navigate('/books/add')}
            >
              Add Book
            </Button>
          </Box>
        </Box>

        {/* Books Grid */}
        {loading ? (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography>Loading books...</Typography>
          </Box>
        ) : error ? (
          <Alert severity="error" sx={{ mb: 4 }}>
            Failed to load books: {error.message}
          </Alert>
        ) : !data?.getBooks || data.getBooks.length === 0 ? (
          <Alert severity="info" sx={{ mb: 4 }}>
            No books found. Add your first book to get started!
          </Alert>
        ) : (
          <>
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {data.getBooks.map((book) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={book.id}
                  width="360px"
                  onClick={() => handleBookView(book.id)}
                >
                  <BookCard
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    year={book.year}
                    genre={book.genre}
                    image={book.image}
                    description={book.description}
                    language={book.language}
                    onEdit={handleEditBook}
                    onDelete={handleDeleteBook}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
};

export default BookGrid;
