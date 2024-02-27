// reducer.js

import { combineReducers } from 'redux';
import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_CART_ITEMS } from '../actions/actions';

const initialState = {
  cart: {
    items: []
  }
};

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case FETCH_CART_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer
});

export default rootReducer;
