import React from "react";
import Subtotal from '../Subtotal/Subtotal';
import 'react-currency-format';
import './Checkout.css'

function Checkout() {

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://i.ibb.co/kQFQc8x/Hnet-com-image-1.jpg"
                    alt="" />

                <div>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>
                </div>



            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>

        </div>
    );
}

export default Checkout;
