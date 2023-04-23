import { useState } from 'react';

import { Minus, Plus } from '@phosphor-icons/react';

import { ProductsNumberContainer } from './styles';

export function ProductsNumber() {
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <ProductsNumberContainer>
      <button onClick={() => setQuantity((prevState) => prevState - 1)}>
        <Minus size={14} />
      </button>
      <input onChange={(e) => setQuantity(Number(e.target.value))} min={0} type="number" value={quantity} />
      <button onClick={() => setQuantity((prevState) => prevState + 1)}>
        <Plus size={14} />
      </button>
    </ProductsNumberContainer>
  );
}
