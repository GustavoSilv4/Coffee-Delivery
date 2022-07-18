import { BrowserRouter } from 'react-router-dom'
import { OrderContextProvider } from './contexts/OrderContext'
import { Router } from './Router'

function App() {
  return (
    <BrowserRouter>
      <OrderContextProvider>
        <Router />
      </OrderContextProvider>
    </BrowserRouter>
  )
}

export default App
