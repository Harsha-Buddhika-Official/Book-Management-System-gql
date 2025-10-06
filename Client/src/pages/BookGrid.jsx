import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  TextField,
  InputAdornment,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  FormControl,
  InputLabel,
  Select,
  Pagination,
} from "@mui/material";
import {
  Edit,
  Delete,
  Search,
  Add,
  FilterList,
  MoreVert,
  Star,
  List as ListIcon,
  GridView,
  Sort,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { mockBooks, bookGenres, sortBooks, filterBooks } from "../data/booksData";

const BookGrid = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [filterGenre, setFilterGenre] = useState("");
  const [page, setPage] = useState(1);
  const [booksPerPage] = useState(12);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setBooks(mockBooks);
      setFilteredBooks(mockBooks);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = filterBooks(books, searchTerm);

    if (filterGenre) {
      filtered = filtered.filter(book => book.gener === filterGenre);
    }

    // Sort books using utility function
    filtered = sortBooks(filtered, sortBy);

    setFilteredBooks(filtered);
    setPage(1);
  }, [searchTerm, filterGenre, sortBy, books]);

  const handleMenuOpen = (event, book) => {
    setAnchorEl(event.currentTarget);
    setSelectedBook(book);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedBook(null);
  };

  const handleEdit = () => {
    navigate(`/books/edit/${selectedBook._id}`);
    handleMenuClose();
  };

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
    handleMenuClose();
  };

  const handleDeleteConfirm = () => {
    setBooks(books.filter(book => book._id !== selectedBook._id));
    setDeleteDialogOpen(false);
    setSelectedBook(null);
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setSelectedBook(null);
  };

  const genres = bookGenres;
  const startIndex = (page - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  return (
    <Box sx={{ backgroundColor: "background.default", minHeight: "calc(100vh - 64px)", py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <Typography variant="h4" fontWeight="bold">
              Book Collection
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                startIcon={<Add />}
                onClick={() => navigate("/books/add")}
              >
                Add Book
              </Button>
            </Box>
          </Box>

          {/* Results Count */}
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Showing {filteredBooks.length} books
          </Typography>
        </Box>

        {/* Books Grid */}
        {loading ? (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography>Loading books...</Typography>
          </Box>
        ) : filteredBooks.length === 0 ? (
          <Alert severity="info" sx={{ mb: 4 }}>
            No books found. {searchTerm ? "Try adjusting your search." : "Add your first book to get started!"}
          </Alert>
        ) : (
          <>
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {paginatedBooks.map((book) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={book.id}>
                  <Card 
                    sx={{ 
                      height: "100%", 
                      display: "flex", 
                      flexDirection: "column",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: 4,
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={book.image || "https://via.placeholder.com/300x240?text=No+Image"}
                      alt={book.title}
                      sx={{ objectFit: "cover" }}
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/300x240?text=No+Image";
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                      <Typography variant="h6" component="h3" gutterBottom noWrap>
                        {book.title}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        by {book.author}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, minHeight: "40px" }}>
                        {book.description}
                      </Typography>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                        <Chip label={book.gener} size="small" variant="outlined" />
                        <Typography variant="body2">{book.year}</Typography>
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Chip
                          label={book.language}
                          color="primary"
                          size="small"
                          variant="outlined"
                        />
                      </Box>
                    </CardContent>
                    <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
                      <Button size="small" onClick={() => navigate(`/books/edit/${book._id}`)}>
                        View Details
                      </Button>
                      <IconButton
                        size="small"
                        onClick={(e) => handleMenuOpen(e, book)}
                      >
                        <MoreVert />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Pagination */}
            {totalPages > 1 && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={(event, value) => setPage(value)}
                  color="primary"
                  size="large"
                />
              </Box>
            )}
          </>
        )}

        {/* Action Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleEdit}>
            <Edit sx={{ mr: 1 }} />
            Edit
          </MenuItem>
          <MenuItem onClick={handleDeleteClick} sx={{ color: "error.main" }}>
            <Delete sx={{ mr: 1 }} />
            Delete
          </MenuItem>
        </Menu>

        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteDialogOpen} onClose={handleDeleteCancel}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            Are you sure you want to delete "{selectedBook?.title}"? This action cannot be undone.
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteCancel}>Cancel</Button>
            <Button onClick={handleDeleteConfirm} color="error" variant="contained">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default BookGrid;