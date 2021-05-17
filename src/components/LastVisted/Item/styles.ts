import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  border: 1px solid lightgray;

  border-radius: 5px;
  width: 300px;
  overflow: hidden;
  box-shadow: 0px 2px 5px lightgray;
`;

export const Image = styled.div`
  img {
    width: 100%;
    height: 200px;
  }
`;

export const Description = styled.div`
  padding: 1rem 0.5rem;
  font-weight: 700;
`