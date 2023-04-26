import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react';

import { PaymentContainer } from './styles';

export function Payment() {
  return (
    <PaymentContainer>
      <div>
        <CurrencyDollar />
        <div>
          <h4>Pagamento</h4>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
        <div>
          <div>
            <CreditCard />
            <span>Cartão de Crédito</span>
          </div>
          <div>
            <Bank />
            <span>Cartão de Débito</span>
          </div>
          <div>
            <Money />
            <span>Dinheiro</span>
          </div>
        </div>
      </div>
    </PaymentContainer>
  );
}
