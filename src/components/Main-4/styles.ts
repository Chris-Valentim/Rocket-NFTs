import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--body-background);

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  padding-top: 100px;
  padding-bottom: 100px;
  height: 100%;

  @media (max-width: 425px) {
    padding-top: 0;
    padding-bottom: 50px;
    text-align: center;
  }
`

export const Title = styled.h1`
  color: var(--text-color);
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 120px;

  @media (max-width: 425px) {
    margin-bottom: 50px;
    font-size: 40px;
  }
`

export const StyledText = styled.span`
  color: var(--color-logo);
`

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  gap: 100px;

  @media (max-width: 425px) {
    gap: 50px;
  }
`

export const Card = styled.div`
  background-color: var(--card-color);

  display: flex;
  justify-content: center;

  height: 100px;
  width: 350px;

  padding-top: 25px;
  padding-bottom: 25px;
  gap: 38px;
`

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;
`

export const Featured = styled.div`
  background-color: var(--color-logo);

  display: flex;
  justify-content: center;

  width: 350px;
  height: 100px;

  padding-top: 25px;
  padding-bottom: 25px;
  gap: 38px;
`
export const FeaturedCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 10px;
`

export const FeaturedAvatarName = styled.p`
  color: var(--text-color);
  margin: 0;
  font-weight: 500;
  font-size: 20px;
`

export const AvatarName = styled.p`
  color: var(--text-color);
  margin: 0;
  font-weight: 500;
  font-size: 20px;
`

export const PhotosNumbers = styled.p`
  color: var(--color-logo);
  margin: 0;
  font-weight: 500;
  font-size: 20px;
`

export const StyledButton = styled.div`
  :hover{
    background-color: var(--card-color);
    border-radius: 15px;
  }
`

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 20px;
  margin-top: 54px;
  padding: 15px;
  
  color: var(--text-color);
  font-weight: 500;
  font-size: 20px;
  text-decoration: none;
`
