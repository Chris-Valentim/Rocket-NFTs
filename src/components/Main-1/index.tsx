import * as S from './styles'

import { Header } from './Header'
import { SectionOne } from './SectionOne'
import { Gallery } from './Gallery'

const MainOne = () => {
  return(
    <S.Wrapper>
      <Header />
      <SectionOne />
      <Gallery />
    </S.Wrapper>
  )
}

export { MainOne }