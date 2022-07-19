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

  const baseDeliveryPrice = 3.5

  const totalPriceOrder = orders.reduce((acumulador, elemento) => {
    return (acumulador += elemento.price * elemento.quantity)
  }, 0)

  const totalPriceOrderWithDelivery = totalPriceOrder + baseDeliveryPrice

  const convertNumberToStringWithComma = (number: number) => {
    const numberToString = String(number.toFixed(2))
    return numberToString.replace('.', ',')
  }

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
              price={order.price}
              quantityProduct={order.quantity}
            />
          ))}
          <TotalOrders>
            <span>Total de itens</span>
            <span>R$ {convertNumberToStringWithComma(totalPriceOrder)}</span>
          </TotalOrders>
          <DeliveryPrice>
            <span>Entrega</span>
            <span>R$ {convertNumberToStringWithComma(baseDeliveryPrice)}</span>
          </DeliveryPrice>
          <TotalPrice>
            <h3>Total</h3>
            <h3>
              R${' '}
              {convertNumberToStringWithComma(totalPriceOrderWithDelivery) ===
              convertNumberToStringWithComma(baseDeliveryPrice)
                ? '0,00'
                : convertNumberToStringWithComma(totalPriceOrderWithDelivery)}
            </h3>
          </TotalPrice>
          <ConfirmButton type="submit" form="form-delivery">
            CONFIRMAR PEDIDO
          </ConfirmButton>
        </BoxCheckout>
      </BoxRight>
    </CheckoutContainer>
  )
}
