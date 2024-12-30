import React from 'react';
import { useCartStore } from '../../store/cartStore';
import CartItem from '../CartItem/CartItem';
import { Button, ListGroup, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cart = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const { cart, getTotal } = useCartStore(); 

  const handleCheckout = () => {
    handleClose();
    navigate('/checkout');
  };

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrito</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ListGroup>
          {cart.map((book) => (
            <CartItem key={book.id} book={book} />
          ))}
        </ListGroup>
        <div className="mt-3">
          <strong>Total: ${getTotal().toFixed(2)}</strong>
        </div>
        { getTotal() > 0 ? 
        <Button variant="primary" className="mt-2" onClick={handleCheckout}>
          Ir a pagar
        </Button> : <p>No hay libros en el carrito</p>}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;