import * as S from './styles'

import groupAvarts from '../../../assets/group-avarts.png'

const Section = () => {
  return (
    <S.Wrapper>
      <div>
        <S.Info>
          Mercado digital para colecionáveis em criptos e tokens não fungível (NFT).
          Compre, venda e descubra ativos digitais exclusivos para você.
        </S.Info>
        <S.GroupedAvatars>
          <img 
            src={groupAvarts} 
            alt="groupAvarts" 
          />
          <div>
            <strong>+10</strong>
            <S.AvatarsInfo>Artistas selecionados</S.AvatarsInfo>
          </div>
        </S.GroupedAvatars>
      </div>
      <S.InformativeTitle>
        <div>
          Descubra a verdadeira arte digital e colecione diversas <S.StyledText>NFTs</S.StyledText>
        </div>
      </S.InformativeTitle>
      <S.BadgeImage />
    </S.Wrapper>
  )
}

export { Section }
