import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 20px;
  margin: 16px auto;
  padding: 0;
  flex-direction: row;
  text-align: center;
  list-style: none;
  
`;



export const Button = styled.button`
width: 100%;
  border-radius: 20px;
  border: none;
  padding: 5px;
  background-color: orange;
  ;
  &:hover {
    text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
  }
`;