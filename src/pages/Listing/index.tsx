import React, { useEffect, useState } from 'react';
import HomeCard from '../../components/HomeCard';
import Pagination from '../../components/Pagination';
import api from '../../services/api';
import { HomeCardProps } from '../../types/index'

import { Container, Header } from './styles'

const Listing: React.FC<any> = (search) => {
  const [homes, setHomes] = useState<HomeCardProps[]>([])

  const [page, setPage] = useState(1);
  const [totalRegisters, setTotalRegisters] = useState(0)
  const [nextPage, setNextPage] = useState(2)
  const [prevPage, setPrevPage] = useState(1)

  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    api.get(`?_page=${page}&_limit=5${search.location.state && `&q=${search.location.state}`}${neighborhood && `&overview.neighborhood_like=${neighborhood}`}${city && `&overview.city_like=${city}`}${type && `&facts.type_like=${type}`}
    `
    ).then(response => {
      setTotalRegisters(response.headers['x-total-count'])

      response.headers['link']?.split(',').forEach((link: string) => {
        if (link.includes('next')) {
          setNextPage(+link.substring(link.indexOf('_page=') + 6, link.indexOf('&')))
        }

        if (link.includes('prev')) {
          setPrevPage(+link.substring(link.indexOf('_page=') + 6, link.indexOf('&')))
        }
      })

      setHomes(response.data.map((home: HomeCardProps) => {
        return {
          id: home.id,
          homeImage: home.homeImage,
          images: home.images,
          overview: home.overview
        }
      }))
    })
  }, [city, neighborhood, page, search, type])

  return (
    <Container>
      <Header>
        <h1>List of Homes</h1>
        <div>
          <label>Filter by:</label>
          {neighborhood}
          <select id="neighborhood" value={neighborhood} onChange={e => setNeighborhood(e.target.value)}>
            <option value="">-- All Neighborhoods --</option>
            <option value="Kendall">Kendall</option>
            <option value="Sunrise">Sunrise</option>
            <option value="Hollywood">Hollywood</option>
          </select>

          <select id="cities" value={city} onChange={e => setCity(e.target.value)}>
            <option value="">-- All Cities --</option>
            <option value="Plantation">Plantation</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Pasadena">Pasadena</option>
          </select>

          <select id="type" value={type} onChange={e => setType(e.target.value)}>
            <option value="">-- All Types --</option>
            <option value="Single Home">Single Home</option>
            <option value="Apartment">Apartment</option>
            <option value="Townhouse">Townhouse</option>
          </select>
        </div>
      </Header>

      {homes.map((home, index) => <HomeCard {...home} key={index} />)}

      <Pagination currentPage={page} nextPage={nextPage} prevPage={prevPage} setPage={setPage} total={totalRegisters} />
    </Container>
  )
}

export default Listing;