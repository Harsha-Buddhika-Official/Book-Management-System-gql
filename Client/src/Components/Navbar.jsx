import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleMenuClose();
  };
  return (
    <AppBar
      position="sticky"
      color="primary"
      elevation={3}
      sx={{ top: 0, zIndex: 1100 }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <MenuBookIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Book Management
          </Typography>
          
          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <Button
              color="inherit"
              onClick={() => navigate("/home")}
            >
              Home
            </Button>
            <Button
              color="inherit"
              startIcon={<GridViewIcon />}
              onClick={() => navigate("/books")}
            >
              Books
            </Button>
            <Button
              color="inherit"
              startIcon={<LogoutIcon />}
              sx={{ ml: 1 }}
              onClick={() => navigate("/login")}
            >
              Logout
            </Button>
          </Box>

          {/* Mobile Navigation */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={() => handleNavigate("/home")}>Home</MenuItem>
              <MenuItem onClick={() => handleNavigate("/books")}>Books</MenuItem>
              <MenuItem onClick={() => handleNavigate("/login")}>Logout</MenuItem>
              <MenuItem onClick={() => handleNavigate("/signup")}>Sign Up</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
