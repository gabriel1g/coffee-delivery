import { MapPinLine } from '@phosphor-icons/react';

import { DeliveryAddressFormContainer } from './styles';

export function DeliveryAddressForm() {
  return (
    <DeliveryAddressFormContainer>
      <div className="top">
        <MapPinLine size={22} />
        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>
      <div>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <input type="number" />
          <input type="text" />
        </div>
        <div>
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>
      </div>
    </DeliveryAddressFormContainer>
  );
}
