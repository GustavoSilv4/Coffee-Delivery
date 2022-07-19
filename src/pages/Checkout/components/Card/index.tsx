import { Minus, Plus, Trash } from 'phosphor-react'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
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

interface CardProps {
  id: number
  name: string
  image: string
  price: number
  quantityProduct: number
}

export function Card({ name, quantityProduct, id, image, price }: CardProps) {
  const { changeQuantityProduct, removeOrder } = useContext(OrderContext)

  const initialQuantity = quantityProduct

  const [quantity, setQuantity] = useState(initialQuantity)

  useEffect(() => {
    if (quantityProduct !== quantity) {
      changeQuantityProduct({
        id,
        newQuantity: quantity,
      })
    }
  }, [quantity, id, quantityProduct, changeQuantityProduct])

  const handleDeleteOrder = () => {
    removeOrder(id)
  }

  const handleChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number(event.target.value)
    setQuantity((state) => (state = newQuantity))
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

  const convertNumberToStringWithComma = (number: number) => {
    const numberToString = String(number.toFixed(2))
    return numberToString.replace('.', ',')
  }

  return (
    <CardContainer>
      <img src={image} alt="" />
      <CardBox>
        <InfoBox>
          <h3>{name}</h3>
          <InputBox>
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
            <RemoverButton onClick={handleDeleteOrder}>
              <Trash size={16} color="#8047F8" />
              REMOVER
            </RemoverButton>
          </InputBox>
        </InfoBox>
        <Price>R$ {convertNumberToStringWithComma(price)}</Price>
      </CardBox>
    </CardContainer>
  )
}
