import React from 'react';
import { useCartStore } from '../../store/cartStore';
import { Button, ListGroup, Offcanvas } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Cart = ({ show, handleClose }) => {
  const navigate = useNavigate();
  const { cart, removeFromCart, getTotal } = useCartStore(); 

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
            <ListGroup.Item key={book.id} className="d-flex justify-content-between align-items-center">
              <span>{book.title} - ${book.price} x {book.quantity}</span>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(book.id)}
              >
                <FaTrash />
              </Button>
            </ListGroup.Item>
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