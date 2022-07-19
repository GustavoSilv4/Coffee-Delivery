import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { Card } from './components/Card'
import { FormAddress } from './components/FormAddress'
import {
  BoxCheckout,
  BoxLeft,
  BoxRight,
  CheckoutContainer,
  ConfirmButton,
  DeliveryPrice,
  TotalOrders,
  TotalPrice,
} from './styles'

export function Checkout() {
  const { orders } = useContext(OrderContext)

  return (
    <CheckoutContainer>
      <BoxLeft>
        <h2>Complete seu pedido</h2>
        <FormAddress />
      </BoxLeft>

      <BoxRight>
        <h2>Cafés selecionados</h2>
        <BoxCheckout>
          {orders.map((order) => (
            <Card
              key={order.id}
              id={order.id}
              name={order.name}
              image={order.image}
              quantityProduct={order.quantity}
            />
          ))}
          <TotalOrders>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </TotalOrders>
          <DeliveryPrice>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </DeliveryPrice>
          <TotalPrice>
            <h3>Total</h3>
            <h3>R$ 33,20</h3>
          </TotalPrice>
          <ConfirmButton type="submit" form="form-delivery">
            CONFIRMAR PEDIDO
          </ConfirmButton>
        </BoxCheckout>
      </BoxRight>
    </CheckoutContainer>
  )
}
