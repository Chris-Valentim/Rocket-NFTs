import * as S from './styles';

import astronautaOne from '../../assets/astronauta-1.png'
import astronautaTwo from '../../assets/astronauta-2.png'
import astronautaThree from '../../assets/astronauta-3.png'
import astronautaFour from '../../assets/astronauta-4.png'
import arrowWhite from '../../assets/arrow-white.svg'

const MainThree = () => {
  return (
    <S.Wrapper>
      <S.Title>
        <S.StyledText>Populares</S.StyledText> da semana
      </S.Title>
      <S.Content>
        <S.CardColumnOne>
          <div>
            <S.SubTitle>Astronauta 1<img src={arrowWhite} alt="arrow-White" /></S.SubTitle>
            <S.AvatarName>Mayk Brito <S.StyledText>1.50 RKT</S.StyledText></S.AvatarName>
            <img src={astronautaOne} alt="astronauta One" />
          </div>
          <div>
            <S.SubTitle>Astronauta 2<img src={arrowWhite} alt="arrow-White" /></S.SubTitle>
            <S.AvatarName>João Inácio (Biro) <S.StyledText>3.75 RKT</S.StyledText></S.AvatarName>
            <img src={astronautaTwo} alt="astronauta Two" />
          </div>
        </S.CardColumnOne>
        <div>
          <div>
            <S.SubTitle>Astronauta 3<img src={arrowWhite} alt="arrow-White" /></S.SubTitle>
            <S.AvatarName>Jakeliny Gracielly <S.StyledText>2.0 RKT</S.StyledText></S.AvatarName>
            <img src={astronautaThree} alt="astronauta Three" />
          </div>
          <div>
            <S.SubTitle>Astronauta 4<img src={arrowWhite} alt="arrow-White" /></S.SubTitle>
            <S.AvatarName>Tamires Santos <S.StyledText>4.3 RKT</S.StyledText></S.AvatarName>
            <img src={astronautaFour} alt="astronauta Four" />
          </div>
        </div>
      </S.Content>
    </S.Wrapper>
  )
}

export { MainThree }
