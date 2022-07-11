import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2rem 10rem;

  span:nth-child(1) {
    padding: 0.5rem;
    border-radius: 6px;

    font-size: 0.875;
    line-height: 1.3;

    background-color: ${(props) => props.theme['purple-100']};
    color: ${(props) => props.theme['purple-900']};

    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  span:nth-child(2) {
    padding: 0.5rem;
    border-radius: 6px;

    background-color: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-900']};

    display: flex;
    align-items: center;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
