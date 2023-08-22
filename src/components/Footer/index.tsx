import * as S from './styles'

import logo from '../../assets/logo.svg'
import arrowBlack from '../../assets/arrow-black.svg'
import instagram from '../../assets/instagram.svg'
import youtube from '../../assets/youtube.svg'
import twitter from '../../assets/twitter.svg'
import email from '../../assets/email.svg'

const Footer = () => {
  return (
    <S.Wrapper>
      <S.TopFooter>
        <img src={logo} alt="logo" />
        <S.ButtomFooter>
          <S.arrowBlackImg
            src={arrowBlack}
            alt="arrow Black"
          />
        </S.ButtomFooter>
      </S.TopFooter>
      <S.MiddleFooter>
        <S.LeftFooter>
          <S.TitleFooter>Fique por dentro de <S.StyledText>todas as novidades</S.StyledText>
          </S.TitleFooter>
          <S.MailButton>
            <S.Input
              type="email"
              placeholder='nft@rocketseat.com.br'
            />
            <S.SubmitButton>
              Enviar
            </S.SubmitButton>
          </S.MailButton>
        </S.LeftFooter>
        <S.RightFooter>
          <div>
            <S.Column>
              <S.TitleListFooter>
                Empresa
              </S.TitleListFooter>
              <li>
                <S.List href="/">Sobre</S.List>
              </li>
              <li>
                <S.List href="/">Serviços</S.List>
              </li>
              <li>
                <S.List href="/">Time</S.List>
              </li>
              <li>
                <S.List href="/">Carreira</S.List>
              </li>
            </S.Column>
          </div>
          <div>
            <S.Column>
              <S.TitleListFooter>
                Mapa
              </S.TitleListFooter>
              <li>
                <S.List href="/">Galeria</S.List>
              </li>
              <li>
                <S.List href="/">Populares</S.List>
              </li>
              <li>
                <S.List href="/">Vendas</S.List>
              </li>
              <li>
                <S.List href="/">Contato</S.List>
              </li>
            </S.Column>
          </div>
          <div>
            <S.Column>
              <S.TitleListFooter>
                Links
              </S.TitleListFooter>
              <li>
                <S.List href="/">FAQs</S.List>
              </li>
              <li>
                <S.List href="/">Termos</S.List>
              </li>
              <li>
                <S.List href="/">Política</S.List>
              </li>
              <li>
                <S.List href="/">Ajuda</S.List>
              </li>
            </S.Column>
          </div>
        </S.RightFooter>
      </S.MiddleFooter>
      <S.BottomFooter>
        <S.Site href="https://www.rocketseat.com.br/discover">www.rocketseat.com.br</S.Site>
        <S.SocialMedia>
          <S.SocialButton>
            <img
              src={instagram}
              alt="instagram"
            />
          </S.SocialButton>
          <S.SocialButton>
            <img
              src={youtube}
              alt="youtube"
            />
          </S.SocialButton>
          <S.SocialButton>
            <img
              src={twitter}
              alt="twitter"
            />
          </S.SocialButton>
          <S.SocialButton>
            <img
              src={email}
              alt="email"
            />
          </S.SocialButton>
        </S.SocialMedia>
      </S.BottomFooter>
    </S.Wrapper>
  )
}

export { Footer }
