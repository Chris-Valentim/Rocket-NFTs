import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding-top: 57px;
  margin-left: 82px;
  margin-right: 80px;
`

export const Navigation = styled.ul`
  display: flex;
  gap: 24px;
`

export const List = styled.li`
  list-style: none;

  :hover{
    cursor: pointer;
    color: var(--color-logo);
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
`

export const StyledButton = styled.div`
  border: none;
  background-color: var(--text-color);
  
  :hover{
    cursor: pointer;
    background-color: var(--color-logo);
    color: var(--text-color);
  }
`

export const Access = styled.a`
  color: var(--text-color);
  text-decoration: none;
`
