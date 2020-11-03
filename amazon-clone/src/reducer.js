export const initialState = {
    basket: [],
};

function reducer(state, action){
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //add to basket
            return {state}
            break;

        case 'REMOVE_FROM_BASKET':
            //Remove from basket
            return {state}
            break;

        default:
            return state;
    }
};

export default reducer;