import { useState } from 'react';
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
      <h1 className="text-3xl font-bold mb-4">Login</h1>
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

export default function App() {
  const [user, setUser] = useState(null);

  return user ? (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user}!</h1>
      <button 
        onClick={() => setUser(null)} 
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  ) : (
    <LoginPage onLogin={setUser} />
  );
}

