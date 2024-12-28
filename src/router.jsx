import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import BookPage from './pages/BookPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage'; 
import NotFound from './pages/NotFound'; // Asegúrate que la ruta sea correcta

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} /> 
      <Route path="/home" element={<HomePage />} />
      <Route path="/book/:id" element={<BookPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default AppRouter;
