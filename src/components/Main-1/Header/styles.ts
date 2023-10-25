import styled from 'styled-components'

import logoMetaMask from '../../../assets/logo_MetaMask.svg'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding-top: 57px;
  margin-left: 80px;
  margin-right: 80px;

  @media (max-width: 425px) {
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`

export const Logo = styled.img`
  @media (max-width: 425px) {
    width: 150px;
  }
`

export const Navigation = styled.ul`
  display: flex;
  gap: 24px;

  @media (max-width: 425px) {
    gap: 20px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
  }
`

export const List = styled.li`
  list-style: none;

  :hover{
    cursor: pointer;
    color: var(--color-logo);
    text-decoration: underline;
  }
`

export const Button = styled.button`
  background-color: var(--text-color);

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;

  &:hover{
    cursor: pointer;
    background-color: var(--color-logo);
    color: var(--text-color);
  }

  
`

export const IconButton = styled.div`
  background-image: url(${logoMetaMask});
  background-repeat: no-repeat;

  height: 30px;
  width: 40px;
`

export const Access = styled.a`
  color: var(--text-color);
  text-decoration: none;
`
