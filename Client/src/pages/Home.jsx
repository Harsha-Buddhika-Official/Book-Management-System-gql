import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  Avatar,
  Stack,
  CircularProgress,
} from "@mui/material";
import {
  MenuBook,
  Add,
  List,
  TrendingUp,
  Person,
  LibraryBooks,
  GridView,
  AutoStories,
  Search,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_BOOKS, GET_USERS } from "../graphql/queries";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

const Home = () => {
  const navigate = useNavigate();
  
  // Fetch books and users data
  const { data: booksData, loading: booksLoading } = useQuery(GET_BOOKS);
  const { data: usersData, loading: usersLoading } = useQuery(GET_USERS);

  const features = [
    {
      icon: <GridView />,
      title: "Browse Books",
      description: "Browse your collection in a visual grid layout",
      path: "/books",
      color: "#1976d2",
    },
    {
      icon: <Add />,
      title: "Add New Book",
      description: "Add new books to your collection",
      path: "/books/add",
      color: "#388e3c",
    },
  ];

  // Calculate statistics from real data
  const calculateStats = () => {
    if (booksLoading || usersLoading || !booksData || !usersData) {
      return [
        { label: "Total Books", value: "...", icon: <LibraryBooks /> },
        { label: "Authors", value: "...", icon: <Person /> },
        { label: "Categories", value: "...", icon: <MenuBook /> },
        { label: "Recent Additions", value: "...", icon: <TrendingUp /> },
        { label: "Active Users", value: "...", icon: <PeopleOutlineIcon /> },
      ];
    }

    const books = booksData.getBooks || [];
    
    // Debug: Log books data to see what we're getting
    console.log("Books data for stats calculation:", books);
    if (books.length > 0) {
      console.log("Sample book enterTime:", books[0].enterTime);
    }
    const users = usersData.getUsers || [];
    
    // Get unique authors
    const uniqueAuthors = new Set(
      books.map(book => book.author).filter(author => author && author.trim())
    );
    
    // Get unique genres/categories
    const uniqueGenres = new Set(
      books.map(book => book.genre).filter(genre => genre && genre.trim())
    );
    
    // Calculate recent additions (books added in the last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const recentBooks = books.filter(book => {
      // If enterTime exists, use it for filtering
      if (book.enterTime) {
        try {
          const bookEnterDate = new Date(book.enterTime);
          const isRecent = bookEnterDate >= thirtyDaysAgo;
          console.log(`Book "${book.title}" enterTime: ${book.enterTime}, isRecent: ${isRecent}`);
          return isRecent;
        } catch (error) {
          console.warn('Invalid enterTime format for book:', book.id);
          return false;
        }
      }
      
      // Fallback: if no enterTime, consider books from current year as "recent"
      // This helps with existing books that don't have enterTime
      const currentYear = new Date().getFullYear();
      const isRecentYear = book.year === currentYear;
      console.log(`Book "${book.title}" has no enterTime, using year ${book.year}, isRecentYear: ${isRecentYear}`);
      return isRecentYear;
    });
    
    console.log(`Total books: ${books.length}, Recent books: ${recentBooks.length}`);

    return [
      { 
        label: "Total Books", 
        value: books.length.toString(), 
        icon: <LibraryBooks /> 
      },
      { 
        label: "Authors", 
        value: uniqueAuthors.size.toString(), 
        icon: <Person /> 
      },
      { 
        label: "Categories", 
        value: uniqueGenres.size.toString(), 
        icon: <MenuBook /> 
      },
      { 
        label: "Recent Additions", 
        value: recentBooks.length.toString(), 
        icon: <TrendingUp /> 
      },
      { 
        label: "Active Users", 
        value: users.length.toString(), 
        icon: <PeopleOutlineIcon /> 
      },
    ];
  };

  const stats = calculateStats();

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Avatar
            sx={{
              bgcolor: "rgba(255,255,255,0.2)",
              width: 80,
              height: 80,
              margin: "0 auto 24px",
            }}
          >
            <MenuBook sx={{ fontSize: 40 }} />
          </Avatar>
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
            Book Management System
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<GridView />}
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
              }}
              onClick={() => navigate("/books")}
            >
              Browse Books
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Add />}
              sx={{
                borderColor: "white",
                color: "white",
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
              onClick={() => navigate("/books/add")}
            >
              Add Book
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Stats Section */}
        <Grid container spacing={3} sx={{ mb: 6 }} alignItems="center">
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} width="200px">
              <Card sx={{ textAlign: "center", py: 2 }}>
                <CardContent>
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      width: 56,
                      height: 56,
                      margin: "0 auto 16px",
                    }}
                  >
                    {stat.icon}
                  </Avatar>
                  {booksLoading || usersLoading ? (
                    <CircularProgress size={24} sx={{ my: 2 }} />
                  ) : (
                    <Typography variant="h4" fontWeight="bold" color="primary">
                      {stat.value}
                    </Typography>
                  )}
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Features Section */}
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          textAlign="center"
          mb={4}
        >
          What You Can Do
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 3,
                  },
                }}
                onClick={() => navigate(feature.path)}
              >
                <CardContent sx={{ textAlign: "center", py: 3 }}>
                  <Avatar
                    sx={{
                      bgcolor: feature.color,
                      width: 64,
                      height: 64,
                      margin: "0 auto 16px",
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Paper
          sx={{
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            color: "white",
            p: 4,
            textAlign: "center",
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Ready to organize your library?
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9, mb: 3 }}>
            Start building your digital book collection today!
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<Add />}
            sx={{
              bgcolor: "rgba(255,255,255,0.2)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
            }}
            onClick={() => navigate("/books/add")}
          >
            Add Your First Book
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;
