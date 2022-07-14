import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  ButtonCart,
  CardContainer,
  Description,
  InputCard,
  MinusButton,
  Name,
  PlusButton,
  Price,
  QuantityInput,
  SelectContainer,
  Type,
} from './styles'
import Americano from '../../../assets/Products/Americano.png'
import { useState } from 'react'

export function Card() {
  const [quantity, setQuantity] = useState(0)

  return (
    <CardContainer>
      <img src={Americano} alt="" />
      <Type>TRADICIONAL</Type>
      <Name>Expresso Tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <SelectContainer>
        <Price>
          <span>R$</span>9,90
        </Price>
        <MinusButton>
          <Minus size={14} weight="bold" />
        </MinusButton>
        <QuantityInput type="number" value={quantity} />
        <PlusButton>
          <Plus size={14} weight="bold" />
        </PlusButton>
        <ButtonCart>
          <ShoppingCart size={22} weight="fill" />
        </ButtonCart>
      </SelectContainer>
    </CardContainer>
  )
}
