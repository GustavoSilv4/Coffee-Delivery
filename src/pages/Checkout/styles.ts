import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 1140px) {
    flex-direction: column;
    align-items: center;
  }
`
export const BoxLeft = styled.div`
  max-width: 40.5rem;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 1.125rem;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const BoxRight = styled.div`
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
  h2 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }
`

export const BoxCheckout = styled.div`
  width: 28rem;
  padding: 2.2rem;

  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px 44px 6px 44px;

  @media (max-width: 640px) {
    width: 23.5rem;
    margin: 0rem 0.75rem;
  }
`

export const CardContainer = styled.div`
  overflow-y: scroll;
  max-height: 20rem;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const TotalOrders = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 0.875rem;
    font-weight: normal;
    font-family: inherit;
    color: ${(props) => props.theme['base-text']};
    margin-bottom: 0.75rem;
  }
`

export const DeliveryPrice = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 0.875rem;
    font-weight: normal;
    font-family: inherit;
    color: ${(props) => props.theme['base-text']};
    margin-bottom: 0.75rem;
  }
`

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 0.875rem;
    font-weight: normal;
    font-family: inherit;
    color: ${(props) => props.theme['base-text']};
    margin-bottom: 0.75rem;
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 0.8rem 0.75rem;
  margin-top: 1.5rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;

  font-size: 0.875rem;
  font-weight: bold;

  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
