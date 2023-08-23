import * as S from './styles'

import banner from '../../assets/banner.png'

const MainTwo = () => {
  return (
    <S.Wrapper>
      <S.Info>
        <div>
          <S.Number>10K+</S.Number>
          <S.SalesDescription>Artes</S.SalesDescription>
        </div>
        <div>
          <S.Number>200+</S.Number>
          <S.SalesDescription>Vendas</S.SalesDescription>
        </div>
        <div>
          <S.Number>20</S.Number>
          <S.SalesDescription>Artistas</S.SalesDescription>
        </div>
      </S.Info>
      <S.Container>
        <S.Description>
          <S.Content>
            <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <S.StyledText>potenti diam</S.StyledText> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</S.Text>
            <S.TitleInfo>Lorem ipsum</S.TitleInfo>
          </S.Content>
          <S.Content>
            <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue malesuada amet pretium lacus. Id <S.StyledText>potenti diam</S.StyledText> et cras odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis nunc semper.</S.Text>
            <S.TitleInfo>Lorem ipsum</S.TitleInfo>
          </S.Content>
        </S.Description>
        <div>
          <img src={banner} alt="banner" />
        </div>
      </S.Container>
    </S.Wrapper>
  )
}

export { MainTwo }
