import { NavLink } from 'react-router-dom'
import { ButtonCart, HeaderContainer, InfoContainer, Location } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffee from '../../assets/logo-coffee.svg'

interface HeaderProps {
  location?: string
}

export function Header({ location = 'A definir' }: HeaderProps) {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      <InfoContainer>
        <Location>
          <MapPin size={22} color="#8047F8" weight="fill" />
          {location}
        </Location>

        <NavLink to="/checkout">
          <ButtonCart>
            <ShoppingCart size={22} weight="fill" />
          </ButtonCart>
        </NavLink>
      </InfoContainer>
    </HeaderContainer>
  )
}
