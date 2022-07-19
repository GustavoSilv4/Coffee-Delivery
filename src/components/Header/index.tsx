import { NavLink } from 'react-router-dom'
import { ButtonCart, HeaderContainer, InfoContainer, Location } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffee from '../../assets/logo-coffee.svg'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

interface HeaderProps {
  location?: string
}

export function Header({ location = 'A definir' }: HeaderProps) {
  const { orders, address } = useContext(OrderContext)

  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />
      <InfoContainer>
        <Location>
          <MapPin size={22} color="#8047F8" weight="fill" />
          {address.cidade === '' && address.UF === ''
            ? 'A definir'
            : `${address.cidade}, ${address.UF}`}
        </Location>

        <NavLink to="/checkout">
          <ButtonCart quantityProduct={orders.length}>
            <ShoppingCart size={22} weight="fill" />
          </ButtonCart>
        </NavLink>
      </InfoContainer>
    </HeaderContainer>
  )
}
