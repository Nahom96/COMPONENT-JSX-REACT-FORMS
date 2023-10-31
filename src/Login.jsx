import React, { useState } from "react";
import "./style.css";

export const Login = () => {
  const [Text, setText] = useState('');
  const [Description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", Text);
    console.log("Description:", Description);

 
    if (selectedFile) {
      console.log("Selected File:", selectedFile.name);
    }

    setText('');
    setDescription('');
    setSelectedFile(null);  
  }

  const handleCancel = () => {
    setText('');
    setDescription('');
    setSelectedFile(null);  
  }

  const handleFileInputChange = (e) => {
     const file = e.target.files[0];
    setSelectedFile(file);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Shop</h1>
      <label htmlFor="fileInput" className="fileInputLabel">
        Insert File
        <input
          type="file"
          id="fileInput"
          className="fileInput"
          onChange={handleFileInputChange}
        />
      </label>
      <label htmlFor="Text">Name</label>
      <input
        value={Text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Enter Name Here"
        id="name"
        name="name"
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

      <button type="submit">Submit</button>

      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  )
}