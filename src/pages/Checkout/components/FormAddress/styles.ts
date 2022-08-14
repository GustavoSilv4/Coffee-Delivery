import styled from 'styled-components'

interface PaymentTypeProps {
  paymentType: string
}

export const BoxForm = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  margin-bottom: 0.75rem;

  @media (max-width: 640px) {
    margin: 0 0.5rem 0.75rem;
  }
`

export const BoxFormSubtitle = styled.div`
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

  color: ${(props) => props.theme['yellow-dark']};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (max-width: 640px) {
    /* flex-direction: row; */
  }
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
  @media (max-width: 640px) {
    width: 20rem;
  }
`

export const InputRua = styled(BaseInputForm)`
  @media (max-width: 640px) {
    width: 20rem;
  }
`

export const InputNum = styled(BaseInputForm)`
  width: 12.5rem;
  margin-right: 0.75rem;

  @media (max-width: 640px) {
    width: 10rem;
  }
`

export const InputComplemento = styled(BaseInputForm)`
  width: 22rem;

  @media (max-width: 640px) {
    width: 20rem;
  }
`

export const InputBairro = styled(BaseInputForm)`
  width: 12.5rem;
  margin-right: 0.75rem;

  @media (max-width: 640px) {
    width: 20rem;
  }
`

export const InputCidade = styled(BaseInputForm)`
  width: 17.5rem;
  margin-right: 0.75rem;

  @media (max-width: 640px) {
    width: 10rem;
  }
`

export const InputUF = styled(BaseInputForm)`
  width: 3.75rem;

  @media (max-width: 640px) {
    width: 4.06rem;
  }
`

export const BoxPayment = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  @media (max-width: 640px) {
    margin: 0 0.5rem;
  }
`
export const BoxPaymentSubtitle = styled.div`
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
  color: ${(props) => props.theme.purple};
`

export const ButtonsPaymentContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 640px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
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
`

export const Credit = styled(ButtonPayment)<PaymentTypeProps>`
  &:hover:not(:active) {
    background-color: ${(props) => props.theme['base-hover']};
  }

  ${(props) =>
    props.paymentType === 'Credit' ? 'outline: 1px solid #8047F8' : 'none'};
  ${(props) =>
    props.paymentType === 'Credit' ? 'background-color: #EBE5F9' : 'none'};
`

export const Debit = styled(ButtonPayment)<PaymentTypeProps>`
  &:hover:not(:active) {
    background-color: ${(props) => props.theme['base-hover']};
  }

  ${(props) =>
    props.paymentType === 'Debit' ? 'outline: 1px solid #8047F8' : 'none'};
  ${(props) =>
    props.paymentType === 'Debit' ? 'background-color: #EBE5F9' : 'none'};
`

export const MoneyPay = styled(ButtonPayment)<PaymentTypeProps>`
  &:hover:not(:active) {
    background-color: ${(props) => props.theme['base-hover']};
  }

  ${(props) =>
    props.paymentType === 'Money' ? 'outline: 1px solid #8047F8' : 'none'};
  ${(props) =>
    props.paymentType === 'Money' ? 'background-color: #EBE5F9' : 'none'};
`
