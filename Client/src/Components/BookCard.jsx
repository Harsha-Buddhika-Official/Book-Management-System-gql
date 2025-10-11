import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Button,
  IconButton,
  CardActions,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const BookCard = ({
  title,
  author,
  year,
  genre,
  image,
  description,
  language,
  id,
  onEdit,
  onDelete,
}) => {
  const navigate = useNavigate();
  
  const handleEdit = (e) => {
    e.stopPropagation(); // Prevent card click event
    navigate(`/books/edit/${id}`);
  };
  return (
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
        image={image || "https://via.placeholder.com/300x240?text=No+Image"}
        alt={title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom noWrap>
          {title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          by {author}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, minHeight: "40px" }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Chip label={genre} size="small" variant="outlined" />
          <Typography variant="body2">{year}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Chip
            label={language}
            color="primary"
            size="small"
            variant="outlined"
          />
        </Box>
      </CardContent>

      {/* Action Buttons */}
      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <Button
          size="small"
          startIcon={<Edit />}
          onClick={handleEdit}
          variant="outlined"
          color="primary"
        >
          Edit
        </Button>
        <Button
          size="small"
          startIcon={<Delete />}
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click event
            onDelete && onDelete(id);
          }}
          variant="outlined"
          color="error"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
