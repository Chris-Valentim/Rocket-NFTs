import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--body-background);
  display: flex;
  align-items: center;

  color: var(--text-color);

  border-bottom: 2px solid var(--card-color);
  height: 610px;
`

export const Info = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 281px;
  gap: 70px;
  height: 610px;
  border-right: 2px solid  var(--card-color);
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
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 350px;
  margin: 0 auto;
  gap: 63px;
  margin-bottom: 71px;
`

export const StyledText = styled.span`
  color: var(--color-logo);
`

export const TitleInfo = styled.p`
  text-decoration: underline;
`