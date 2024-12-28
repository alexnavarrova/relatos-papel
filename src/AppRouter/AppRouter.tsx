import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// @ts-ignore
import HomePage from '../pages/HomePage'; 
// @ts-ignore
import BookPage from '../pages/BookPage';
// @ts-ignore
import CheckoutPage from '../pages/CheckoutPage';
// @ts-ignore
import LoginPage from '../pages/LoginPage'; 
// @ts-ignore
import NotFound from '../pages/NotFound'; // Asegúrate que la ruta sea correcta

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
