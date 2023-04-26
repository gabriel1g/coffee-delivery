import { DeliveryAddressForm } from './components/DeliveryAddressForm';
import { Payment } from './components/Payment';
import { SelectedCoffees } from './components/SelectedCoffees';
import { CheckoutContainer } from './styles';

export function Checkout() {
  return (
    <CheckoutContainer>
      <div className="col">
        <h2>Complete seu pedido</h2>
        <div className="boxes">
          <DeliveryAddressForm />
          <Payment />
        </div>
      </div>
      <div className="col">
        <h2>Cafés selecionados</h2>
        <SelectedCoffees />
      </div>
    </CheckoutContainer>
  );
}
