import * as S from './styles';

const MainThree = () => {
  return (
    <S.Wrapper>
      <S.Title>
        <S.StyledText>Populares</S.StyledText> da semana
      </S.Title>
      <S.Content>
        <div>
          <div>
            <S.SubTitle>
              Astronauta 1
              <S.ImageArrow />
            </S.SubTitle>
            <S.AvatarName>
              Mayk Brito 
              <S.StyledText>
                1.50 RKT
              </S.StyledText>
            </S.AvatarName>
            <S.ImageAstronautaOne />
          </div>
          <div>
            <S.SubTitle>
              Astronauta 2
              <S.ImageArrow />
            </S.SubTitle>
            <S.AvatarName>
              João Inácio (Biro) 
              <S.StyledText>
                3.75 RKT
              </S.StyledText>
            </S.AvatarName>
            <S.ImageAstronautaTwo />
          </div>
        </div>
        <S.DividingLine />
        <div>
          <div>
            <S.SubTitle>
              Astronauta 3
              <S.ImageArrow />
            </S.SubTitle>
            <S.AvatarName>
              Jakeliny Gracielly 
              <S.StyledText>
                2.0 RKT
              </S.StyledText>
            </S.AvatarName>
            <S.ImageAstronautaThree />
          </div>
          <div>
            <S.SubTitle>
              Astronauta 4
              <S.ImageArrow />
            </S.SubTitle>
            <S.AvatarName>
              Tamires Santos
                <S.StyledText> 
                  4.3 RKT
                </S.StyledText>
            </S.AvatarName>
            <S.ImageAstronautaFour />
          </div>
        </div>
      </S.Content>
    </S.Wrapper>
  )
}

export { MainThree }
