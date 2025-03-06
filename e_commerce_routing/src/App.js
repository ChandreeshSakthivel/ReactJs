import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom';
import './Styles.css';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      onLogin(username);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-blue-500 p-6">
      <h1 className="text-4xl font-bold mb-6 text-white">E-commerce Login</h1>
      <div className="bg-white p-6 rounded-2xl shadow-2xl">
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="px-4 py-3 mb-4 w-72 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="px-4 py-3 mb-6 w-72 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button 
          onClick={handleLogin} 
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Login
        </button>
      </div>
    </div>
  );
}

function ProductCatalogue({ onLogout, cart, addToCart }) {
  const products = [
    { id: 1, name: 'Laptop', price: 50000, image: 'https://tse4.mm.bing.net/th?id=OIP.OU1CoSplSgGv9VpKxYneSAHaFc&pid=Api&P=0&h=180' },
    { id: 2, name: 'Phone', price: 20000, image: 'https://tse2.mm.bing.net/th?id=OIP.0H_GXDBmj8t95s1KzMU5GAHaL5&pid=Api&P=0&h=180' },
    { id: 3, name: 'Headphones', price: 4000, image: 'https://tse3.mm.bing.net/th?id=OIP.SGt8I-OB3VfC_iGeyIHPlQHaHa&pid=Api&P=0&h=180' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-green-500 p-6">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">Product Catalogue</h1>
      <Link to="/cart" className="text-yellow-300 hover:text-yellow-400 text-lg mb-4 block text-center">View Cart 🛒</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 bg-white shadow-2xl rounded-2xl transform hover:scale-105 transition-transform">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-lg text-gray-700">₹{product.price}</p>
            <button 
              onClick={() => addToCart(product)} 
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-transform transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <button 
        onClick={onLogout} 
        className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-transform transform hover:scale-105"
      >
        Logout
      </button>
    </div>
  );
}

function CartSummary({ cart }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 to-yellow-500 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">Cart Summary 🛍️</h1>
      <Link to="/catalogue" className="text-blue-500 hover:text-blue-600 text-lg mb-4 block text-center">Back to Catalogue</Link>
      <Link to="/payment" className="text-green-500 hover:text-green-600 text-lg mb-4 block text-center">Proceed to Payment 💳</Link>
      {cart.length > 0 ? (
        <ul className="bg-white p-6 rounded-2xl shadow-2xl">
          {cart.map((item, index) => (
            <li key={index} className="flex justify-between py-2">
              <span>{item.name}</span>
              <span>₹{item.price}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-center">Your cart is empty.</p>
      )}
    </div>
  );
}

function PaymentPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-purple-500 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Payment Page 💳</h1>
        <p className="text-lg mb-4">Enter your payment details to complete the purchase.</p>
        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-transform transform hover:scale-105">
          Pay Now
        </button>
      </div>
    </div>
  );
}

function ProtectedRoute({ user, children }) {
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleLogin = (username) => {
    setUser(username);
    navigate('/catalogue');
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/catalogue" element={<ProtectedRoute user={user}><ProductCatalogue cart={cart} addToCart={addToCart} onLogout={() => { setUser(null); navigate('/login'); }} /></ProtectedRoute>} />
      <Route path="/cart" element={<ProtectedRoute user={user}><CartSummary cart={cart} /></ProtectedRoute>} />
      <Route path="/payment" element={<ProtectedRoute user={user}><PaymentPage /></ProtectedRoute>} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}





