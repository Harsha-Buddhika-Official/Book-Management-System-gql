import { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Card,
  CardMedia,
  IconButton,
  InputAdornment,
} from "@mui/material";
import {
  ArrowBack,
  Save,
  Book,
  Person,
  Category,
  DateRange,
  PhotoCamera,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_BOOK } from "../graphql/mutation";
import { GET_BOOKS } from "../graphql/queries";
import { bookGenres, bookLanguages } from "../data/booksData";

const AddBook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [addBook] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    genre: "Fiction",
    image: "",
    description: "",
    language: "English",
  });
  const bookGenres = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Fantasy",
    "Biography",
    "History",
    "Self-Help",
    "Business",
    "Technology",
    "Health",
    "Travel",
    "Children",
    "Young Adult",
    "Poetry",
    "Drama",
    "Comedy",
    "Horror",
    "Thriller",
    "Dystopian",
  ];
  const bookLanguages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Portuguese",
    "Japanese",
    "Chinese",
    "Korean",
    "Russian",
    "Arabic",
  ];
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.author.trim()) {
      newErrors.author = "Author is required";
    }

    if (!formData.genre) {
      newErrors.genre = "Genre is required";
    }

    if (!formData.year) {
      newErrors.year = "Year is required";
    } else {
      const year = parseInt(formData.year);
      if (year < 1000 || year > new Date().getFullYear()) {
        newErrors.year = "Please enter a valid year";
      }
    }
    
    if (!formData.language) {
      newErrors.language = "Language is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const bookInput = {
        title: formData.title,
        author: formData.author,
        year: parseInt(formData.year),
        genre: formData.genre,
        image: formData.image,
        description: formData.description,
        language: formData.language,
      };

      await addBook({
        variables: { input: bookInput }
      });

      // Navigate back to book list on success
      navigate("/books");
    } catch (error) {
      setErrors({ submit: "Failed to add book. Please try again." });
      console.error("Error adding book:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "calc(100vh - 64px)",
        py: 4,
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Button
            startIcon={<ArrowBack />}
            onClick={handleCancel}
            sx={{ mb: 2 }}
          >
            Back
          </Button>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Add New Book
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Fill in the information below to add a new book to your collection.
          </Typography>
        </Box>

        {errors.submit && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {errors.submit}
          </Alert>
        )}

        <Paper sx={{ p: 4 }}>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Cover Image Preview */}
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography variant="h6" gutterBottom>
                    Book Cover
                  </Typography>
                  {formData.image ? (
                    <Card sx={{ maxWidth: 200, mx: "auto", mb: 2 }}>
                      <CardMedia
                        component="img"
                        height="280"
                        image={formData.image}
                        alt="Book cover preview"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/200x280?text=No+Image";
                        }}
                      />
                    </Card>
                  ) : (
                    <Box
                      sx={{
                        width: 200,
                        height: 280,
                        border: "2px dashed",
                        borderColor: "grey.300",
                        borderRadius: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2,
                        backgroundColor: "grey.50",
                      }}
                    >
                      <PhotoCamera sx={{ fontSize: 48, color: "grey.400" }} />
                    </Box>
                  )}
                  <TextField
                    fullWidth
                    label="Cover Image URL"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="Enter image URL"
                    size="small"
                    sx={{ mt: 1 }}
                  />
                </Box>
              </Grid>

              {/* Book Information */}
              <Grid item xs={12} md={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Book Title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      error={!!errors.title}
                      helperText={errors.title}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Book />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Author"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      error={!!errors.author}
                      helperText={errors.author}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Year"
                      name="year"
                      type="number"
                      value={formData.year}
                      onChange={handleInputChange}
                      error={!!errors.year}
                      helperText={errors.year}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <DateRange />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth error={!!errors.genre}>
                      <InputLabel>Genre</InputLabel>
                      <Select
                        name="genre"
                        value={formData.genre}
                        label="Genre"
                        onChange={handleInputChange}
                        startAdornment={
                          <Category sx={{ mr: 1, color: "action.active" }} />
                        }
                      >
                        {bookGenres.map((genre) => (
                          <MenuItem key={genre} value={genre}>
                            {genre}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.genre && (
                        <Typography
                          variant="caption"
                          color="error"
                          sx={{ ml: 2, mt: 0.5 }}
                        >
                          {errors.genre}
                        </Typography>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth error={!!errors.language}>
                      <InputLabel>Language</InputLabel>
                      <Select
                        name="language"
                        value={formData.language}
                        label="Language"
                        onChange={handleInputChange}
                      >
                        {bookLanguages.map((language) => (
                          <MenuItem key={language} value={language}>
                            {language}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.language && (
                        <Typography
                          variant="caption"
                          color="error"
                          sx={{ ml: 2, mt: 0.5 }}
                        >
                          {errors.language}
                        </Typography>
                      )}
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Description"
                      name="description"
                      multiline
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                      helperText="Brief description or summary of the book"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* Action Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                justifyContent: "flex-end",
                mt: 4,
                pt: 3,
                borderTop: 1,
                borderColor: "divider",
              }}
            >
              <Button
                variant="outlined"
                onClick={handleCancel}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                startIcon={<Save />}
                disabled={loading}
              >
                {loading ? "Adding Book..." : "Add Book"}
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default AddBook;
