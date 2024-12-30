import React, { useState } from 'react';
import Cart from '../Cart/Cart';

import SearchBar from '../SearchBar/SearchBar';

const NavBar = ({ showSearchInput }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <SearchBar showSearchInput={showSearchInput} setShowCart={setShowCart}  />
      <Cart show={showCart} handleClose={() => setShowCart(false)} />
    </>
  );
};

export default NavBar;
