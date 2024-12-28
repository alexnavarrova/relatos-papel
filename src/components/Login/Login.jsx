import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const dummyCredentials = {
    username: 'user123',
    password: 'password123',
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === dummyCredentials.username && password === dummyCredentials.password) {
      setSuccess(true);
      setError(null);
      setTimeout(() => {
        navigate('/home');
      }, 1000);
    } else {
      setError('Credenciales incorrectas. Intenta de nuevo.');
      setSuccess(false);
    }
  };

  return (
    <Container className="mx-auto mt-5" style={{ maxWidth: '400px' }}>
      <h2>Iniciar Sesión</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">¡Inicio de sesión exitoso!</Alert>}
      
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Usuario</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingresa tu usuario" 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Ingresa tu contraseña" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Iniciar Sesión
        </Button>
      </Form>
      <div className="mt-3">
        <small>Usuario: <strong>user123</strong>, Contraseña: <strong>password123</strong></small>
      </div>
    </Container>
  );
};

export default Login;
