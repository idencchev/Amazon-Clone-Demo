import React from "react";

import '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Product.css';
import { useStateValue } from "../../StateProvider";


function Product({ title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong><small>£</small></strong>
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

            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    );
}

export default Product;
