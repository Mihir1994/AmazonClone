import React from 'react';
import Rating from '@material-ui/lab/Rating';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
    const [{basket}, dispatch] = useStateValue();

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
        <div className="product">
            <div className="product__info">
                <p className="product__about">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <Rating name="half-rating" defaultValue={rating} precision={0.5} />
                </div>
            </div>

            <img src={image} alt="Error" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product
