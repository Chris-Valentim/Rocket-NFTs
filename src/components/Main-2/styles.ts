import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--body-background);
  display: flex;
  align-items: center;

  color: var(--text-color);

  border-bottom: 2px solid var(--card-color);
  height: 660px;
`

export const Info = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 30%;
  gap: 70px;
  height: 660px;
  
  border-right: 2px solid  var(--card-color);
`

export const Container = styled.div`
  margin-top: 81px;
  width: 100%;
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
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 350px;
  gap: 63px;
  margin-bottom: 70px;
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
`
