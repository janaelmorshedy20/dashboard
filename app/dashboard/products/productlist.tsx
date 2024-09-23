// ProductList.tsx
import React from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

const ProductList: React.FC<{ product: Product[] }> = ({ product }) => {
    const handleProduct = (product: Product) => {
        console.log(product.name);
    };

    return (
        <div>
            {product.map(product => (
                <div key={product.id} onClick={() => handleProduct(product)}>
                    {product.name} - ${product.price}
                </div>
            ))}
        </div>
    );
};

export default ProductList;
