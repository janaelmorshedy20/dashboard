"use client"
import { useState } from "react";
import styles from "@/app/ui/dashboard/products/products.module.css";

type Product = {
  title: string;
  desc: string;
  price: number;
  stock: number;
};

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([
    { title: "Product 1", desc: "Description 1", price: 10, stock: 5 },
    { title: "Product 2", desc: "Description 2", price: 20, stock: 10 },
  ]);

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedProduct, setEditedProduct] = useState<Product>({
    title: "",
    desc: "",
    price: 0,
    stock: 0,
  });

  const [newProduct, setNewProduct] = useState<Product>({
    title: "",
    desc: "",
    price: 0,
    stock: 0,
  });

  // Delete a product
  const handleDelete = (index: number) => {
    const confirmed = confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      setProducts(products.filter((_, i) => i !== index));
    }
  };

  // Edit a product
  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditedProduct(products[index]);
  };

  // Save the edited product
  const handleSave = (index: number) => {
    const updatedProducts = products.map((product, i) =>
      i === index ? { ...product, ...editedProduct } : product
    );
    setProducts(updatedProducts);
    setEditingIndex(null);
  };

  // Handle input change for edited product
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Handle input change for new product
  const handleNewProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new product
  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({
      title: "",
      desc: "",
      price: 0,
      stock: 0,
    });
  };

  return (
    <div className={styles.container}>
      {/* Form for adding a new product */}
      <div className={styles.addProduct}>
        <h2>Add New Product</h2>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={newProduct.title}
          onChange={handleNewProductChange}
          required
        />
        <input
          type="text"
          placeholder="Description"
          name="desc"
          value={newProduct.desc}
          onChange={handleNewProductChange}
          required
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={newProduct.price}
          onChange={handleNewProductChange}
          required
        />
        <input
          type="number"
          placeholder="Stock"
          name="stock"
          value={newProduct.stock}
          onChange={handleNewProductChange}
          required
        />
        <button className={styles.addButton} onClick={handleAddProduct}>
          Add Product
        </button>
      </div>

      {/* Table for displaying products */}
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="title"
                    value={editedProduct.title}
                    onChange={handleInputChange}
                  />
                ) : (
                  <div className={styles.product}>{product.title}</div>
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="text"
                    name="desc"
                    value={editedProduct.desc}
                    onChange={handleInputChange}
                  />
                ) : (
                  product.desc
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="number"
                    name="price"
                    value={editedProduct.price}
                    onChange={handleInputChange}
                  />
                ) : (
                  `$${product.price}`
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <input
                    type="number"
                    name="stock"
                    value={editedProduct.stock}
                    onChange={handleInputChange}
                  />
                ) : (
                  product.stock
                )}
              </td>
              <td>
                {editingIndex === index ? (
                  <button
                    className={`${styles.button} ${styles.save}`}
                    onClick={() => handleSave(index)}
                  >
                    Save
                  </button>
                ) : (
                  <>
                    <button
                      className={`${styles.button} ${styles.edit}`}
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className={`${styles.button} ${styles.delete}`}
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
