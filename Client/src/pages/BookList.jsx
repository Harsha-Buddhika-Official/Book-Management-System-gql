import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  TextField,
  InputAdornment,
  Chip,
  Avatar,
  TablePagination,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
} from "@mui/material";
import {
  Edit,
  Delete,
  Search,
  Add,
  FilterList,
  MoreVert,
  Book,
  Person,
  Category,
  GridView,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { mockBooks, getStatusColor, filterBooks } from "../data/booksData";

const BookList = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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
    const filtered = filterBooks(books, searchTerm);
    setFilteredBooks(filtered);
    setPage(0);
  }, [searchTerm, books]);

  const handleMenuOpen = (event, book) => {
    setAnchorEl(event.currentTarget);
    setSelectedBook(book);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedBook(null);
  };

  const handleEdit = () => {
    navigate(`/books/edit/${selectedBook.id}`);
    handleMenuClose();
  };

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
    handleMenuClose();
  };

  const handleDeleteConfirm = () => {
    // TODO: Implement actual delete logic
    setBooks(books.filter(book => book.id !== selectedBook.id));
    setDeleteDialogOpen(false);
    setSelectedBook(null);
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setSelectedBook(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedBooks = filteredBooks.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

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
                variant="outlined"
                startIcon={<GridView />}
                onClick={() => navigate("/books/grid")}
              >
                Grid View
              </Button>
              <Button
                variant="contained"
                startIcon={<Add />}
                onClick={() => navigate("/books/add")}
              >
                Add Book
              </Button>
            </Box>
          </Box>

          {/* Search and Filter */}
          <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 3 }}>
            <TextField
              fullWidth
              placeholder="Search books, authors, or genres..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              sx={{ maxWidth: 400 }}
            />
            <Button
              variant="outlined"
              startIcon={<FilterList />}
            >
              Filter
            </Button>
          </Box>

          {/* Stats */}
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Chip
              icon={<Book />}
              label={`${filteredBooks.length} Books`}
              variant="outlined"
            />
            <Chip
              icon={<Person />}
              label={`${new Set(books.map(book => book.author)).size} Authors`}
              variant="outlined"
            />
            <Chip
              icon={<Category />}
              label={`${new Set(books.map(book => book.genre)).size} Genres`}
              variant="outlined"
            />
          </Box>
        </Box>

        {/* Table */}
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Book</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Genre</TableCell>
                  <TableCell>Year</TableCell>
                  <TableCell>ISBN</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={8} align="center">
                      Loading books...
                    </TableCell>
                  </TableRow>
                ) : paginatedBooks.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} align="center">
                      <Alert severity="info">
                        No books found. {searchTerm ? "Try adjusting your search." : "Add your first book to get started!"}
                      </Alert>
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedBooks.map((book) => (
                    <TableRow key={book.id} hover>
                      <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Avatar sx={{ mr: 2, bgcolor: "primary.main" }}>
                            <Book />
                          </Avatar>
                          <Typography variant="subtitle2" fontWeight="medium">
                            {book.title}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell>
                        <Chip label={book.genre} size="small" variant="outlined" />
                      </TableCell>
                      <TableCell>{book.publishedYear}</TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontFamily: "monospace" }}>
                          {book.isbn}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={book.status}
                          color={getStatusColor(book.status)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          ⭐ {book.rating}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          onClick={(e) => handleMenuOpen(e, book)}
                          size="small"
                        >
                          <MoreVert />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
          
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50]}
            component="div"
            count={filteredBooks.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>

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

export default BookList;