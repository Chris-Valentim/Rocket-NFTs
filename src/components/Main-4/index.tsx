import * as S from './styles';

import arrowOrange from '../../assets/arrow-orange.svg'
import artistaOne from '../../assets/artista-1.png'
import artistaTwo from '../../assets/artista-2.png'
import artistaThree from '../../assets/artista-3.png'
import artistaFour from '../../assets/artista-4.png'
import artistaFive from '../../assets/artista-5.png'
import artistaSix from '../../assets/artista-6.png'

const MainFour = () => {
  return(
    <S.Wrapper>
      <S.Title>Melhores <S.StyledText>
        artistas</S.StyledText>
      </S.Title>
      <S.Content>
        <S.Card>
          <img src={artistaOne} alt="artista-One" />
          <S.InfoCard>
            <S.AvatarName>
              Mayk Brito
            </S.AvatarName>
            <S.PhotosNumbers>
              80 Fotografias
            </S.PhotosNumbers>
          </S.InfoCard>
        </S.Card>
        <S.Featured>
          <img src={artistaTwo} alt="artista-Two" />
          <S.FeaturedCard>
            <S.FeaturedAvatarName>
              Jakeliny G.
            </S.FeaturedAvatarName>
            <S.FeaturedAvatarName>
              99 Fotografias
            </S.FeaturedAvatarName>
          </S.FeaturedCard>
        </S.Featured>
        <S.Card>
          <img src={artistaThree} alt="artista-Three" />
          <S.InfoCard>
            <S.AvatarName>
              João I.
            </S.AvatarName>
            <S.PhotosNumbers>
              50 Fotografias
            </S.PhotosNumbers>
          </S.InfoCard>
        </S.Card>
        <S.Card>
          <img src={artistaFour} alt="artista-Four" />
          <S.InfoCard>
            <S.AvatarName>
              Tamires Santos
            </S.AvatarName>
            <S.PhotosNumbers>
              43 Fotografias
            </S.PhotosNumbers>
          </S.InfoCard>
        </S.Card>
        <S.Card>
          <img src={artistaFive} alt="artista-Five" />
          <S.InfoCard>
            <S.AvatarName>
              Ana Silva
            </S.AvatarName>
            <S.PhotosNumbers>
              28 Fotografias
            </S.PhotosNumbers>
          </S.InfoCard>
        </S.Card>
        <S.Card>
          <img src={artistaSix} alt="artista-Six" />
          <S.InfoCard>
            <S.AvatarName>
              Diego F.
            </S.AvatarName>
            <S.PhotosNumbers>
              20 Fotografias
            </S.PhotosNumbers>
          </S.InfoCard>
        </S.Card>
      </S.Content>
      <S.StyledButton>
        <S.Button href="/">
          Ver todos artistas 
          <img src={arrowOrange} alt="arrow-Orange" />
        </S.Button>
      </S.StyledButton>
    </S.Wrapper>
  )
}

export { MainFour } 
