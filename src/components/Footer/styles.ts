import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 1px solid lightgray;
  padding: 2rem;
  background: #232129;
  color: white;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    a {      
      svg {
        color: lightgray;
        margin: 0 1rem;
      }
    }
  }

  ul { 
    list-style: none;
    display: flex;
    margin-bottom: 2rem;

    li {
      padding-right: 1.5rem;
    }
  }
`;