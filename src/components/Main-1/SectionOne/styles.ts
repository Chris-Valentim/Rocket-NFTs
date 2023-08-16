import styled from 'styled-components'

export const Wrapper = styled.div`

  color: var(--text-color);

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  margin-top: 90px;
  margin-left: 82px;
  margin-right: 82px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;

  text-align: left;
  font-weight: bold;
  font-size: 44px;

  margin: 0;
  width: 520px;
`

export const StyledText = styled.strong`
  color: var(--color-logo);
`
