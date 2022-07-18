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
  orders: OrderProps[]
  createNewOrder: (data: OrderProps) => void
  changeQuantityProduct: (data: ChangeOrderQuantity) => void
  removeOrder: (id: number) => void
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

  const removeOrder = (id: number) => {
    const filteredOrders = orders.filter((order) => order.id !== id)

    setOrders((state) => (state = filteredOrders))
  }

  console.log(orders)

  return (
    <OrderContext.Provider
      value={{ createNewOrder, changeQuantityProduct, removeOrder, orders }}>
      {children}
    </OrderContext.Provider>
  )
}
