import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { useSearchStore } from '../../store/searchStore';
import { useCartStore } from '../../store/cartStore';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import Cart from '../Cart/Cart';

import './SearchBar.css';

const SearchBar = ({ showSearchInput = true }) => {
  const { searchQuery, setSearchQuery } = useSearchStore();
  const { cart } = useCartStore();
  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);
  const [showCart, setShowCart] = useState(false);

  return (
    <>
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
    <Cart show={showCart} handleClose={() => setShowCart(false)} />
    </>
  );
};

export default SearchBar;
