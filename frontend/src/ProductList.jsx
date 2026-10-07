import React from "react";

function Productlist({ products }) {
    return (
        <div>
            {
                products.map((product) => {
                    return (
                        <>
                            <h1>
                                {product.title}</h1>
                                <p>{product.description}</p>
                                <p>{product.category}</p></>
                    )
                })
            }
        </div>
    )
}

export default Productlist;