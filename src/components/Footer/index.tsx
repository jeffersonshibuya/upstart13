import React from 'react';
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io'

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <a href="/#"><IoLogoInstagram size={48} /></a>
        <a href="/#"><IoLogoFacebook size={48} /></a>
        <a href="/#"><IoLogoTwitter size={48} /></a>
        <a href="/#"><IoLogoLinkedin size={48} /></a>
      </div>
      <ul>
        <li><a href="/#">Home</a></li>
        <li><a href="/#">Listing</a></li>
        <li><a href="/#">About</a></li>
        <li><a href="/#">Terms</a></li>
        <li><a href="/#">Privacy Policy</a></li>
      </ul>
      <p>Company Name © 2021</p>
    </Container>
  )
}

export default Footer;