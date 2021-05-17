import React from 'react';
import { Link } from 'react-router-dom';
import { HomeCardProps } from '../../types';

import { Container, Content, ImageContent, Description, Thumbs, Available } from './styles';

const HomeCard: React.FC<HomeCardProps> = ({ id, homeImage, images, overview }) => {
  return (
    <Link to={`/details/${id}`}>
      <Container isAvailable={overview.available}>

        <Content>
          <ImageContent>
            <img src={homeImage} alt="homeImage" />
            <strong>Price ${new Intl.NumberFormat('en-US').format(+overview.price)} </strong>
          </ImageContent>
          <Description>

            <span>
              <strong>Neighborhood:  </strong> {overview.neighborhood}
            </span>
            <span className="bedsAndBaths">
              <p>
                <strong>Beds:  </strong> {overview.beds}
              </p>
              <p>
                <strong>Baths:  </strong> {overview.baths}
              </p>
            </span>
            <span>
              <strong>Address:  </strong> {overview.address}
            </span>
            <span>
              <strong>City:  </strong> {overview.city}
            </span>
            <span>
              <strong>ZIP code:  </strong> {overview.zipcode}
            </span>
            <span>
              <strong>Available:  </strong>
              <Available isAvailable={overview.available}>
                {overview.available ? 'Yes' : 'No'}
              </Available>
            </span>
          </Description>
        </Content>
        <Thumbs>
          {images.map((image, index) =>
            <img src={image} alt="" key={index} />
          )}
        </Thumbs>
      </Container>
    </Link>
  )
}

export default HomeCard;