// Define action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS';

// Action creators
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const fetchCartItems = () => {
  return (dispatch, getState) => {
    const productosGuardadosEnElStore = getState().cart;
    dispatch({
      type: 'FETCH_CART_ITEMS',
      payload: [...productosGuardadosEnElStore.items]
    });
  };
};