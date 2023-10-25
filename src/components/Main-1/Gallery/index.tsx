import * as S from './styles'

import galleryOne from '../../../assets/galeria-1.png'
import galleryTwo from '../../../assets/galeria-2.png'
import galleryThree from '../../../assets/galeria-3.png'
import galleryFour from '../../../assets/galeria-4.png'
import galleryFive from '../../../assets/galeria-5.png'
import gallerySix from '../../../assets/galeria-6.png'
import gallerySeven from '../../../assets/galeria-7.png'
import galleryEight from '../../../assets/galeria-8.png'

const Gallery = () => {
  return (
    <S.Wrapper>
      <S.GalleryImage
        src={galleryOne}
        alt="galeria 1"
      />
      <S.GalleryImage
        src={galleryTwo}
        alt="galeria 2"
      />
      <S.GalleryImage
        src={galleryThree}
        alt="galeria 3"
      />
      <S.GalleryImage
        src={galleryFour}
        alt="galeria 4"
      />
      <S.GalleryImage
        src={galleryFive}
        alt="galeria 5"
      />
      <S.GalleryImage
        src={gallerySix}
        alt="galeria 6"
      />
      <S.GalleryImage
        src={gallerySeven}
        alt="galeria 7"
      />
      <S.GalleryImage
        src={galleryEight}
        alt="galeria 8"
      />
    </S.Wrapper>
  )
}

export { Gallery }
