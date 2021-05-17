export type HomeProps = {
  id: number;
  homeImage: string;
  visits: {
    total: number;
  };
  overview: {
    price: string;
  }
}

export type HomeMostViewedProps = {
  id: number;
  picture: string;
  price: string;
  views: number;
}

export type HomeLastVisitedProps = {
  id: number;
  picture: string;
  price: string;
}

export type HomeCardProps = {
  id: number;
  homeImage: string;
  images: string[];
  overview: {
    price: string,
    beds: number,
    baths: number,
    neighborhood: string,
    address: string,
    city: string,
    zipcode: number,
    available: boolean;
  },
  facts: {
    lot: string,
  }
}

export type HomeDetailsProps = {
  id: number;
  homeImage: string;
  images: string[];
  overview: {
    price: string,
    beds: number,
    baths: number,
    neighborhood: string,
    address: string,
    city: string,
    zipcode: number,
    available: boolean;
  },
  facts: {
    type: string;
    yearBuilt: number;
    heating: string;
    parking: string;
    lot: string;
    stories: number;
  },
  others: {
    anualTax: number,
    hasGarage: boolean,
    pool: boolean,
    virtualTourLink: string,
    parcelNumber: number,
    lastSold: string
  },
  visits: {
    total: number,
    lastVisited: string
  },
}