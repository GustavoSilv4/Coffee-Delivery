import { HeaderContainer, InfoContainer } from './styles'

import logoCoffee from '../../assets/logo-coffee.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

interface HeaderProps {
  location?: string
}

export function Header({ location = 'A definir' }: HeaderProps) {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      <InfoContainer>
        <span>
          <MapPin size={22} color="#8047F8" weight="fill" />
          {location}
        </span>
        <span>
          <ShoppingCart size={22} weight="fill" />
        </span>
      </InfoContainer>
    </HeaderContainer>
  )
}
