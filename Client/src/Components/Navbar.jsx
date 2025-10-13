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
import GridViewIcon from "@mui/icons-material/GridView";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../utils/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { isAuthenticated, user, logout } = useAuth();

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

  const handleLogout = () => {
    logout();
    navigate("/login");
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

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            {isAuthenticated ? (
              <>
                <Button color="inherit" onClick={() => navigate("/home")}>
                  Home
                </Button>
                <Button
                  color="inherit"
                  startIcon={<GridViewIcon />}
                  onClick={() => navigate("/books")}
                >
                  Books
                </Button>
                <Typography variant="body2" sx={{ mx: 2, opacity: 0.8 }}>
                  Welcome, {user?.name}
                </Typography>
                <Button
                  color="inherit"
                  startIcon={<LogoutIcon />}
                  sx={{ ml: 1 }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  color="inherit"
                  startIcon={<LoginIcon />}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
                <Button
                  color="inherit"
                  startIcon={<PersonAddIcon />}
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Box>

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
                "aria-labelledby": "basic-button",
              }}
            >
              {isAuthenticated ? (
                <>
                  <MenuItem onClick={() => handleNavigate("/home")}>
                    Home
                  </MenuItem>
                  <MenuItem onClick={() => handleNavigate("/books")}>
                    Books
                  </MenuItem>
                  <MenuItem onClick={() => handleNavigate("/add-book")}>
                    Add Book
                  </MenuItem>
                  <MenuItem disabled>
                    <Typography variant="caption">
                      Welcome, {user?.name}
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={() => handleNavigate("/login")}>
                    Login
                  </MenuItem>
                  <MenuItem onClick={() => handleNavigate("/signup")}>
                    Sign Up
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
