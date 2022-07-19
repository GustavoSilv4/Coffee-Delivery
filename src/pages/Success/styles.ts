import styled from 'styled-components'

export const SuccessContainer = styled.main`
  margin: 0rem 10rem;

  @media (min-width: 1400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const BoxTitleAndSubtitle = styled.div`
  margin-bottom: 2.5rem;

  @media (min-width: 1400px) {
    text-align: center;
  }

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme['yellow-dark']};
    line-height: 1.3;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: normal;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const BoxInfo = styled.div`
  display: flex;
  gap: 6.375rem;
`

export const Info = styled.div`
  background: linear-gradient(
        ${(props) => props.theme.background},
        ${(props) => props.theme.background}
      )
      padding-box,
    linear-gradient(to right, yellow, purple) border-box;
  border: 1px solid transparent;
  border-radius: 6px 36px 6px 36px;
  padding: 2.5rem;

  > div:nth-child(1) {
    padding-bottom: 2rem;
  }

  > div:nth-child(2) {
    padding-bottom: 2rem;
  }

  > div {
    display: flex;
    align-items: center;
    margin-right: 8.25rem;

    > div {
      h5 {
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.3;
        color: ${(props) => props.theme['base-text']};

        span {
          // Dentro do H5
          font-weight: bold;
        }
      }
      span {
        // Fora do H5
        color: ${(props) => props.theme['base-text']};
        font-weight: bold;
      }
    }
  }
`

const BaseIcons = styled.span`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 0.75rem;

  width: 2rem;
  height: 2rem;
`

export const MapIcon = styled(BaseIcons)`
  background-color: ${(props) => props.theme.purple};
`

export const TimerIcon = styled(BaseIcons)`
  background-color: ${(props) => props.theme.yellow};
`

export const DollarIcon = styled(BaseIcons)`
  background-color: ${(props) => props.theme['yellow-dark']};
`
