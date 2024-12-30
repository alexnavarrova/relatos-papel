import React from 'react';
import { useCartStore } from '../../store/cartStore';
import { Button, ListGroup } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';

const CartItem = ({ book }) => {
  const { removeFromCart } = useCartStore(); 
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <span>{book.title} - ${book.price} x {book.quantity}</span>
      <Button
        variant="danger"
        size="sm"
        onClick={() => removeFromCart(book.id)}
      >
        <FaTrash />
      </Button>
    </ListGroup.Item>
  );
};

export default CartItem;