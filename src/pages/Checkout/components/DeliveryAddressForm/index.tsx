import { MapPinLine } from '@phosphor-icons/react';

import { DeliveryAddressFormContainer } from './styles';

export function DeliveryAddressForm() {
  return (
    <DeliveryAddressFormContainer>
      <div>
        <MapPinLine />
        <div>
          <h4>Endereço de Entrega</h4>
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
