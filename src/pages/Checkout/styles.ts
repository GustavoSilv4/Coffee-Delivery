import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;
  justify-content: center;

  @media (min-width: 1400px) {
    margin: 0rem 10rem;
  }
`
export const BoxLeft = styled.div`
  max-width: 40.5rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.125rem;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const BoxRight = styled.div`
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
