import  { useState } from 'react';
import './cart.css'
import { useNavigate } from 'react-router-dom';
 
const initialCart = [
  {
    id: 1,
    name: 'Red n hot pizza',
    description: 'Spicy chicken, beef',
    price: 15.30,
    quantity: 2,
    image: '/asset/ball (1).png',  
  },
  {
    id: 2,
    name: 'Greek salad',
    description: 'with baked sesame',
    price: 12.00,
    quantity: 2,
    image: '/asset/ball (2).png',
  },
];
 
function Cart() {
  const [cart, setCart] = useState(initialCart);
 
  const incrementQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };
   const Navigate=useNavigate()
   const handlet=()=>{
    Navigate("/Orders")
   }

   const arrow=()=>{
    Navigate('/Category')
  }

  const decrementQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };
 
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };
 
  return (
    <div className="cart-container">
      <button className="rati" onClick={arrow}>&lt;</button>
      <h1 className="cart-title">Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="item-image" />
          <div className="item-details">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className="item-price">${item.price.toFixed(2)}</p>
            <div className="quantity-controls">
              <button onClick={() => decrementQuantity(item.id)}>-</button>
              <span>{item.quantity.toString().padStart(2, '0')}</span>
              <button onClick={() => incrementQuantity(item.id)}>+</button>
            </div>
          </div>
        </div>
      ))}
      <div className="summary">
        <p>Subtotal: ${calculateTotal()} USD</p>
        <p>Tax and Fees: $5.30 USD</p>
        <p>Delivery: $1.00 USD</p>
        <p className='ksd'>Total: ${(parseFloat(calculateTotal()) + 5.30 + 1.00).toFixed(2)} USD</p>
        <button className="checkout-button" onClick={handlet}>CHECKOUT</button>
      </div>
    </div>
  );
}
 
export default Cart;