import * as S from './styles'

import logo from '../../assets/logo.svg';
import logoMetaMask from '../../assets/logo_MetaMask.svg'

const Header = () => {
  return(
    <S.Wrapper>
      <img src={logo} alt="logo" />
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
        <img src={logoMetaMask} alt="logoMetaMask" />
        Conectar carteira
      </S.Button>
    </S.Wrapper>
  )
}

export { Header };
