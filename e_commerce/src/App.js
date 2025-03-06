import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">E-commerce Login</h1>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        className="px-4 py-2 mb-4 border border-gray-300 rounded-lg"
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="px-4 py-2 mb-4 border border-gray-300 rounded-lg"
      />
      <button 
        onClick={handleLogin} 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Login
      </button>
    </div>
  );
}

function ProductCatalogue({ onLogout }) {
  const products = [
    { id: 1, name: 'Laptop', price: '50000', image: 'https://tse4.mm.bing.net/th?id=OIP.OU1CoSplSgGv9VpKxYneSAHaFc&pid=Api&P=0&h=180' },
    { id: 2, name: 'Phone', price: '20000', image: 'https://tse2.mm.bing.net/th?id=OIP.0H_GXDBmj8t95s1KzMU5GAHaL5&pid=Api&P=0&h=180' },
    { id: 3, name: 'Headphones', price: '4000', image: 'https://tse3.mm.bing.net/th?id=OIP.SGt8I-OB3VfC_iGeyIHPlQHaHa&pid=Api&P=0&h=180' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Product Catalogue</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 bg-white shadow-lg rounded-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-lg">{product.price}</p>
          </div>
        ))}
      </div>
      <button 
        onClick={onLogout} 
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  return user ? (
    <ProductCatalogue onLogout={() => setUser(null)} />
  ) : (
    <LoginPage onLogin={setUser} />
  );
}

