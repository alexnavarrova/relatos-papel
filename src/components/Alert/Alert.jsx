import React from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alert = ({ variant = 'success', message, onClose }) => {
  return (
    <BootstrapAlert
      variant={variant}
      onClose={onClose}
      dismissible
      className="mt-3"
    >
      {message}
    </BootstrapAlert>
  );
};

export default Alert;
