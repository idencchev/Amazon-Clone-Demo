import React from "react";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../../StateProvider.js";
import { getBasketTotalPrice } from "../../utils/getBasketTotalPrice.js";
import './Subtotal.css';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    return (

        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => {
                    return (
                        <>
                            <p>
                                Subtotal (0 items): <strong>{value}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" />This offer contains a gift.
                            </small>
                        </>
                    )
                }}
                decimalScale={2}
                value={getBasketTotalPrice(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'£'}
            />

            <button>Prosses to Checkout</button>
        </div>

    );
}

export default Subtotal;
