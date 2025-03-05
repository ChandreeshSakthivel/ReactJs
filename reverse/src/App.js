import { useState } from 'react';
import './Styles.css';


export default function App() {
  const [text, setText] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100">
      <h1 className="text-3xl font-bold mb-4">Simple Text Reverser</h1>
      <input 
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg mb-4"
      />
      <p className="text-lg mb-4">Reversed: {text.split('').reverse().join('')}</p>
    </div>
  );
}

