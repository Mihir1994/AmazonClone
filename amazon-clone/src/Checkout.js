import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import "./Checkout.css";
import Subtotal from './Subtotal';


function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <div className="checkout__ad">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Jupiter2020_Sravanthi/Phase3_Coop/Stripe_2_1500x150_basket_offer.jpg" alt="Error" />
                </div>
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>You have no items in your basket. To buy one or more click
                        "Add to basket" next to the item.</p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your shopping basket</h2>
                            {basket?.map((item) => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>

            )}
        </div>
    );
}

export default Checkout;
