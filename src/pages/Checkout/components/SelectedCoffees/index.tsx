import { useContext } from 'react';

import { ProductsNumber } from '@components/ProductsNumber';
import { RemoveProductButton } from '@components/RemoveProductButton';
import { CartContext } from '@contexts/CartContext';
import { formatMoney } from '@utils/formatMoney';

import { SelectedCoffeesContainer } from './styles';

export function SelectedCoffees() {
  const { cartProducts } = useContext(CartContext);

  const itemsTotalPrice = cartProducts.reduce((prev, curr) => {
    return prev + curr.price * curr.quantity;
  }, 0);
  const deliveryTotalPrice = 3.5;
  const cartTotalPrice = itemsTotalPrice + deliveryTotalPrice;

  return (
    <SelectedCoffeesContainer>
      <div className="cart_products">
        <ul>
          {cartProducts.map((product) => {
            const formattedPrice = formatMoney(product.price * product.quantity);

            return (
              <li key={product.id}>
                <div className="item_box">
                  <img src={`src/assets/products/${product.thumb}`} />
                  <div className="box">
                    <h4>{product.name}</h4>
                    <div className="buttons">
                      <ProductsNumber product={product} />
                      <RemoveProductButton productId={product.id} />
                    </div>
                  </div>
                </div>
                <span className="price">R$ {formattedPrice}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="total">
        <div className="values">
          <div className="expenseTotal">
            <span>Total de itens</span>
            <span className="price">R$ {formatMoney(itemsTotalPrice)}</span>
          </div>
          <div className="expenseTotal">
            <span>Entrega</span>
            <span className="price">R$ {formatMoney(deliveryTotalPrice)}</span>
          </div>
          <div className="cartTotal">
            <span>Total</span>
            <span className="price">R$ {formatMoney(cartTotalPrice)}</span>
          </div>
        </div>
        <button className="confirm_order">Confirmar Pedido</button>
      </div>
    </SelectedCoffeesContainer>
  );
}
