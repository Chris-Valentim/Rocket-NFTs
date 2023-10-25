import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--body-background);
  display: flex;
  align-items: center;

  color: var(--text-color);

  border-bottom: 2px solid var(--card-color);
  height: 660px;

  @media (max-width: 425px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    border: none;
  }
`

export const Info = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 20%;
  gap: 70px;
  height: 100%;
  
  border-right: 2px solid  var(--card-color);

  @media (max-width: 425px) {
    flex-flow: row;
    justify-content: center;
    align-items: center;
    border: none;

    margin-top: 40px;
    width: 100%;
    gap: 20px;
  }  
`

export const Container = styled.div`
  margin-top: 81px;
  width: 100%;

  @media (max-width: 425px) {
    margin-top: 40px;
  }
`

export const Number = styled.h1`
  text-align: center;
  margin: 0;
  font-weight: 600;
  font-size: 50px;
`

export const SalesDescription = styled.p`
  text-align: center;
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  color: var(--subtitle-color);
`

export const Description = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid var(--subtitle-color);

  @media (max-width: 425px) {
    margin-bottom: 60px;
    border: none;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 350px;
  gap: 63px;
  margin-bottom: 70px;

  @media (max-width: 425px) {
    display: flex;
    text-align: center;

    gap: 30px;
    margin-bottom: 0;
  }
`

export const StyledText = styled.span`
  color: var(--color-logo);
`

export const TitleInfo = styled.p`
  text-decoration: underline;
`

export const Text = styled.p`
  margin: 0;
`

export const Banner = styled.img`
  width: 100%;
  height: 300px;

  background-size: cover;
  background-position: center;
  position: relative;
  background-repeat: no-repeat;

  @media (max-width: 425px) {
    height: 150px;
    width: 100%;
  }
`
