import React from 'react';
import "./Home.css";
import "./Product.js";
import Product from './Product.js';

function Home() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWPhase1/6_DesktopHero_Unrec_3000x1200-._CB419216629_.jpg" className="home__image" alt ="Error"/>
            <div className="home__row">
                <Product 
                    id = "123460"
                    title = "MacBook Air"
                    price = {1500}
                    rating = {5}
                    image = "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=1078&hei=624&fmt=jpeg&qlt=80&.v=1541713859040"
                />                 
                <Product 
                    id = "123457"
                    title = "Fitbit Inspire Health and Fitness Tracker (Black)"
                    price = {125}
                    rating = {4.5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />  
            </div>
            <div className="home__row">
                <Product 
                    id = "123458"
                    title = "All-new Echo Dot (4th Gen) | Alexa (Black)"
                    price = {195}
                    rating = {4.5}
                    image = "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product 
                    id = "123459"
                    title = "Samsung Galaxy M31s (Mirage Blue)"
                    price = {450}
                    rating = {4}
                    image = "https://static.digit.in/default/418cc90461c44bb580374d58e82ea9d48b59b88d.jpeg?tr=1200"
                />  
                 <Product 
                    id = "123456"
                    title = "StBotanica Pro Keratin Therapy Shampoo"
                    price = {5}
                    rating = {4}
                    image = "https://miro.medium.com/max/346/0*Z6BEiJw_M1y2WpI0.jpg"
                />
            </div>

            <div className="home__row">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/jupiter/Phase3/hotdeals/xcm_banners_01_stripe_1500x80_in-en.jpg" alt="Hot Deals"></img>
            </div>

        </div>
    )
}

export default Home;