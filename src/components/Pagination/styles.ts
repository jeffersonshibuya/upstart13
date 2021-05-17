import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 0;

  > div {
    margin-right: 1rem;
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: 0;
    }
  }
`;