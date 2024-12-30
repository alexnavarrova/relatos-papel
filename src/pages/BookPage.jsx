import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import { books } from '../services/bookService';
import BookDetail from '../components/BookDetail/BookDetail';
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
      <NavBar showSearchInput={false} />
        {book && (
          <BookDetail book={book} />
        )}
    </Container>
  );
};

export default BookPage;