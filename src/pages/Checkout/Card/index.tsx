import { Minus, Plus, Trash } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import Americano from '../../../assets/Products/Americano.png'
import {
  CardBox,
  CardContainer,
  InfoBox,
  InputBox,
  MinusButton,
  PlusButton,
  Price,
  QuantityInput,
  RemoverButton,
} from './styles'

export function Card() {
  const [quantity, setQuantity] = useState(0)

  const handleChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value)
    setQuantity(newQuantity)
  }

  const handleMinusQuantity = () => {
    setQuantity((state) => state - 1)
  }

  const handlePlusQuantity = () => {
    setQuantity((state) => state + 1)
  }

  return (
    <CardContainer>
      <img src={Americano} alt="" />
      <CardBox>
        <InfoBox>
          <h3>Expresso Tradicional</h3>
          <InputBox>
            <MinusButton onClick={handleMinusQuantity}>
              <Minus size={14} weight="bold" />
            </MinusButton>
            <QuantityInput
              type="number"
              value={String(quantity)}
              max={10}
              onChange={handleChangeQuantity}
            />
            <PlusButton onClick={handlePlusQuantity}>
              <Plus size={14} weight="bold" />
            </PlusButton>
            <RemoverButton>
              <Trash size={16} color="#8047F8" />
              REMOVER
            </RemoverButton>
          </InputBox>
        </InfoBox>
        <Price>R$ 9,90</Price>
      </CardBox>
    </CardContainer>
  )
}
