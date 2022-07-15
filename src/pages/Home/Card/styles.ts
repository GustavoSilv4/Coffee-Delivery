import styled from 'styled-components'

export const CardContainer = styled.div`
  max-width: 16rem;
  border-radius: 6px 36px 6px 36px;
  margin: 3.375rem 0rem 0rem;
  padding: 1.25rem 1.5rem;

  background-color: ${(props) => props.theme['base-hover']};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-top: -2.5rem;
  }
`

export const CoffeeTypes = styled.div`
  margin: 0.75rem 0;
  display: flex;
`

export const Type = styled.span`
  margin-right: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  font-size: 0.625rem;
  font-weight: bold;
  line-height: 1.3;

  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};
`

export const Name = styled.h3`
  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  line-height: 1.3;

  margin-bottom: 0.5rem;

  color: ${(props) => props.theme['base-subtitle']};
`

export const Description = styled.span`
  font-size: 0.875rem;
  line-height: 1.3;
  text-align: center;

  margin-bottom: 2.0625rem;

  color: ${(props) => props.theme['base-label']};
`
export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 0.5rem; */
`

export const Price = styled.h3`
  font-family: 'Baloo 2', cursive;
  font-size: 1.5rem;
  line-height: 1.3;

  color: ${(props) => props.theme['base-text']};

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: normal;
    line-height: 1.3;

    margin-right: 0.25rem;

    color: ${(props) => props.theme['base-text']};
  }
`

export const QuantityInput = styled.input`
  text-align: center;
  width: 2.1rem;
  padding: 0.5rem;
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
  padding: 0.65rem 0rem;

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
  margin-left: 1.4375rem;
  padding-left: 0.5rem;
  border-radius: 6px 0px 0px 6px;
`

export const PlusButton = styled(BaseButtonInput)`
  margin-right: 0.5rem;
  padding-right: 0.5rem;
  border-radius: 0px 6px 6px 0px;
`

export const ButtonCart = styled.button`
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;

  display: flex;
  align-items: center;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['purple-dark']};

  transition: background-color 0.2s;
  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
