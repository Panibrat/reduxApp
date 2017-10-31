"use strict"

//CART REDUCERS
export function cartReducers(state={cart:[]}, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return {cart:[...state.cart, ...action.payload]}
            break;
        case "DELETE_CART_ITEM":
            let cartToReturn = state.cart.filter((cart_item) => {
              return action.payload._id !== cart_item._id;
            });
            console.log("---action.payload--->",action.payload);
            console.log("---state.cart--->",state.cart);
            return {...state, cart:[...cartToReturn]};
            break;
    }
    return state
}
