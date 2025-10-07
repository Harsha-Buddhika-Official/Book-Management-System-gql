// Book data structure matching MongoDB model

export const mockBooks = [
  {
    _id: "6507f1f1a2b1c3d4e5f6g7h1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Fiction",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
    description: "A classic American novel about the Jazz Age and the American Dream.",
    language: "English",
  },
  {
    _id: "6507f1f1a2b1c3d4e5f6g7h2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    description: "A story of racial injustice and the loss of innocence in the American South.",
    language: "English",
  },
  {
    _id: "6507f1f1a2b1c3d4e5f6g7h3",
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian",
    image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=400&fit=crop",
    description: "A dystopian social science fiction novel about totalitarian control.",
    language: "English",
  },
  {
    _id: "6507f1f1a2b1c3d4e5f6g7h4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    description: "A romantic novel about manners, upbringing, morality, and marriage.",
    language: "English",
  },
  {
    _id: "6507f1f1a2b1c3d4e5f6g7h5",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Fiction",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
    description: "A controversial novel about teenage rebellion and alienation.",
    language: "English",
  },
  {
    _id: "6507f1f1a2b1c3d4e5f6g7h6",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fantasy",
    image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=300&h=400&fit=crop",
    description: "The first book in the beloved Harry Potter series.",
    language: "English",
  },
  {
    _id: "6507f1f1a2b1c3d4e5f6g7h7",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    genre: "Fantasy",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
    description: "An epic high fantasy novel about the quest to destroy the One Ring.",
    language: "English",
  },
  {
    _id: "6507f1f1a2b1c3d4e5f6g7h8",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop",
    description: "A fantasy novel about Bilbo Baggins' unexpected journey.",
    language: "English",
  },
];

// Genre options matching MongoDB model
export const bookGenres = [
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
  "Dystopian"
];

// Language options matching MongoDB model
export const bookLanguages = [
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
  "Arabic"
];

// Book model structure matching MongoDB schema
export const bookFields = {
  _id: "string",
  title: "string",
  author: "string", 
  year: "number",
  genre: "string",
  image: "string",
  description: "string",
  language: "string"
};

// Utility functions for book data
export const filterBooks = (books, searchTerm) => {
  if (!searchTerm) return books;
  
  return books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const sortBooks = (books, sortBy) => {
  return [...books].sort((a, b) => {
    switch (sortBy) {
      case "title":
        return a.title.localeCompare(b.title);
      case "author":
        return a.author.localeCompare(b.author);
      case "year":
        return b.year - a.year;
      case "genre":
        return a.genre.localeCompare(b.genre);
      default:
        return 0;
    }
  });
};

export default mockBooks;