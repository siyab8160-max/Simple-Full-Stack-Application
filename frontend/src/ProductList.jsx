import React from "react";
import "./Productlist.css";

function Productlist({ products }) {
    return (
        <div className="product-list">
            {products.map((product) => {
                return (
                    <div className="product-card" key={product.id}>
                        <img
                            className="product-image"
                            src={product.images[0]}
                            alt={product.title}
                        />

                        <div className="product-info">
                            <h1 className="product-title">
                                {product.title}
                            </h1>

                            <p className="product-description">
                                {product.description}
                            </p>

                            <p className="product-category">
                                {product.category}
                            </p>

                            <p className="product-price">
                                ${product.price}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Productlist;