import CoffeeBanner from '@assets/coffee-banner.svg';
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';

import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <div className="top">
        <div className="col">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <div className="grid">
            <div className="grid-item">
              <div className="icon">
                <ShoppingCart weight="fill" />
              </div>
              <span>Compra simples e segura</span>
            </div>
            <div className="grid-item">
              <div className="icon">
                <Package weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div className="grid-item">
              <div className="icon">
                <Timer weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div className="grid-item">
              <div className="icon">
                <Coffee weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>
        <div>
          <img src={CoffeeBanner} />
        </div>
      </div>
    </HomeContainer>
  );
}
