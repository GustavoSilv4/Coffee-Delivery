import { ChangeEvent, useContext, useState } from 'react'

import { OrderContext } from '../../../contexts/OrderContext'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  ButtonCart,
  CardContainer,
  CoffeeTypes,
  Description,
  MinusButton,
  Name,
  PlusButton,
  Price,
  QuantityInput,
  SelectContainer,
  Type,
} from './styles'

interface TypesCoffee {
  traditional?: boolean
  iced?: boolean
  withMilk?: boolean
  alcoholic?: boolean
  special?: boolean
}
interface CardProps {
  image: string
  name: string
  price: string
  description: string
  types: TypesCoffee
}

export function Card({ name, description, image, types, price }: CardProps) {
  const { createNewOrder } = useContext(OrderContext)

  const [quantity, setQuantity] = useState(0)

  const handleChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value)
    setQuantity(newQuantity)
  }

  const handleMinusQuantity = () => {
    if (quantity > 0) {
      setQuantity((state) => state - 1)
    }
  }

  const handlePlusQuantity = () => {
    if (quantity < 10) {
      setQuantity((state) => state + 1)
    }
  }

  const formatPrice = price.replace(',', '.')

  const handleCreateNewOrder = () => {
    if (quantity !== 0) {
      createNewOrder({
        id: new Date().getTime(),
        image,
        name,
        price: Number(formatPrice),
        quantity,
      })
    }
  }

  return (
    <CardContainer>
      <img src={image} alt="" />
      <CoffeeTypes>
        {types.traditional && <Type>TRADICIONAL</Type>}
        {types.iced && <Type>GELADO</Type>}
        {types.withMilk && <Type>COM LEITE</Type>}
        {types.alcoholic && <Type>ALCOÓLICO</Type>}
        {types.special && <Type>ESPECIAL</Type>}
      </CoffeeTypes>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <SelectContainer>
        <Price>
          <span>R$</span>
          {price}
        </Price>
        <MinusButton onClick={handleMinusQuantity}>
          <Minus size={14} weight="bold" />
        </MinusButton>
        <QuantityInput
          type="number"
          value={String(quantity)}
          max={10}
          onChange={handleChangeQuantity}
          readOnly
        />
        <PlusButton onClick={handlePlusQuantity}>
          <Plus size={14} weight="bold" />
        </PlusButton>
        <ButtonCart onClick={handleCreateNewOrder}>
          <ShoppingCart size={22} weight="fill" />
        </ButtonCart>
      </SelectContainer>
    </CardContainer>
  )
}
