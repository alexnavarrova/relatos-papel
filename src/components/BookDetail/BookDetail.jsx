import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../BookCard/BookCard';

const NavBar = ({book}) => {

  return (
    <BookCard book={book} showDetailsIcon={false}>
        <Link to="/home" className="btn btn-secondary mt-3">
            Volver a la página principal
        </Link>
    </BookCard>
  );
};

export default NavBar;