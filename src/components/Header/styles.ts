import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  height: 12vh;
  width: 100%;
  box-shadow: 0px 5px 20px lightgray;
  border-bottom: 1px solid #9f9f9f;
  z-index: 5;
`;

export const LeftLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: auto;
  padding-left: 1rem;
`;

export const Logo = styled.div`
  font-size: 3rem;
  font-family: 'Playfair Display';
  font: 700 italic;
`;

export const RightLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  padding-right: 1rem;
`;

export const Link = styled(NavLink)`
  font-size: 14px;
  display: flex;
  padding: 7px 15px;
  margin-right: 10px;
  color: #2c5282;
  font-size: 1rem;

  &:hover {
    color: orange;
  }

  span {
    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }

  &.active {
    color: orange;
  }
`;