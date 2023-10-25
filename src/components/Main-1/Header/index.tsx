import * as S from './styles'

import logo from '../../../assets/logo.svg';

const Header = () => {
  return(
    <S.Wrapper>
      <S.Logo
        aria-label='Logo' 
        src={logo} 
        alt="logo" 
      />
      <nav>
        <S.Navigation>
          <S.List>
            <S.Access href="/">Comprar NFT</S.Access>
          </S.List>
          <S.List>
            <S.Access href="/">Sobre</S.Access>
          </S.List>
          <S.List>
            <S.Access href="/">FAQ</S.Access>
          </S.List>
        </S.Navigation>
      </nav>
        <S.Button>
         <S.IconButton />
          Conectar Carteira
        </S.Button>
    </S.Wrapper>
  )
}

export { Header };
