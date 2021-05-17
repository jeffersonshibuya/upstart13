import styled, { css } from 'styled-components'

interface AvailableProps {
  isAvailable: boolean;
}

export const Container = styled.div<AvailableProps>`
  display: flex;
  flex: 1;
  align-items: flex-start;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 1rem 0.5rem;
  margin: 0.8rem 0;

  ${props =>
    !props.isAvailable &&
    css`
      opacity: 0.9;
  `}
  
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-right: 1rem;
`;

export const ImageContent = styled.div`
  display: flex;
  flex-direction: column;

  img {
    max-width: 250px;
    border-radius: 3px;
  }

  strong {
    line-height: 5rem;
    font-size: 1.3rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 2rem;

  span {
    margin-bottom: 1.5rem;

    strong { 
      margin-right: 1rem;
    }
  }

  span.bedsAndBaths {
    p { 
      margin-right: 3rem;
    }
  }

  .bedsAndBaths {
    display: flex;
    flex-direction: row;
    > div {
      margin-right: 2rem;
    }
  }
`;

export const Thumbs = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);

  img {
    width: 120px;
    height: 80px;
    border-radius: 3px;
  }
`;



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
  padding: 0.5rem;
  display: inline;
  border-radius: 3px;
`;