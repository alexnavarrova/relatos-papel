import React from 'react';
import NavBar from '../NavBar/NavBar';
import BookCard from '../BookCard/BookCard';
import { useSearchStore } from '../../store/searchStore';
import { books } from '../../services/bookService';
import { Container } from 'react-bootstrap';

const BookList = () => {
  const { searchQuery } = useSearchStore();

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="mx-auto mt-5">
      <NavBar showSearchInput={true}  />
      <div className="d-flex flex-wrap mt-5">
        {filteredBooks.map((book) => (
          <BookCard key={book.id} book={book} showDetailsIcon={true} />
        ))}
      </div>      
    </Container>
  );
};

export default BookList;
