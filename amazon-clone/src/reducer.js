export const initialState = {
    basket: [
        {
            id: "12346001",
            title: "MacBook Air",
            price: 1500,
            rating: 5,
            image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=1078&hei=624&fmt=jpeg&qlt=80&.v=1541713859040"
        },
    ],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    // console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            //add to basket            
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":
            //Remove from basket
            //cloned the basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn('Cant remove product (id: ${action.id}');
            }
            return {
                ...state,
                basket: newBasket,
            };

        default:
            return state;
    }
};

export default reducer;