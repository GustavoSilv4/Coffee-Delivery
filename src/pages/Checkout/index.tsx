// import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useContext, useState } from 'react'
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
  Credit,
  ButtonsPaymentContainer,
  CheckoutContainer,
  ConfirmButton,
  Debit,
  DeliveryPrice,
  Form,
  InputBairro,
  InputCEP,
  InputCidade,
  InputComplemento,
  InputNum,
  InputRua,
  InputUF,
  MoneyPay,
  TotalOrders,
  TotalPrice,
} from './styles'

const addressFormValidationSchema = zod.object({
  // Aqui crio o esquema de validacao do form
  cep: zod
    .string()
    .regex(/\d{2}.\d{3}-\d{3}/, 'Informe o CEP no formato correto!')
    .max(10)
    .min(10),
  rua: zod.string().max(50).min(1, 'Informe corretamento o nome da rua!'),
  numero: zod.string().min(1, 'Informe corretamento o numero da residência'),
  complemento: zod.string().max(50).optional(),
  bairro: zod.string().max(50).min(1, 'Informe corretamento o nome do bairro!'),
  cidade: zod.string().max(50).min(1, 'Informe corretamento o nome da cidade!'),
  UF: zod.string().max(2).min(2, 'Informe corretamento o UF!'),
})

type AddressFormData = zod.infer<typeof addressFormValidationSchema> // Aqui infiro(automatizo) a tipagem do formulario através do objeto de validacao

export function Checkout() {
  const { orders, registerAddress, registerPaymentType } =
    useContext(OrderContext)

  const { register, reset, handleSubmit } = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema), // Passo o esquema de validacao para o resolver -> resolver do zod
    defaultValues: {
      bairro: '',
      cep: '',
      cidade: '',
      complemento: '',
      numero: '',
      rua: '',
      UF: '',
    },
  })

  // console.log(formState.errors) // Validacao das mensagens erros
  // watch('cep') // Vigia se houve alteracao no input

  const [paymentType, setPaymentType] = useState('')

  const handleRegisterToDelivery = (data: AddressFormData) => {
    if (paymentType !== '') {
      registerAddress(data)
      registerPaymentType(paymentType)
      reset() // Reseta o formulario após ser submetido
    }
  }

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
          <Form
            onSubmit={handleSubmit(handleRegisterToDelivery)}
            id="form-delivery">
            <InputCEP
              type="text"
              maxLength={10}
              placeholder="CEP"
              {...register('cep')}
            />
            <InputRua type="text" placeholder="Rua" {...register('rua')} />
            <div>
              <InputNum
                type="number"
                placeholder="Número"
                {...register('numero')}
              />
              <InputComplemento
                type="text"
                placeholder="Complemento"
                {...register('complemento')}
              />
            </div>
            <div>
              <InputBairro
                type="text"
                placeholder="Bairro"
                {...register('bairro')}
              />
              <InputCidade
                type="text"
                placeholder="Cidade"
                {...register('cidade')}
              />
              <InputUF type="text" placeholder="UF" {...register('UF')} />
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
            <Credit
              onClick={(e) => setPaymentType('Credit')}
              paymentType={paymentType}>
              <CreditCard size={16} color="#8047F8" />
              CARTÃO DE CRÉDITO
            </Credit>
            <Debit
              onClick={(e) => setPaymentType('Debit')}
              paymentType={paymentType}>
              <Bank size={16} color="#8047F8" />
              CARTÃO DE DÉBITO
            </Debit>
            <MoneyPay
              onClick={(e) => setPaymentType('Money')}
              paymentType={paymentType}>
              <Money size={16} color="#8047F8" />
              DINHEIRO
            </MoneyPay>
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
