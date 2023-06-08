import styled from 'styled-components'

export const TabList = styled.li`
  margin: 10px;
`
export const TabButton = styled.button`
  height: 2.2rem;
  width: 5rem;
  padding: 10xp;
  border-radius: 22px;
  background-color: ${props => (props.isActive ? '#db1c48' : 'transparent')};
  border: 2px solid #db1c48;
  color: ${props => (props.isActive ? '#ffffff' : '#db1c48')};
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    border-color: #eda182;
    color: ${props => (props.isActive ? '#ffffff' : '#db1c48')};
  }
`
