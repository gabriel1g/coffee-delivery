import { useContext } from 'react';

import { CartContext } from '@contexts/CartContext';
import { Trash } from '@phosphor-icons/react';

import { RemoveProductButtonContainer } from './styles';

interface RemoveProductButtonProps {
  productId: number;
}

export function RemoveProductButton({ productId }: RemoveProductButtonProps) {
  const { removeProductFromCart } = useContext(CartContext);

  function handleRemoveProduct() {
    removeProductFromCart(productId);
  }

  return (
    <RemoveProductButtonContainer onClick={handleRemoveProduct}>
      <Trash size={16} />
      Remover
    </RemoveProductButtonContainer>
  );
}
