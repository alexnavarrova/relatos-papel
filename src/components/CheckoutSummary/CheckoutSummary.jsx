import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Alert, Table } from 'react-bootstrap'; 
import { useCartStore } from '../../store/cartStore'; 

const CheckoutSummary = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCartStore();
  const [total, setTotal] = useState(0);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalAmount);
  }, [cart]);

  const handlePayment = () => {
    try {
      setOrderSuccess(true);
      clearCart();  
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    } catch (error) {
      setError('Hubo un error al procesar el pago.');
    }
  };

  return (
    <div className="container w-100">
      {orderSuccess && (
        <Alert variant="success">
          ¡Pedido realizado con éxito! Redirigiendo a la página principal...
        </Alert>
      )}

      {error && (
        <Alert variant="danger">
          {error}
        </Alert>
      )}

      <Card>
        <Card.Body>
          <Card.Title>Resumen del pedido</Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Título</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.length === 0 ? (
                <tr>
                  <td colSpan="4">No hay libros en el carrito</td>
                </tr>
              ) : (
                cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price}</td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
          <div className="mt-3">
            <h5>Total: ${total.toFixed(2)}</h5>
          </div>
        </Card.Body>
      </Card>

      <div className="d-flex justify-content-center mt-3 gap-3">
        <Button 
            variant="info" 
            onClick={() => navigate('/home')}
          >
            Seguir comprando
          </Button>
        {cart.length > 0 && (
          <Button 
            variant="success" 
            onClick={handlePayment}
          >
            Confirmar pago
          </Button>
        )}
        
        </div>
    </div>
  );
};

export default CheckoutSummary;
