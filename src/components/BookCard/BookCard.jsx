import React, { useEffect, useState } from 'react';
import { Card, Spinner, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import { fetchBookImage } from '../../services/bookService';
import { FaShoppingCart, FaInfoCircle, FaHeart, FaRegHeart } from 'react-icons/fa';
import Alert from '../Alert/Alert';

const BookCard = ({ book, showDetailsIcon, children }) => {
  const { addToCart, cart } = useCartStore();
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState({ visible: false, message: '', variant: '' });
  const [showHeart, setShowHeart] = useState(false);
  const [liked, setLiked] = useState(false);

  const discountPercentage = 10;
  const discountedPrice = (book.price * (1 - discountPercentage / 100)).toFixed(2);

  const handleAddToCart = () => {
    try {
      addToCart(book);
      setAlert({ visible: true, message: 'Libro agregado al carrito con éxito.', variant: 'success' });
    } catch (error) {
      setAlert({ visible: true, message: 'Error al agregar el libro al carrito.', variant: 'danger' });
    }

    setTimeout(() => {
      setAlert({ visible: false, message: '', variant: '' });
    }, 3000);
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setLoading(true);
        const coverImage = await fetchBookImage(book.title);
        setImage(coverImage);
        setLoading(false);
      } catch (error) {
        setError('Error al cargar la imagen del libro ' + error.message);
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [book]);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  const quantityInCart = cart.find(item => item.id === book.id)?.quantity || 0;

  return (
    <Card 
      className="w-100 mt-3"
      onMouseEnter={() => setShowHeart(true)}
      onMouseLeave={() => {
        !liked && setShowHeart(false);
      }}
    >
      <Row noGutters>
        {loading ? (
          <Col md={4} className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" />
          </Col>
        ) : (
          <Col md={4}>
            <Card.Img src={image} alt={book.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          </Col>
        )}
        <Col md={8}>
          <Card.Body className="text-right">
            {showHeart && (
              <div
                className="Icon--like"
                onClick={toggleLike}
              >
                {liked ? <FaHeart size={24} color="red" /> : <FaRegHeart size={24} />}
              </div>
            )}
            <Card.Title className="Card__title">{book.title}</Card.Title>
            <p className='Card__text'>{book.description}</p>
            <p className='Card__text'><strong>Por el Autor Desconocido</strong></p>
            <p className='Card__text'>Precio original: <s>${book.price}</s></p>
            <p className='Card__text'>Precio con descuento: ${discountedPrice}</p>
            <p className='Card__text'>Descuento: {discountPercentage}%</p>
            <p className='Card__text'>Envío gratis</p>
            <div className='d-flex justify-content-end gap-3'>
              <div className="Icon--clickable" onClick={handleAddToCart}>
                Agregar <FaShoppingCart size={24} /> {quantityInCart > 0 && <span>({quantityInCart})</span>}
              </div>
              {showDetailsIcon ? <Link to={`/book/${book.id}`} className="ml-3 text-decoration-none">
                <div className="Icon--info">
                  Ver <FaInfoCircle size={24} />
                </div>
              </Link>: null}
            </div>
            {children}
            {alert.visible && (
              <Alert variant={alert.variant} message={alert.message} onClose={() => setAlert({ ...alert, visible: false })} />
            )}
           
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default BookCard;