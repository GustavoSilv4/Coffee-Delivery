import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  gap: 2rem;
  margin: 0rem 10rem;
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

const BaseBox = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
`

export const BoxForm = styled(BaseBox)`
  border-radius: 6px;
  margin-bottom: 0.75rem;
`

const BaseBoxSubtitle = styled.div`
  height: 2.75rem;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  div {
    h4 {
      font-size: 1rem;
      font-weight: normal;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      font-family: inherit;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const BoxFormSubtitle = styled(BaseBoxSubtitle)`
  color: ${(props) => props.theme['yellow-dark']};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const BaseInputForm = styled.input`
  padding: 0.76rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 0.875rem;

  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-input']};

  &:focus {
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`
export const InputCEP = styled(BaseInputForm)`
  width: 12.5rem;
`

export const InputRua = styled(BaseInputForm)``

export const InputNum = styled(BaseInputForm)`
  width: 12.5rem;
  margin-right: 0.75rem;
`

export const InputComplemento = styled(BaseInputForm)`
  width: 22rem;
`

export const InputBairro = styled(BaseInputForm)`
  width: 12.5rem;
  margin-right: 0.75rem;
`

export const InputCidade = styled(BaseInputForm)`
  width: 17.5rem;
  margin-right: 0.75rem;
`

export const InputUF = styled(BaseInputForm)`
  width: 3.75rem;
`
export const BoxPayment = styled(BaseBox)`
  border-radius: 6px;
`
export const BoxPaymentSubtitle = styled(BaseBoxSubtitle)`
  color: ${(props) => props.theme.purple};
`

export const ButtonsPaymentContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const ButtonPayment = styled.button`
  width: 11.125rem;
  font-size: 0.75rem;
  line-height: 1.6;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  padding: 1rem 0rem;
  padding-left: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;

  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  transition: background-color 0.1s;

  &:hover:not(:active) {
    background-color: ${(props) => props.theme['base-hover']};
  }

  &:active {
    outline: 1px solid ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme['purple-light']};
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
  max-width: 28rem;
  padding: 2.2rem;
  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px 44px 6px 44px;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 0.875rem;
      font-weight: normal;
      font-family: inherit;
      color: ${(props) => props.theme['base-text']};
      margin-bottom: 0.75rem;
    }
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
`
