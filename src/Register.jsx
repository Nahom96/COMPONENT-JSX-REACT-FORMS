import React, { useState } from "react";
import "./stylee.css";

export const Register = () => {
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [Category, setCategory] = useState('');
  const [Quantity, setQuantity] = useState('');
  const [Price, setPrice] = useState('');
  const [selectedFile, setSelectedFile] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", Name);
    console.log("Description:", Description);
    console.log("Category:", Category);
    console.log("Quantity:", Quantity);
    console.log("Price:", Price);

     if (selectedFile) {
      console.log("Selected File:", selectedFile.name);
    }

    setName('');
    setDescription('');
    setCategory('');
    setQuantity('');
    setPrice('');
    setSelectedFile(null);  
  }

  const handleCancel = () => {
     setName('');
    setDescription('');
    setCategory('');
    setQuantity('');
    setPrice('');
    setSelectedFile(null);  
  }

  const handleFileInputChange = (e) => {
     const file = e.target.files[0];
    setSelectedFile(file);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Product</h1>
      <label htmlFor="fileInput" className="fileInputLabel">
        Insert File
        <input
          type="file"
          id="fileInput"
          className="fileInput"
          onChange={handleFileInputChange}
        />
      </label>
      <label htmlFor="Name">Name</label>
      <input
        value={Name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Name Here"
        id="Name"
        name="Name"
      />

      <label htmlFor="Description">Description</label>
      <input
        value={Description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Enter Description Here"
        id="Description"
        name="Description"
      />

      <label htmlFor="Category">Category</label>
      <input
        value={Category}
        onChange={(e) => setCategory(e.target.value)}
        type="text"
        placeholder="Enter Category Here"
        id="Category"
        name="Category"
      />

      <label htmlFor="Quantity">Quantity</label>
      <input
        value={Quantity}
        onChange={(e) => setQuantity(e.target.value)}
        type="text"
        placeholder="Enter Quantity Here"
        id="Quantity"
        name="Quantity"
      />

      <label htmlFor="Price">Price</label>
      <input
        value={Price}
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        placeholder="Enter Price Here"
        id="Price"
        name="Price"
      />

      <button type="submit">Submit</button>

      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  )
}