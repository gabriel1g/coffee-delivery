import Logo from '@assets/logo.png';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';

import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />
      <nav>
        <div className="location">
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </div>
        <div className="shopping_cart">
          <ShoppingCart size={22} weight="fill" />
        </div>
      </nav>
    </HeaderContainer>
  );
}
