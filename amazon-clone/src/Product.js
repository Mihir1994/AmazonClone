import React from 'react';
import Rating from '@material-ui/lab/Rating';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div class="product">
            <div class="product__info">
                <p class="product__about">{title}</p>
                <p class="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p class="product__rating">
                    <Rating name="half-rating" defaultValue={rating} precision={0.5} readOnly="true" />
                </p>
            </div>

            <img src={image} alt="Error" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
