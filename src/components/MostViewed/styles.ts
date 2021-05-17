import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
  border: 1px solid lightgray;
  border-radius: 10px;
  /* background-color: lightgray; */

  h2 {
    display: block;
    line-height: 4rem;
  }
`;

export const Items = styled.div`
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(5, 1fr);
  background-color: white;
`;