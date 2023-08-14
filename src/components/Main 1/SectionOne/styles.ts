import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: gray;

  color: var(--text-color);
  flex-wrap: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  
  margin-top: 90px;
  margin-left : 82px;
  margin-right: 80px;
  gap: 40px;
`

export const Content = styled.div`
  display: grid;
`

export const GroupedAvatars = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const Info = styled.p`
  margin-top: 0;
  margin-bottom: 55px;
  width: 340px; 
`

export const AvatarsInfo = styled.p`
  margin: 0;
`

export const InformativeTitle = styled.div`
  text-align: left;
  font-weight: bold;
  margin: 0;
  font-size: 44px;
`

export const StyledText = styled.strong`
  color: var(--color-logo);
`