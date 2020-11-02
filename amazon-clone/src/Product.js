import React from 'react';
import Rating from '@material-ui/lab/Rating';
import "./Product.css";

function Product({id, title, image, price, rating}) {
    return (
        <div class="product">
            <div class="product__info">
                <p class="product__about">{title}</p>
                <p class="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p class="product__rating">                
                    <Rating name="half-rating" defaultValue={rating} precision={0.5} readOnly="true"/>
                </p>          
            </div>
              
            <img src={image} alt="Error"/>
            <button>Add to basket</button>
        </div>
    )
}

export default Product
