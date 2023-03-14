import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 20px;
  margin: 16px auto;
  padding: 0;
  flex-direction: row;
`;

const setBgColor = props => {
  switch (props.action) {
    case 'good':
      return '#80ffa0';
    case 'neutral':
      return '#ebfffa';
    case 'bad':
      return '#ff3757';
    default:
      return '#fff';
  }
};

export const Button = styled.button`
  border-radius: 20px;
  border: none;
  padding: 5px;
  background-color: ${setBgColor};
  &:hover {
    text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
  }
`;