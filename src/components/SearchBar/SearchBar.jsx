import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { useSearchStore } from '../../store/searchStore';
import { useCartStore } from '../../store/cartStore';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

import './SearchBar.css';

const SearchBar = ({ showSearchInput, setShowCart }) => {
  const { searchQuery, setSearchQuery } = useSearchStore();
  const { cart } = useCartStore();
  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Navbar bg="light" fixed="top" className="mb-3">
      <Container className="d-flex justify-content-between align-items-center gap-3">
        {showSearchInput && (
          <div className="SearchInput__wrapper">
            <input
              type="text"
              placeholder="Buscar por título..."
              className="form-control SearchInput__input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="SearchInput__icon" />
          </div>
        )}
        <div className="d-flex align-items-center position-relative ms-auto mt-2">
          <FaShoppingCart className="Icon--ShoppingCart" onClick={() => setShowCart(true)} />
          {totalItemsInCart > 0 && (
            <span className="Cart__badge">
              {totalItemsInCart}
            </span>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default SearchBar;
