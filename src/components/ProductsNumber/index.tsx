import { useContext } from 'react';

import { CartContext } from '@contexts/CartContext';
import { ProductDTO } from '@dtos/ProductDTO';
import { Minus, Plus } from '@phosphor-icons/react';

import { ProductsNumberContainer } from './styles';

interface ProductsNumberProps {
  product: ProductDTO;
}

export function ProductsNumber({ product }: ProductsNumberProps) {
  const { cartProducts, cartIncrease, cartDecrease, removeProductFromCart } = useContext(CartContext);

  const currentProduct = cartProducts.find((cartProduct) => cartProduct.id === product.id);
  const currentQuantity = currentProduct ? currentProduct.quantity : 0;

  function handleIncrease() {
    cartIncrease(product);
  }

  function handleDecrease() {
    if (currentQuantity > 1) {
      cartDecrease(product.id);
    } else {
      removeProductFromCart(product.id);
    }
  }

  return (
    <ProductsNumberContainer>
      <button onClick={handleDecrease}>
        <Minus size={14} />
      </button>
      <span>{currentQuantity}</span>
      <button onClick={handleIncrease}>
        <Plus size={14} />
      </button>
    </ProductsNumberContainer>
  );
}
