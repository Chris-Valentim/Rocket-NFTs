import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--card-color);
  padding-top: 82px;
  height: 100%;
`

export const TopFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding-left: 84px;
  padding-right: 88px;
  padding-bottom: 60px;

  border-bottom: 1px solid var(--subtitle-color);
`

export const ButtomFooter = styled.button`
  background-color: var(--color-logo);

  padding: 0;
  margin: 0;
  border: none;

  :hover{
    cursor: pointer;
    background-color: var(--text-color);
  }
`

export const arrowBlackImg = styled.img`
  padding: 12px 14px;
`

export const MiddleFooter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid var(--subtitle-color);
`

export const LeftFooter = styled.div`
  border-right: 1px solid var(--subtitle-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  padding-top: 67px;
  padding-left: 80px;
  padding-right: 62px;
  padding-bottom: 82px;
  width: 500px;
`

export const TitleFooter = styled.h1`
  color: var(--text-color);

  font-weight: 500;
  font-size: 30px;
`

export const StyledText = styled.span`
  color: var(--color-logo);
`

export const MailButton = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  background-color: var(--color-input);

  padding: 21px;
  width: 100%;
  border: none;

  color: var(--text-color);

  &::placeholder{
    font-size: 16px;
  }
`

export const SubmitButton = styled.button`
  background-color: var(--text-color);

  padding: 20px 14px;
  border: none;

  font-weight: bold;
  font-size: 15px;

  :hover{
    cursor: pointer;
    background-color: var(--color-logo);
  }
`

export const RightFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;

  width: 80%;
  gap: 20px;
`

export const Column = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;

  gap: 15px;
  padding: 0;
  margin: 0;
`

export const TitleListFooter = styled.h4`
  margin: 0;

  font-weight: bold;
  font-size: 20px;
  color: var(--text-color);
`

export const List = styled.a`
  text-decoration: none;
  color: var(--subtitle-color);

  :hover{
    color: var(--text-color);
    cursor: pointer;
  }
`

export const BottomFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 69px;
  padding-left: 84px;
  padding-right: 88px;
  padding-bottom: 61px;               
`

export const Site = styled.a`
  color: var(--subtitle-color);

  list-style: none;
  text-decoration: none;

  :hover{
    cursor: pointer;
    color: var(--text-color);
  }
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;

  gap: 50px;
  margin: 0 15px;
`

export const SocialButton = styled.button`
  padding: 0;
  background-color: var(--card-color);
  border: none;

  :hover{
    cursor: pointer;
  }
`
