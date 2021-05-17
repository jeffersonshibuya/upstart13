import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 6rem;

  
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 2rem;
  }


  select {
    padding: 0.5rem;
    font-size: 1rem;
    margin-left: 1rem;
  }
`