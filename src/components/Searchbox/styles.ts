import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 25rem;
  background-image: linear-gradient(#232129, white);
`;

export const Input = styled.div`
  border-radius: 5px;
  border: 1px solid lightgray;
  width: 80%;
  background-color: white;
  box-shadow: 0px 2px 8px gray;

  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
    cursor: pointer;
    color: gray;

    &:hover {
      color: #232129;
    }
  }

  form {
    width: 100%;

    input {
      flex: 1;
      background: transparent;
      border: 0;
      color: #232129;
      font-size: 2rem;
      padding: 2rem 1.2rem; 
      width: 100%;

      &::placeholder {
        color: #666360;
      }
    }
  }
  
`

export const Title = styled.div`
  font-size: 2.2rem;
  max-width: 50%;
  font-family: 'Playfair Display';
  text-align: center;
  color: white;
  margin: 1.5rem 0;
`;