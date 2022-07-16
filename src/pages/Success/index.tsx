import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import Ilustracao from '../../assets/Illustration.svg'
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
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </h5>
              <h5>Farrapos - Porto Alegre, RS</h5>
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
              <h5>Previsão de entrega</h5>
              <span>20 min - 30 min </span>
            </div>
          </div>
        </Info>
        <img src={Ilustracao} alt="" />
      </BoxInfo>
    </SuccessContainer>
  )
}
