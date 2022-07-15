import { NavLink } from 'react-router-dom'
import { ButtonCart, HeaderContainer, InfoContainer, Location } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffee from '../../assets/logo-coffee.svg'

interface HeaderProps {
  location?: string
  quantityProduct?: number
}

export function Header({
  location = 'A definir',
  quantityProduct = 1,
}: HeaderProps) {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      <InfoContainer>
        <Location>
          <MapPin size={22} color="#8047F8" weight="fill" />
          {location}
        </Location>

        <NavLink to="/checkout">
          <ButtonCart quantityProduct={quantityProduct}>
            <ShoppingCart size={22} weight="fill" />
          </ButtonCart>
        </NavLink>
      </InfoContainer>
    </HeaderContainer>
  )
}
