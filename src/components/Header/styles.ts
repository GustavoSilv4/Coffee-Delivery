import styled from 'styled-components'

interface ButtonProps {
  quantityProduct: number
}

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Location = styled.span`
  padding: 0.5rem;
  border-radius: 6px;

  font-size: 0.875rem;
  line-height: 1.3;

  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const ButtonCart = styled.span<ButtonProps>`
  padding: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  display: flex;
  align-items: center;

  position: relative;

  &::after {
    position: absolute;
    border-radius: 100%;
    font-size: 0.75rem;
    font-weight: bold;
    text-align: center;

    left: 1.75rem;
    bottom: 1.6rem;

    width: 1rem;
    height: 1rem;

    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};

    content: '${(props) => String(props.quantityProduct)}';
    display: ${(props) => (props.quantityProduct > 0 ? 'inline' : 'none')};
  }

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.yellow};
  }
`
