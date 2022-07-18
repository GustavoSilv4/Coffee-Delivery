import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { Card } from './Card'
import {
  BoxCheckout,
  BoxForm,
  BoxFormSubtitle,
  BoxLeft,
  BoxPayment,
  BoxPaymentSubtitle,
  BoxRight,
  ButtonPayment,
  ButtonsPaymentContainer,
  CheckoutContainer,
  ConfirmButton,
  Form,
  InputBairro,
  InputCEP,
  InputCidade,
  InputComplemento,
  InputNum,
  InputRua,
  InputUF,
} from './styles'

export function Checkout() {
  const { orders } = useContext(OrderContext)

  return (
    <CheckoutContainer>
      <BoxLeft>
        <h2>Complete seu pedido</h2>
        <BoxForm>
          <BoxFormSubtitle>
            <MapPinLine size={22} />
            <div>
              <h4>Endereco de Entrega</h4>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </BoxFormSubtitle>
          <Form action="">
            <InputCEP type="text" maxLength={10} placeholder="CEP" />
            <InputRua type="text" placeholder="Rua" />
            <div>
              <InputNum type="number" placeholder="Número" />
              <InputComplemento type="text" placeholder="Complemento" />
            </div>
            <div>
              <InputBairro type="text" placeholder="Bairro" />
              <InputCidade type="text" placeholder="Cidade" />
              <InputUF type="text" placeholder="UF" />
            </div>
          </Form>
        </BoxForm>
        <BoxPayment>
          <BoxPaymentSubtitle>
            <CurrencyDollar size={22} />
            <div>
              <h4>Pagamento</h4>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </BoxPaymentSubtitle>
          <ButtonsPaymentContainer>
            <ButtonPayment>
              <CreditCard size={16} color="#8047F8" />
              CARTÃO DE CRÉDITO
            </ButtonPayment>
            <ButtonPayment>
              <Bank size={16} color="#8047F8" />
              CARTÃO DE DÉBITO
            </ButtonPayment>
            <ButtonPayment>
              <Money size={16} color="#8047F8" />
              DINHEIRO
            </ButtonPayment>
          </ButtonsPaymentContainer>
        </BoxPayment>
      </BoxLeft>

      <BoxRight>
        <h2>Cafés selecionados</h2>
        <BoxCheckout>
          {orders.map((order) => (
            <Card
              key={order.id}
              id={order.id}
              name={order.name}
              quantityProduct={order.quantity}
            />
          ))}
          <div>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div>
            <h3>Total</h3>
            <h3>R$ 33,20</h3>
          </div>
          <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
        </BoxCheckout>
      </BoxRight>
    </CheckoutContainer>
  )
}
