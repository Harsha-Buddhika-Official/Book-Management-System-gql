import { useState, useEffect } from "react";
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

  Skeleton,
} from "@mui/material";
import {
  ArrowBack,
  Save,
  Book,
  Person,
  Category,
  DateRange,
} from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { bookGenres, bookLanguages } from "../data/booksData";

const EditBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [bookLoading, setBookLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
    description: "",
    language: "English",
    image: "",
  });
  const [errors, setErrors] = useState({});

  // Mock book data for editing
  const mockBook = {
    _id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    year: "1925",
    description: "A classic American novel about the Jazz Age and the American Dream.",
    language: "English",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
  };

  useEffect(() => {
    // Simulate fetching book data
    const fetchBook = async () => {
      setBookLoading(true);
      try {
        // TODO: Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulate book data based on ID
        setFormData(mockBook);
      } catch (error) {
        setErrors({ fetch: "Failed to load book data." });
      } finally {
        setBookLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
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
      // TODO: Implement actual API call here
      console.log("Updated book data:", formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Navigate back to book list on success
      navigate("/books");
    } catch (error) {
      setErrors({ submit: "Failed to update book. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  if (bookLoading) {
    return (
      <Box sx={{ backgroundColor: "background.default", minHeight: "calc(100vh - 64px)", py: 4 }}>
        <Container maxWidth="md">
          <Box sx={{ mb: 4 }}>
            <Skeleton variant="rectangular" width={100} height={36} sx={{ mb: 2 }} />
            <Skeleton variant="text" width={200} height={40} />
            <Skeleton variant="text" width={300} height={24} />
          </Box>
          <Paper sx={{ p: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Skeleton variant="rectangular" width={200} height={280} sx={{ mx: "auto" }} />
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container spacing={3}>
                  {Array.from({ length: 8 }).map((_, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Skeleton variant="rectangular" height={56} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: "background.default", minHeight: "calc(100vh - 64px)", py: 4 }}>
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
            Edit Book
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Update the information for "{formData.title}".
          </Typography>
        </Box>

        {errors.fetch && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {errors.fetch}
          </Alert>
        )}

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
                          e.target.src = "https://via.placeholder.com/200x280?text=No+Image";
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
                    label="Image URL"
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
                        startAdornment={<Category sx={{ mr: 1, color: "action.active" }} />}
                      >
                        {bookGenres.map((genre) => (
                          <MenuItem key={genre} value={genre}>
                            {genre}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.genre && (
                        <Typography variant="caption" color="error" sx={{ ml: 2, mt: 0.5 }}>
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
                        <Typography variant="caption" color="error" sx={{ ml: 2, mt: 0.5 }}>
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
            <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 4, pt: 3, borderTop: 1, borderColor: "divider" }}>
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
                {loading ? "Updating Book..." : "Update Book"}
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default EditBook;