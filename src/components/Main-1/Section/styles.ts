import styled from 'styled-components'

import badge from '../../../assets/badge.svg'

export const Wrapper = styled.div`

  color: var(--text-color);

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 90px;
  margin-left: 80px;
  margin-right: 80px;

  @media (max-width: 425px) {
    margin-top: 40px;
    margin-left: 40px;
    margin-right: 40px;
    text-align: center;
  }
`

export const GroupedAvatars = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Info = styled.p`
  margin-bottom: 55px; 
  max-width: 340px;

  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 30px;
  }
`

export const AvatarsInfo = styled.p`
  margin: 0;
`

export const InformativeTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: left;
  font-weight: bold;
  font-size: 44px;

  margin: 0;
  max-width: 520px;

  @media (max-width: 425px) {
    margin-top: 30px;
    font-size: 35px;
    text-align: center;
  }
`

export const StyledText = styled.strong`
  color: var(--color-logo);
`

export const BadgeImage = styled.div`
  background-image: url(${badge});
  background-repeat: no-repeat;
  height: 205px;
  width: 205px;

  @media (max-width: 425px) {
    margin-top: 30px;
    margin-left: 70px;
    margin-right: 70px;
  }
`
