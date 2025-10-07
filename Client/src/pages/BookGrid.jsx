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

const BookGrid = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const navigate = useNavigate();
  const handleBookView = (id) => {
    navigate(`/books/view/${id}`);
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
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      cursor: "pointer",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: 4,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={
                        book.image ||
                        "https://via.placeholder.com/300x240?text=No+Image"
                      }
                      alt={book.title}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom
                        noWrap
                      >
                        {book.title}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        gutterBottom
                      >
                        by {book.author}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2, minHeight: "40px" }}
                      >
                        {book.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 1,
                        }}
                      >
                        <Chip
                          label={book.genre}
                          size="small"
                          variant="outlined"
                        />
                        <Typography variant="body2">{book.year}</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Chip
                          label={book.language}
                          color="primary"
                          size="small"
                          variant="outlined"
                        />
                      </Box>
                    </CardContent>
                  </Card>
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
