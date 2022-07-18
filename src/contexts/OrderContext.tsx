import { createContext, ReactNode, useState } from 'react'

export interface OrderProps {
  id: number
  name: string
  quantity: number
}

interface ChangeOrderQuantity {
  id: number
  newQuantity: number
}

interface AddressFormProps {
  bairro: string
  cep: string
  cidade: string
  complemento?: string
  numero: string
  rua: string
  UF: string
}

interface OrderContextType {
  orders: OrderProps[]
  createNewOrder: (data: OrderProps) => void
  changeQuantityProduct: (data: ChangeOrderQuantity) => void
  removeOrder: (id: number) => void
  registerAddress: (data: AddressFormProps) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orders, setOrders] = useState<OrderProps[]>([])
  const [address, setAddress] = useState<AddressFormProps>({
    bairro: '',
    cep: '',
    cidade: '',
    numero: '',
    rua: '',
    UF: '',
  })
  // const [paymentType, setPaymentType] = useState('')

  const createNewOrder = (data: OrderProps) => {
    const newOrder = {
      id: data.id,
      name: data.name,
      quantity: data.quantity,
    }

    setOrders((state) => [...state, newOrder])
  }

  const changeQuantityProduct = ({ newQuantity, id }: ChangeOrderQuantity) => {
    setOrders((prevOrder) =>
      prevOrder.map((order) =>
        order.id === id ? { ...order, quantity: newQuantity } : order
      )
    )
  }

  const removeOrder = (id: number) => {
    const filteredOrders = orders.filter((order) => order.id !== id)

    setOrders((state) => (state = filteredOrders))
  }

  const registerAddress = (data: AddressFormProps) => {
    setAddress({
      bairro: data.bairro,
      cep: data.cep,
      cidade: data.cidade,
      numero: data.numero,
      rua: data.rua,
      UF: data.UF,
    })
  }

  console.log(address)
  console.log(orders)

  return (
    <OrderContext.Provider
      value={{
        createNewOrder,
        changeQuantityProduct,
        removeOrder,
        registerAddress,
        orders,
      }}>
      {children}
    </OrderContext.Provider>
  )
}
