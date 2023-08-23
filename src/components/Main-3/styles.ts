import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--body-background);

  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Title = styled.h1`
  color: var(--text-color);
  text-align: center;

  font-weight: bold;
  font-size: 50px;

  margin: 0;
  margin-top: 138px;
  margin-bottom: 158px;
`

export const StyledText = styled.span`
  color: var(--color-logo);
  `
 
export const Content = styled.div`
  display: flex;
  justify-content: space-around;
`

export const SubTitle = styled.h2`
  color: var(--text-color);

  font-weight: 500;
  font-size: 30px;

  display: flex;
  justify-content: space-between;
`

export const AvatarName = styled.p`
  color: var(--text-color);

  display: flex;
  justify-content: space-between;
`

export const DividingLine = styled.div`
  border-right: 1px solid var(--subtitle-color);
  display: flex;
  justify-content: center;
  align-items: center;
`
