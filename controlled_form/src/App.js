import { useState } from "react";
import './styles.css';

export default function ControlledForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [showText, setShowText] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="card">
        <h2 className="text-xl font-bold">Controlled Form</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="text-left">
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
        </div>
      </div>
      
      <div className="card">
        <button onClick={() => setShowText(!showText)}>
          {showText ? "Hide" : "Show"} Text
        </button>
        {showText && <p className="mt-4">Here’s the text you toggled!</p>}
      </div>
    </div>
  );
}
