import React from 'react';

import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

import { Container } from './styles';

interface PaginationProps {
  currentPage: number;
  nextPage: number;
  prevPage: number;
  total: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage = 1, nextPage, prevPage, setPage, total = 0 }) => {
  return (
    <Container>
      <div>
        Listings by page: 5
      </div>
      <div>
        Page {currentPage} - {total / 5 < 1 ? 1 : Math.round(total / 5)}
        <button type="button" onClick={() => setPage(prevPage)} disabled={currentPage === prevPage}>
          <GrFormPrevious size={24} />
        </button>
        <button type="button" onClick={() => setPage(nextPage)} disabled={currentPage === nextPage}>
          <GrFormNext size={24} />
        </button>
      </div>
    </Container>
  )
}

export default Pagination;