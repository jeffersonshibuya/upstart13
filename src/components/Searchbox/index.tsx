import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom'

import { Container, Title, Input } from './styles';

import { RiFileSearchLine } from 'react-icons/ri'

interface SearchProps {
  title: string;
}

const Searchbox: React.FC<SearchProps> = ({ title }) => {
  const history = useHistory();
  const [searchText, setSearchText] = useState('')

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    history.push({
      pathname: '/listing',
      state: searchText
    })
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Input>
        <form onSubmit={handleSearch}>
          <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} />
        </form>
        <RiFileSearchLine size={48} onClick={handleSearch} />
      </Input>
    </Container >
  )
}

export default Searchbox;