import * as S from './styles'

import groupAvarts from '../../../assets/group-avarts.png'
import badge from '../../../assets/badge.svg'

const SectionOne = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <div>
          <S.Info>
            Mercado digital para colecionáveis em criptos e tokens não fungível (NFT).
            Compre, venda e descubra ativos digitais exclusivos para você.
          </S.Info>
          <S.GroupedAvatars>
            <img src={groupAvarts} alt="groupAvarts" />
            <div>
              <strong>+10</strong>
              <S.AvatarsInfo>Artistas selecionados</S.AvatarsInfo>
            </div>
          </S.GroupedAvatars>
        </div>
      </S.Content>
      <S.InformativeTitle>
        <div>
          Descubra a verdadeira arte digital e coleione diversas <S.StyledText>NFTs</S.StyledText>
        </div>
      </S.InformativeTitle>
      <img src={badge} alt="badge" />
    </S.Wrapper>
  )
}

export { SectionOne }
