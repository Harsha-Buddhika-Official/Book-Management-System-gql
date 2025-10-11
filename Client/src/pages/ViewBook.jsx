import React from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Grid,
  CardMedia,
  Chip,
  Divider,
  Alert,
  CircularProgress,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { GET_BOOK_BY_ID } from "../graphql/queries";
import { DELETE_BOOK } from "../graphql/mutation";
import { useQuery, useMutation } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom";

const ViewBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_BOOK_BY_ID, {
    variables: { getBookByIdId: id },
    skip: !id,
  });
  const [deleteBook] = useMutation(DELETE_BOOK);

  // Handler functions
  const handleEdit = (id) => {
    navigate(`/books/edit/${id}`);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteBook({
          variables: { deleteBookId: id }
        });
        navigate('/books');
      } catch (error) {
        console.error('Error deleting book:', error);
        alert('Failed to delete book. Please try again.');
      }
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 4 }}>
        <Alert severity="error">
          Error loading book: {error.message}
        </Alert>
      </Box>
    );
  }

  if (!data?.getBookById) {
    return (
      <Box sx={{ p: 4 }}>
        <Alert severity="warning">
          Book not found
        </Alert>
      </Box>
    );
  }

  const book = data.getBookById;

  return (
    <Box sx={{ p: 4, maxWidth: 1200, mx: "auto" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3}>
            <CardMedia
              component="img"
              image={book.image || "https://via.placeholder.com/300x400?text=No+Image"}
              alt={book.title}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: 500,
                objectFit: "cover",
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mb: 2,
              }}
            >
              <Typography variant="h3" component="h1" gutterBottom>
                {book.title}
              </Typography>
            </Box>

            <Typography variant="h5" color="text.secondary" gutterBottom>
              by {book.author}
            </Typography>

            <Box sx={{ mb: 2 }}>
              <Chip label={book.genre} color="primary" variant="outlined" />
            </Box>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={6} sm={4}>
                <Typography variant="subtitle2" color="text.secondary">
                  Year
                </Typography>
                <Typography variant="body1">{book.year}</Typography>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Typography variant="subtitle2" color="text.secondary">
                  Language
                </Typography>
                <Typography variant="body1">{book.language}</Typography>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Box>
              <Typography variant="h6" gutterBottom>
                Description
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                {book.description}
              </Typography>
            </Box>

            <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleEdit(book.id)}
                startIcon={<EditIcon />}
              >
                Edit Book
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={handleDelete}
                startIcon={<DeleteIcon />}
              >
                Delete Book
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ViewBook;
