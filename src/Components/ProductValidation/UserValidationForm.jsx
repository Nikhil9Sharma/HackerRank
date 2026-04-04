import React, { useState } from "react";
import "./ProductValidationFormCSS.css";

function ProductForm() {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product:", productName);
    console.log("Quantity:", quantity);

    // reset
    setProductName("");
    setQuantity("");
  };

  return (
    <div className="container">
      <form className="form-card" onSubmit={handleSubmit}>
        <h2>Add Product</h2>

        <label>Product Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter product name"
          required
        />

        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter quantity"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProductForm;