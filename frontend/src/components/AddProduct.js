import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [product, setProduct] = useState({
    nombre: '',
    descripcion: '',
    categoria: '',
    codigoDeBarras: '',
    precioDeCompra: '',
    precioDeVenta: '',
    cantidad: '',
    proveedor: '',
    fechaDeCaducidad: '',
    ubicacion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/products/add', product)
      .then(res => alert('¡Producto añadido exitosamente!'))
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} />
      <input type="text" name="descripcion" placeholder="Descripción" onChange={handleChange} />
      <input type="text" name="categoria" placeholder="Categoría" onChange={handleChange} />
      <input type="text" name="codigoDeBarras" placeholder="Código de Barras" onChange={handleChange} />
      <input type="number" name="precioDeCompra" placeholder="Precio de Compra" onChange={handleChange} />
      <input type="number" name="precioDeVenta" placeholder="Precio de Venta" onChange={handleChange} />
      <input type="number" name="cantidad" placeholder="Cantidad" onChange={handleChange} />
      <input type="text" name="proveedor" placeholder="Proveedor" onChange={handleChange} />
      <input type="date" name="fechaDeCaducidad" placeholder="Fecha de Caducidad" onChange={handleChange} />
      <input type="text" name="ubicacion" placeholder="Ubicación" onChange={handleChange} />
      <button type="submit">Añadir Producto</button>
    </form>
  );
};

export default AddProduct;
