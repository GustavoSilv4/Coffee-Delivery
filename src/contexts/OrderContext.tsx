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
interface OrderContextType {
  createNewOrder: (data: OrderProps) => void
  orders: OrderProps[]
  changeQuantityProduct: (data: ChangeOrderQuantity) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orders, setOrders] = useState<OrderProps[]>([])

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

  console.log(orders)

  return (
    <OrderContext.Provider
      value={{ createNewOrder, changeQuantityProduct, orders }}>
      {children}
    </OrderContext.Provider>
  )
}
