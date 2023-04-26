import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react';

import { PaymentContainer } from './styles';

export function Payment() {
  return (
    <PaymentContainer>
      <div className="top">
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </div>
      <div className="boxes">
        <div className="payment_method">
          <CreditCard />
          <span>Cartão de Crédito</span>
        </div>
        <div className="payment_method">
          <Bank />
          <span>Cartão de Débito</span>
        </div>
        <div className="payment_method">
          <Money />
          <span>Dinheiro</span>
        </div>
      </div>
    </PaymentContainer>
  );
}
