import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'

import Ilustracao from '../../assets/Illustration.svg'
import { OrderContext } from '../../contexts/OrderContext'
import {
  BoxInfo,
  BoxTitleAndSubtitle,
  DollarIcon,
  Info,
  MapIcon,
  SuccessContainer,
  TimerIcon,
} from './styles'

export function Success() {
  const { address, paymentType } = useContext(OrderContext)

  return (
    <SuccessContainer>
      <BoxTitleAndSubtitle>
        <h1>Uhu! Pedido confirmado</h1>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
      </BoxTitleAndSubtitle>
      <BoxInfo>
        <Info>
          <div>
            <MapIcon>
              <MapPin size={16} weight="fill" color="white" />
            </MapIcon>
            <div>
              <h5>
                Entrega em{' '}
                <span>
                  {address.rua}, {address.numero}
                </span>
              </h5>
              <h5>
                {address.bairro} - {address.cidade}, {address.UF}
              </h5>
            </div>
          </div>
          <div>
            <TimerIcon>
              <Timer size={16} weight="fill" color="white" />
            </TimerIcon>
            <div>
              <h5>Previsão de entrega</h5>
              <span>20 min - 30 min</span>
            </div>
          </div>
          <div>
            <DollarIcon>
              <CurrencyDollar size={16} weight="fill" color="white" />
            </DollarIcon>
            <div>
              <h5>Pagamento na entrega</h5>
              <span>
                {paymentType === 'Credit' && 'Cartão de Credito'}
                {paymentType === 'Debit' && 'Cartão de Debito'}
                {paymentType === 'Money' && 'Dinheiro'}
              </span>
            </div>
          </div>
        </Info>
        <img src={Ilustracao} alt="" />
      </BoxInfo>
    </SuccessContainer>
  )
}
