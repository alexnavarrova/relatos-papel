import React, { useEffect } from 'react';
import Login from '../components/Login/Login';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  
  let inactivityTimeout;

  const handleUserActivity = () => {
    // Limpia el temporizador si el usuario interactúa
    clearTimeout(inactivityTimeout);

    // Reinicia el temporizador de inactividad
    inactivityTimeout = setTimeout(() => {
      navigate("/home"); // Redirige al login después de 5 segundos
    }, 5000);
  };

  useEffect(() => {
    // Agregar event listeners para detectar actividad del usuario
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keydown", handleUserActivity);
    window.addEventListener("click", handleUserActivity);

    // Configurar el temporizador inicial
    handleUserActivity();

    return () => {
      // Limpiar event listeners y temporizador al desmontar el componente
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keydown", handleUserActivity);
      window.removeEventListener("click", handleUserActivity);
      clearTimeout(inactivityTimeout);
    };
  }, []);

  return <Login />
};

export default LoginPage;
