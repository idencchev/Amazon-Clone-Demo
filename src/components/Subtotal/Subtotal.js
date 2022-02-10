import React from "react";
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';

function Subtotal() {
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
                                <input type="checkbox" />This offer cantains a gift
                            </small>
                        </>
                    )
                }}
                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'£'}
            />

            <button>Prosses to Checkout</button>
        </div>

    );
}

export default Subtotal;
