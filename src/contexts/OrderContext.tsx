import { createContext, ReactNode } from 'react'

export const OrderContext = createContext({})

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  return <OrderContext.Provider value={{}}>{children}</OrderContext.Provider>
}
