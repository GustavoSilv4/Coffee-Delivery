import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CardBox = styled.div`
  display: flex;
`

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 1rem;
    font-weight: normal;
    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 0.5rem;
    margin-left: 1.25rem;
  }
`

export const InputBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const QuantityInput = styled.input`
  font-size: 1rem;
  text-align: center;
  width: 2.1rem;
  padding: 0.36rem;
  outline: none;
  border: none;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  background: ${(props) => props.theme['base-button']};
`

const BaseButtonInput = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.5rem 0rem;

  display: flex;
  align-items: center;

  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme['base-button']};

  transition: background-color 0.2s;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const MinusButton = styled(BaseButtonInput)`
  margin-left: 1.25rem;
  padding-left: 0.5rem;
  border-radius: 6px 0px 0px 6px;
`

export const PlusButton = styled(BaseButtonInput)`
  margin-right: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0px 6px 6px 0px;
`

export const RemoverButton = styled.button`
  font-size: 0.75rem;
  font-weight: normal;
  border: none;
  border-radius: 6px;

  padding: 0.45rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
`
export const Price = styled.h5`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-text']};
`
