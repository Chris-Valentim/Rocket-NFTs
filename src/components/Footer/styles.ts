import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--card-color);
  padding-top: 82px;
  height: 100%;

  @media (max-width: 425px) {
    padding-top: 50px;
  }
`

export const TopFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 60px;

  border-bottom: 1px solid var(--subtitle-color);

  @media (max-width: 425px) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;

    gap: 30px;
    padding-bottom: 30px;
  }
`

export const ButtomFooter = styled.button`
  background-color: var(--color-logo);

  padding: 0;
  margin: 0;
  border: none;

  &:hover{
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

  @media (max-width: 425px) {
    display: grid;
    
  }
`

export const LeftFooter = styled.div`
  border-right: 1px solid var(--subtitle-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  padding: 67px 62px 82px 80px;
  width: 35%;

  @media (max-width: 425px) {
    border: none;
    width: 80%;
    padding: 10px 40px 40px;
    gap: 20px;
  }
`

export const TitleFooter = styled.h1`
  color: var(--text-color);

  font-weight: 500;
  font-size: 30px;

  @media (max-width: 425px) {
    text-align: center;
  }
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

export const StyledButton = styled.div`
  :hover{
    background-color: var(--color-logo);
    color: var(--text-color);
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

  @media (max-width: 425px) {
    width: 100%;
    gap: 0;
    text-align: center;
    margin-bottom: 40px;
  }
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

export const StyledList = styled.li`
  :hover{
    color: var(--text-color);
    text-decoration: underline;
  }
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

  padding: 69px 80px 61px 80px;
  
  @media (max-width: 425px) {
    display: grid;
    justify-content: center;

    gap: 20px;
    padding: 20px 40px 30px 40px;
  }
`

export const Site = styled.a`
  color: var(--subtitle-color);

  list-style: none;
  text-decoration: none;

  @media (max-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const StyledSite = styled.div`
  &:hover{
    cursor: pointer;
    color: var(--text-color);

    @media (max-width: 425px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 50px;

  @media (max-width: 425px) {
    gap: 25px;
  }
`

export const SocialButton = styled.button`
  background-color: var(--card-color);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  border: none;

  &:hover{
    cursor: pointer;
    background-color: var(--text-color);
    padding: 5px;
    border-radius: 100%;
  }
`
