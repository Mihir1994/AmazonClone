import React from 'react';
import Rating from '@material-ui/lab/Rating';
import "./checkoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    console.log(id, title, image, price, rating);
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="Error"></img>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    <Rating name="half-rating" defaultValue={rating} precision={0.5} />
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>

        </div>
    );
}

export default CheckoutProduct;