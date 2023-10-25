import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 16px;
  margin-top: 40px;
  margin-left: 80px;
  margin-right: 80px;

  @media (max-width: 425px) {
    margin-top: 5px;
    gap: 0;
  }
`

export const GalleryImage = styled.img`
  margin-top: 44px;
`
