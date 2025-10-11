import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  GitHub,
  LinkedIn,
  MenuBook,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 3,
          }}
        >
          {/* Logo and Description */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1, justifyContent: { xs: "center", md: "flex-start" } }}>
              <MenuBook sx={{ mr: 1 }} />
              <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
                Book Management System
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ maxWidth: 300, opacity: 0.9 }}>
              Your digital library companion. Organize, manage, and discover books with ease.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="/books" color="inherit" underline="hover">
                Book List
              </Link>
              <Link href="/books/grid" color="inherit" underline="hover">
                Book Grid
              </Link>
              <Link href="/books/add" color="inherit" underline="hover">
                Add Book
              </Link>
            </Box>
          </Box>

          {/* Contact Info */}
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
              Email: support@bookmanagement.com
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 2 }}>
              Phone: +1 (555) 123-4567
            </Typography>
            
            {/* Social Media Icons */}
            <Box>
              <IconButton color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" aria-label="GitHub">
                <GitHub />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ my: 2, borderColor: "rgba(255, 255, 255, 0.2)" }} />
        
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: { xs: "center", sm: "left" },
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            © 2024 Book Management System. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;