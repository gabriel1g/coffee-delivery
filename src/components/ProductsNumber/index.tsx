import { Minus, Plus } from '@phosphor-icons/react';

import { ProductsNumberContainer } from './styles';

interface ProductsNumberProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function ProductsNumber({ quantity, onIncrease, onDecrease }: ProductsNumberProps) {
  return (
    <ProductsNumberContainer>
      <button onClick={onDecrease}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>
        <Plus size={14} />
      </button>
    </ProductsNumberContainer>
  );
}
