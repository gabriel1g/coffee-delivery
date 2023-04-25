import { CartItem } from '@contexts/CartContext';

import { ActionTypes, CartAction } from './actions';

interface CartState {
  cartProducts: CartItem[];
}

export function cartProductsReducer(state: CartState, action: CartAction) {
  const selectedProduct = state.cartProducts.find((product) => product.id === action.payload.id);

  switch (action.type) {
    case ActionTypes.INCREASE:
      if (selectedProduct) {
        return {
          ...state,
          cartProducts: state.cartProducts.map((product) => {
            if (product.id === action.payload.id) {
              return { ...product, quantity: product.quantity + 1 };
            } else {
              return product;
            }
          }),
        };
      } else {
        return {
          ...state,
          cartProducts: [...state.cartProducts, { ...action.payload.product, quantity: 1 }],
        };
      }
    case ActionTypes.DECREASE:
      return {
        ...state,
        cartProducts: state.cartProducts.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        }),
      };
    case ActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        cartProducts: state.cartProducts.filter((product) => product.id !== action.payload.id),
      };
    default:
      return state;
  }
}
