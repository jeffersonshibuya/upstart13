import React from 'react';
import { FaRegListAlt } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

import { Container, LeftLinks, Logo, RightLinks, Link } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LeftLinks>
        <Link exact to={`/`}>
          <span>
            <FaRegListAlt />
            Home
          </span>
        </Link>
        <Link to={`/listing`}>
          <span>
            <FaRegListAlt />
            Listing
          </span>
        </Link>
      </LeftLinks>
      <Logo>
        <NavLink to='/'>
          Project Name
        </NavLink>
      </Logo>
      <RightLinks>
        <Link to={`/about`}>
          <span>
            <FaRegListAlt />
            About
          </span>
        </Link>
        <Link to={`/contact`}>
          <span>
            <FaRegListAlt />
            Contact
          </span>
        </Link>
      </RightLinks>
    </Container>
  )
}

export default Header;