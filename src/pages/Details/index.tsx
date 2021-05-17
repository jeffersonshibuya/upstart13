import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import api from '../../services/api';
import { HomeDetailsProps } from '../../types';

import { Container, ImageContent, ImageThumbs, DetailsContent, PropertyContent, Available } from './styles'

const Details: React.FC = () => {
  const history = useHistory();

  const [homeDetails, setHomeDetails] = useState<HomeDetailsProps>({} as HomeDetailsProps)
  const [showOthers, setShowOthers] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    api.get(`${id}`).then(response => {
      setHomeDetails(response.data);
    }).catch(err => {
      if (err.response.status === 404) {
        history.push('/not-found');
        return;
      }
    })
  }, [history, id])

  return (
    <Container>
      <ImageContent>
        <img src={homeDetails.homeImage} alt="" />
        <ImageThumbs>
          {homeDetails.images?.map((urlImage, index) =>
            <img src={urlImage} alt="" key={index} />
          )}
        </ImageThumbs>
      </ImageContent>
      <DetailsContent>
        <h2>Property Information</h2>

        <PropertyContent>
          <strong>Overview</strong>
          <span>
            <strong> Price: </strong>  ${new Intl.NumberFormat('en-US').format(+homeDetails.overview?.price)}
          </span>
          <span>
            <strong> Neighborhood: </strong>  {homeDetails.overview?.neighborhood}
          </span>
          <span>
            <strong> Beds: </strong>  {homeDetails.overview?.beds}
            <strong style={{ marginLeft: '2rem' }}> Baths: </strong>  {homeDetails.overview?.baths}
          </span>
          <span>
            <strong> Address: </strong>  {homeDetails.overview?.address}
          </span>
          <span>
            <strong> City: </strong>  {homeDetails.overview?.city}
          </span>
          <span>
            <strong> ZIP Code: </strong>  {homeDetails.overview?.zipcode}
          </span>
          <span>
            <strong> Available: </strong>
            <Available isAvailable={homeDetails.overview?.available}>
              {homeDetails.overview?.available ? 'Yes' : 'No'}
            </Available>
          </span>
        </PropertyContent>

        <PropertyContent>
          <strong>Facts and Features</strong>
          <span>
            <strong> Type: </strong>  {homeDetails.facts?.type}
          </span>
          <span>
            <strong> Year Built: </strong>  {homeDetails.facts?.yearBuilt}
          </span>
          <span>
            <strong> Heating: </strong>  {homeDetails.facts?.heating}
          </span>
          <span>
            <strong> Parknig: </strong>  {homeDetails.facts?.parking}
          </span>
          <span>
            <strong> Lot: </strong>  {homeDetails.facts?.lot}
          </span>
          <span>
            <strong> Stories: </strong>  {homeDetails.facts?.stories}
          </span>
        </PropertyContent>

        {showOthers && (
          <>
            <PropertyContent>
              <strong>Others</strong>
              <span>
                <strong> Annual Tax: </strong>  {homeDetails.others?.anualTax}
              </span>
              <span>
                <strong> Garage: </strong>
                <Available isAvailable={homeDetails.others?.hasGarage}>
                  {homeDetails.others?.hasGarage ? 'Yes' : 'No'}
                </Available>
              </span>
              <span>
                <strong> Last Sold: </strong>  {homeDetails.others?.lastSold}
              </span>
              <span>
                <strong> Parcel Number: </strong>  {homeDetails.others?.parcelNumber}
              </span>
              <span>
                <strong> Pool: </strong>
                <Available isAvailable={homeDetails.others?.pool}>
                  {homeDetails.others?.pool ? 'Yes' : 'No'}
                </Available>
              </span>
              <span>
                <strong>Tour: </strong>
                <a href={`${homeDetails.others?.virtualTourLink}`}>Virtual Tour</a>
              </span>
            </PropertyContent>

            <PropertyContent>
              <strong>Visits</strong>
              <span>
                <strong> Total: </strong>  {new Intl.NumberFormat('en-US').format(+homeDetails.visits?.total)}
              </span>

              <span>
                <strong> Last Visited: </strong>  {new Intl.DateTimeFormat('en-US').format(new Date(homeDetails.others?.lastSold))}
              </span>
            </PropertyContent>
          </>
        )}

        {!showOthers && <button type="button" onClick={() => setShowOthers(true)}> Show more...</button>}

      </DetailsContent>
    </Container>
  )
}

export default Details;