import * as S from './styles'

import { Header } from './Header'
import { Section } from './Section'
import { Gallery } from './Gallery'

const MainOne = () => {
  return(
    <S.Wrapper>
      <Header />
      <Section />
      <Gallery />
    </S.Wrapper>
  )
}

export { MainOne }