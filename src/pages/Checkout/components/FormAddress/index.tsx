import { useContext, useState } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
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
import {
  BoxForm,
  BoxFormSubtitle,
  BoxPayment,
  BoxPaymentSubtitle,
  ButtonsPaymentContainer,
  Credit,
  Debit,
  Form,
  InputBairro,
  InputCEP,
  InputCidade,
  InputComplemento,
  InputNum,
  InputRua,
  InputUF,
  MoneyPay,
} from './styles'
import { useNavigate } from 'react-router-dom'

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

export function FormAddress() {
  const { orders, registerAddress, registerPaymentType, resetOrderList } =
    useContext(OrderContext)

  const navigate = useNavigate()

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

  const handleRegisterAddressAndSuccess = (data: AddressFormData) => {
    if (paymentType !== '' && orders.length !== 0) {
      registerAddress(data)
      registerPaymentType(paymentType)
      reset() // Reseta o formulario após ser submetido
      setPaymentType('')
      navigate('/success', { replace: true })
      resetOrderList()
    }
  }

  return (
    <>
      <BoxForm>
        <BoxFormSubtitle>
          <MapPinLine size={22} />
          <div>
            <h4>Endereco de Entrega</h4>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </BoxFormSubtitle>
        <Form
          onSubmit={handleSubmit(handleRegisterAddressAndSuccess)}
          id="form-delivery">
          <InputCEP
            type="text"
            maxLength={10}
            placeholder="CEP (Ex: 12.345-678)"
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
    </>
  )
}
