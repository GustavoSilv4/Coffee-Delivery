import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin: 0 10rem;

  @media (max-width: 640px) {
    margin: 0rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const HomeSectionTextContainer = styled.section`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3.5rem;

  @media (max-width: 640px) {
    > div > img {
      display: none;
    }
    gap: 0;
  }
`

export const HomeSectionText = styled.div`
  flex: 1;
  max-width: 36.75rem;
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const HomeSectionTextTitle = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 1.3;

    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 1.25rem;
    line-height: 1.3;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const HomeSectionTextTSubTitle = styled.div`
  display: flex;
  gap: 2.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  div > h4 {
    font-size: 1rem;
    font-weight: normal;

    color: ${(props) => props.theme['base-text']};

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
  }

  div:nth-child(1) > h4:nth-child(1) > span {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 1000px;

    background-color: ${(props) => props.theme['yellow-dark']};
  }

  div:nth-child(1) > h4:nth-child(2) > span {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 1000px;

    background-color: ${(props) => props.theme.yellow};
  }

  div:nth-child(2) > h4:nth-child(1) > span {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 1000px;

    background-color: ${(props) => props.theme['base-text']};
  }

  div:nth-child(2) > h4:nth-child(2) > span {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 1000px;

    background-color: ${(props) => props.theme.purple};
  }
`

export const SectionProducts = styled.section`
  margin: 8.75rem 0;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    line-height: 1.3;

    color: ${(props) => props.theme[`base-subtitle`]};
  }

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  column-gap: 2rem;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
