import React from "react";
import Product from "../Product/Product";
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home__cotainer">
                <img className="home__image"
                    src="https://m.media-amazon.com/images/I/81EquT5+A2L._SX3000_.jpg"
                    alt="" />

                <div className="home__row">
                    <Product
                        key='1dfgdfgdfgdf'
                        title='The lean start up'
                        price={29.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51aEhyjQGrL._SX316_BO1,204,203,200_.jpg'
                        rating={2}
                    />
                    <Product
                        key='2dfgdfgdfgd'
                        title='XGIMI Halo Portable Projector 4K Supported, Native 1080p 800 ANSI Lumen Projector with Android TV, Autofocus, Harman Kardon Speaker, Keystone Correction, for Home & Outdoor'
                        price={594}
                        image='https://m.media-amazon.com/images/I/718fRtCWsCL._AC_UY327_FMwebp_QL65_.jpg'
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        key='3dfgdfgdf'
                        title='Blackview Smart Watch for Men, Full Touch Screen Fitness Trackers with Heart Rate Sleep Monitor'
                        price={44.92}
                        image='https://m.media-amazon.com/images/I/71PJSeB0mLL._AC_UY327_FMwebp_QL65_.jpg'
                        rating={4}
                    />
                    <Product
                        key='4dfgdfgdfg'
                        title='Smartphone Unlocked, Ulefone Note 10 SIM-Free Unlocked Mobile Phones, 5500mAh Battery, 4G Dual SIM, Android 11'
                        price={98.99}
                        image='https://m.media-amazon.com/images/I/81rbhN090PL._AC_UY327_FMwebp_QL65_.jpg'
                        rating={3}
                    />
                    <Product
                        key='5sdfsdfs'
                        title='5.0 Inch Android SIM-Free & Unlocked Dual SIM Smart Phone'
                        price={53.69}
                        image='https://m.media-amazon.com/images/I/61OChnM52jL._AC_UY327_FMwebp_QL65_.jpg'
                        rating={1}
                    />
                </div>
                <div className="home__row">
                    <Product
                        key='6fsdfsdf'
                        title='Samsung TU7020 Crystal UHD 4K Ultra HD HDR 50" Smart TV (2020)'
                        price={388.89}
                        image='https://m.media-amazon.com/images/I/81pq+n-sl6S._AC_UY327_FMwebp_QL65_.jpg'
                        rating={6}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
