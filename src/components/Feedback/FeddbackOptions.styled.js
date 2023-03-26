import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 30px;
  button {
    padding: 20px;
    width: 130px;
    font-size: 18px;
    font-family: cursive;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    border: none;
    outline: none;
    box-shadow: -2px 11px 19px -6px rgba(0, 0, 0, 0.55);
    border-radius: 15px;
    transition: 500ms;
    &:hover {
      transform: scale(1.2);
      background-color: antiquewhite;
    }
  }
`;
