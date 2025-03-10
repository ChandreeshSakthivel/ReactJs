import React from 'react';

const ShopPage = () => {
  const dresses = [
    { id: 1, name: 'Casual Turdown Collar Dress', price: '4999', img: 'https://tse3.mm.bing.net/th?id=OIP.nHUkPGACFtk18lWY0jK68gHaJ4&pid=Api&P=0&h=180' },
    { id: 2, name: 'Satin Shiny Silk Dress', price: '1999', img: 'https://tse3.mm.bing.net/th?id=OIP.94xbmlF-6eaOnJ8CadNE3AHaJ4&pid=Api&P=0&h=180' },
    { id: 3, name: 'Cotton Dress', price: '1599', img: 'https://tse3.mm.bing.net/th?id=OIP.oIAard_-rbLVhqIv0ns6VAHaJq&pid=Api&P=0&h=180' },
    { id: 4, name: 'Bussines Mens Dress', price: '2999', img: 'https://tse2.mm.bing.net/th?id=OIP.-Bbh8U5PkbERfXyNrq-HaQHaJ0&pid=Api&P=0&h=180' },
  ];

  return (
    <div className="shop-container">
    <h1 style={{ textAlign: 'center' }}>Welcome to Dress Shopping!</h1>
    <div className="dress-list">
        {dresses.map((dress) => (
          <div key={dress.id} className="dress-card">
            <img src={dress.img} alt={dress.name} />
            <h3>{dress.name}</h3>
            <p>{dress.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
