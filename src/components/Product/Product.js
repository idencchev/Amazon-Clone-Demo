import React from "react";

import '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Product.css';


function Product({ title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => {
                        return (<p>
                            <FontAwesomeIcon icon="fa-solid fa-star" />
                        </p>
                        )
                    })}
                </div>
            </div>
            <img src={image}
                alt="" />

            <button>Add to Basket</button>

        </div>
    );
}

export default Product;
