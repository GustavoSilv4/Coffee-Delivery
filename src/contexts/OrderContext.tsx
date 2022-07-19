import { createContext, ReactNode, useState } from 'react'

export interface OrderProps {
  id: number
  name: string
  image: string
  price: number
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
  address: AddressFormProps
  paymentType: string
  createNewOrder: (data: OrderProps) => void
  changeQuantityProduct: (data: ChangeOrderQuantity) => void
  removeOrder: (id: number) => void
  registerAddress: (data: AddressFormProps) => void
  registerPaymentType: (type: string) => void
  resetOrderList: () => void
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
  const [paymentType, setPaymentType] = useState('')

  const createNewOrder = (data: OrderProps) => {
    const newOrder = {
      id: data.id,
      image: data.image,
      name: data.name,
      price: data.price,
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

  const registerPaymentType = (type: string) => {
    setPaymentType(type)
  }

  const resetOrderList = () => {
    setOrders((state) => (state = []))
  }

  console.log(paymentType)
  console.log(address)
  console.log(orders)

  return (
    <OrderContext.Provider
      value={{
        createNewOrder,
        changeQuantityProduct,
        removeOrder,
        registerAddress,
        registerPaymentType,
        resetOrderList,
        orders,
        address,
        paymentType,
      }}>
      {children}
    </OrderContext.Provider>
  )
}
