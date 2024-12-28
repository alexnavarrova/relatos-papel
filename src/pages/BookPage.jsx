import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar/SearchBar';
import { books } from '../services/bookService';
import BookCard from '../components/BookCard/BookCard';
import { Container } from 'react-bootstrap';
const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const data = books.find((b) => b.id === parseInt(id));
    setBook({
      ...data
    });
  }, [id])
  

  return (
    <Container className="mx-auto mt-5 w-100">
      <SearchBar showSearchInput={false} />
        {book && (
          <BookCard book={book} showDetailsIcon={false}>
            <Link to="/home" className="btn btn-secondary mt-3">
              Volver a la página principal
            </Link>
          </BookCard>
        )}
    </Container>
  );
};

export default BookPage;