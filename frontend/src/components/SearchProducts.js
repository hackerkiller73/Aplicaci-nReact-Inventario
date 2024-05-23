import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchProducts = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products/search')
      .then(res => setProductos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {productos.map(producto => (
        <div key={producto.id}>
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
          <p>Categoría: {producto.categoria}</p>
          <p>Código de Barras: {producto.codigoDeBarras}</p>
          <p>Precio de Compra: {producto.precioDeCompra}</p>
          <p>Precio de Venta: {producto.precioDeVenta}</p>
          <p>Cantidad: {producto.cantidad}</p>
          <p>Proveedor: {producto.proveedor}</p>
          <p>Fecha de Caducidad: {producto.fechaDeCaducidad}</p>
          <p>Ubicación: {producto.ubicacion}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchProducts;
