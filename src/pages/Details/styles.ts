import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

export const ImageContent = styled.div`
  grid-column: 1/7;
  padding: 1rem;

  > img {
    width: 100%;
    max-height: 75vh;
    object-fit: cover;
  }
`;

export const ImageThumbs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  padding-top: 1rem;

  img { 
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DetailsContent = styled.div`
  grid-column: 7/9;
  margin: 1rem;
  padding: 1rem;
  border-left: 1px solid lightgray;
  box-shadow: -10px 0px 10px 0px lightgray;
  height: auto;

  button {
    padding: 1rem;
    background-color: lightgreen;
    border: 1px solid gray;
    border-radius: 10px;
  }

  h2 {
    font-size: 2rem;
    color: gray;
    text-align: center;
    line-height: 2rem;
  }
`;

export const PropertyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem 0;

  > strong {
    font-size: 1.5rem;
    border-bottom: 1px solid lightgray;
    width: 100%;
    line-height: 4rem;
    margin-bottom: 2rem;
  }

  span { 
    strong {
      margin-right: 0.7rem;
      font-size: 1.1rem;
      font-weight: 500;
    }

    & + span {
      margin-top: 0.7rem;
    }
  }
`;

interface AvailableProps {
  isAvailable: boolean;
}

export const Available = styled.div<AvailableProps>`
  ${props =>
    props.isAvailable &&
    css`
      background-color: green;
  `}

  ${props =>
    !props.isAvailable &&
    css`
      background-color: red;
  `}
  
  
  color: white;
  width: 80px;
  padding: 0.3rem;
  display: inline;
  border-radius: 3px;
`;
