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
      <form>
        <div className="row-1">
          <input placeholder="CEP" type="text" />
        </div>
        <div className="row-2">
          <input placeholder="Rua" type="text" />
        </div>
        <div className="row-3">
          <input placeholder="Número" type="number" />
          <input placeholder="Complemento" type="text" />
        </div>
        <div className="row-4">
          <input placeholder="Bairro" type="text" />
          <input placeholder="Cidade" type="text" />
          <input placeholder="UF" type="text" />
        </div>
      </form>
    </DeliveryAddressFormContainer>
  );
}
