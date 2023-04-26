import { DeliveryAddressForm } from './components/DeliveryAddressForm';
import { Payment } from './components/Payment';
import { SelectedCoffees } from './components/SelectedCoffees';
import { CheckoutContainer } from './styles';

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h3>Complete seu pedido</h3>
        <div>
          <DeliveryAddressForm />
          <Payment />
        </div>
      </div>
      <div>
        <h3>Cafés selecionados</h3>
        <SelectedCoffees />
      </div>
    </CheckoutContainer>
  );
}
