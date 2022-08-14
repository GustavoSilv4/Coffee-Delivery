import styled from 'styled-components'

export const HomeContainer = styled.main``

export const HomeSectionTextContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 800px) {
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
  width: 100%;
  max-width: 1200px;
  margin: 7rem auto;
  padding: 0 1.5rem;

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
  display: grid;
  grid-template-columns: repeat(4, 0.5fr);
  column-gap: 2rem;

  @media (max-width: 1180px) {
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
  }
`
