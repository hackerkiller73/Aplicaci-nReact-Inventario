import React from 'react';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import SearchProducts from './components/SearchProducts';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Gestión de Inventario del Supermercado</h1>
      <AddProduct />
      <UpdateProduct />
      <SearchProducts />
    </div>
  );
};

export default App;

