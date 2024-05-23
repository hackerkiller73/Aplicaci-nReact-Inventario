import React, { useState } from 'react';
import axios from 'axios';

const UpdateProduct = () => {
  const [id, setId] = useState('');
  const [cantidad, setCantidad] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/products/update/${id}`, { cantidad })
      .then(res => alert('¡Producto actualizado exitosamente!'))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="ID del Producto" value={id} onChange={(e) => setId(e.target.value)} />
      <input type="number" placeholder="Nueva Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
      <button type="submit">Actualizar Producto</button>
    </form>
  );
};

export default UpdateProduct;

