import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LogoutIcon from "@mui/icons-material/Logout";
// import { useNavigate } from "react-router-dom";

const Navbar = () => {
  //   const navigate = useNavigate();

  //   const handleHomeClick = () => {
  //     navigate();
  //   };
  //   const handleListClick = () => {
  //     navigate();
  //   };
  //   const handleLogoutClick = () => {
  //     navigate();
  //   };
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
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Book Management
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <Button
              color="inherit"
              // onClick={handleHomeClick}
            >
              Home
            </Button>
          </Box>
          <Button
            color="inherit"
            //   onClick={handleListClick}
          >
            book list
          </Button>
          <Button
            color="inherit"
            startIcon={<LogoutIcon />}
            sx={{ ml: 1 }}
            // onClick={handleLogoutClick}
          >
            Logout
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
