import styled from 'styled-components'

import arrowWhite from '../../assets/arrow-white.svg'
import astronautaOne from '../../assets/astronauta-1.png'
import astronautaTwo from '../../assets/astronauta-2.png'
import astronautaThree from '../../assets/astronauta-3.png'
import astronautaFour from '../../assets/astronauta-4.png'

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

  margin-top: 138px;
  margin-bottom: 158px;

  @media (max-width: 425px) {
    margin-top: 30px;
    margin-bottom: 30px;

    font-size: 30px;
  }
`

export const StyledText = styled.span`
  color: var(--color-logo);
  `
 
export const Content = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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

  @media (max-width: 425px) {
    border: none;
  }
`

export const ImageArrow = styled.span`
  background-image: url(${arrowWhite});
  background-repeat: no-repeat;

  height: 25px;
  width: 25px;
`

export const ImageAstronautaOne = styled.div`
  background-image: url(${astronautaOne});
  background-repeat: no-repeat;

  height: 200px;
  width: 350px;
`

export const ImageAstronautaTwo = styled.div`
  background-image: url(${astronautaTwo});
  background-repeat: no-repeat;

  height: 200px;
  width: 350px;
`

export const ImageAstronautaThree = styled.div`
  background-image: url(${astronautaThree});
  background-repeat: no-repeat;

  height: 200px;
  width: 350px;
`

export const ImageAstronautaFour = styled.div`
  background-image: url(${astronautaFour});
  background-repeat: no-repeat;

  height: 200px;
  width: 350px;
`
