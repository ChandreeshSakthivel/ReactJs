import React, { useState } from 'react';
import AadhaarForm from './components/AadhaarForm';
import AadhaarList from './components/AadhaarList';
import './styles.css';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleAadhaarCreated = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Aadhaar Management System</h1>
      <AadhaarForm onAadhaarCreated={handleAadhaarCreated} />
      <AadhaarList />
    </div>
  );
};

export default App;
