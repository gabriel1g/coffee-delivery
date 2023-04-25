import { ReactNode, useReducer } from 'react';
import { createContext } from 'react';

import { ProductDTO } from '@dtos/ProductDTO';
import { ActionTypes } from '@reducers/cartProducts/actions';
import { cartProductsReducer } from '@reducers/cartProducts/reducer';

export interface CartItem extends ProductDTO {
  quantity: number;
}

interface CartContextProps {
  cartProducts: CartItem[];
  cartIncrease: (product: ProductDTO) => void;
  cartDecrease: (id: number) => void;
  removeProductFromCart: (id: number) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartProductsReducer, { cartProducts: [] });

  const { cartProducts } = cartState;

  function cartIncrease(product: ProductDTO) {
    dispatch({
      type: ActionTypes.INCREASE,
      payload: {
        id: product.id,
        product,
      },
    });
  }

  function cartDecrease(id: number) {
    dispatch({
      type: ActionTypes.DECREASE,
      payload: {
        id,
      },
    });
  }

  function removeProductFromCart(id: number) {
    dispatch({
      type: ActionTypes.REMOVE_PRODUCT,
      payload: {
        id,
      },
    });
  }

  return (
    <CartContext.Provider value={{ cartProducts, cartIncrease, cartDecrease, removeProductFromCart }}>{children}</CartContext.Provider>
  );
}
