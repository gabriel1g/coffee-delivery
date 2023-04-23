import { ProductsNumber } from '@components/ProductsNumber';
import { ProductDTO } from '@dtos/ProductDTO';
import { ShoppingCart } from '@phosphor-icons/react';
import { formatMoney } from '@utils/formatMoney';

import { CoffeeCardContainer } from './styles';

interface CoffeeCardProps {
  coffee: ProductDTO;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const formattedPrice = formatMoney(coffee.price);

  return (
    <CoffeeCardContainer>
      {coffee && (
        <div className="product_card">
          <div className="thumb">
            <img src={`src/assets/products/${coffee.thumb}`} />
          </div>
          <ul className="tags">
            {coffee.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <h4>{coffee.name}</h4>
          <p>{coffee.description}</p>
          <div className="bottom">
            <div className="price">
              <span>R$</span>
              <span>{formattedPrice}</span>
            </div>
            <div className="shopping_cart">
              <ProductsNumber />
              <div className="shopping_cart_bottom">
                <ShoppingCart size={22} weight="fill" />
              </div>
            </div>
          </div>
        </div>
      )}
    </CoffeeCardContainer>
  );
}
