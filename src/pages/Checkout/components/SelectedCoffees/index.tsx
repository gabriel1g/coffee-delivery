import { useContext } from 'react';

import { ProductsNumber } from '@components/ProductsNumber';
import { CartContext } from '@contexts/CartContext';

import { SelectedCoffeesContainer } from './styles';

export function SelectedCoffees() {
  const { cartProducts } = useContext(CartContext);

  return (
    <SelectedCoffeesContainer>
      <div>
        <ul>
          {cartProducts.map((product) => (
            <li key={product.id}>
              <img src={`src/assets/products/${product.thumb}`} />
              <div>
                <h4>{product.name}</h4>
                <div>
                  <button>{product.quantity}</button>
                  <button>Remover</button>
                </div>
              </div>
              <span>R$ {product.price}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </div>
        <div>
          <span>Total</span>
          <span>R$ 33,20</span>
        </div>
      </div>
    </SelectedCoffeesContainer>
  );
}
