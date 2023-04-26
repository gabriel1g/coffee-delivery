import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '@assets/logo.png';
import { CartContext } from '@contexts/CartContext';
import { MapPin, ShoppingCart } from '@phosphor-icons/react';

import { HeaderContainer } from './styles';

export function Header() {
  const { cartProducts } = useContext(CartContext);

  return (
    <HeaderContainer>
      <img src={Logo} />
      <nav>
        <div className="location">
          <MapPin size={22} weight="fill" />
          <span>São Paulo, SP</span>
        </div>
        <div className="shopping_cart">
          <span>{cartProducts.length}</span>
          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  );
}
