// Property data structure
export interface Property {
  id: string;
  slug: string;
  llcName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  squareFeet: number;
  bedrooms: number;
  bathrooms: number;
  type: string;
  parking: string;
  yearBuilt: number;
  estimatedRent: number;
  leaseStatus: 'occupied' | 'available';
  leaseEnd?: string;
  thumbnail: string;
  photos: string[];
  matterports?: string[];
}

export const properties: Record<string, Property> = {
  'clinton-3107': {
    id: 'clinton-3107',
    slug: 'clinton-3107',
    llcName: 'RKS Properties - Clinton 1 LLC',
    email: 'info@rksproperties.io',
    address: '3107 Clinton St',
    city: 'Sachse',
    state: 'TX',
    zip: '75048',
    squareFeet: 1645,
    bedrooms: 3,
    bathrooms: 2,
    type: 'Single Family',
    parking: 'Garage',
    yearBuilt: 1985,
    estimatedRent: 2350,
    leaseStatus: 'occupied',
    leaseEnd: 'January 2027',
    thumbnail: '/photos/thumbnails/clinton-3107.jpg',
    photos: ['/photos/clinton-3107/01.jpg','/photos/clinton-3107/02.jpg','/photos/clinton-3107/03.jpg','/photos/clinton-3107/04.jpg','/photos/clinton-3107/05.jpg','/photos/clinton-3107/06.jpg','/photos/clinton-3107/07.jpg','/photos/clinton-3107/08.jpg','/photos/clinton-3107/09.jpg','/photos/clinton-3107/10.jpg','/photos/clinton-3107/11.jpg','/photos/clinton-3107/12.jpg','/photos/clinton-3107/13.jpg','/photos/clinton-3107/14.jpg','/photos/clinton-3107/15.jpg','/photos/clinton-3107/16.jpg','/photos/clinton-3107/17.jpg','/photos/clinton-3107/18.jpg','/photos/clinton-3107/19.jpg','/photos/clinton-3107/20.jpg'],
    matterports: ['https://my.matterport.com/show/?m=676mecfjrYZ&mls=1']
  },
  'masters-503': {
    id: 'masters-503',
    slug: 'masters-503',
    llcName: 'RKS Properties - Masters 1, LLC',
    email: 'info@rksproperties.io',
    address: '503 Masters Ave',
    city: 'Wylie',
    state: 'TX',
    zip: '75098',
    squareFeet: 982,
    bedrooms: 3,
    bathrooms: 1,
    type: 'Single Family',
    parking: 'Garage',
    yearBuilt: 1986,
    estimatedRent: 1900,
    leaseStatus: 'occupied',
    leaseEnd: 'October 2026',
    thumbnail: '/photos/thumbnails/masters-503.jpg',
    photos: ['/photos/masters-503/01.jpg','/photos/masters-503/02.jpg','/photos/masters-503/03.jpg','/photos/masters-503/04.jpg','/photos/masters-503/05.jpg','/photos/masters-503/06.jpg','/photos/masters-503/07.jpg','/photos/masters-503/08.jpg','/photos/masters-503/09.jpg','/photos/masters-503/10.jpg','/photos/masters-503/11.jpg','/photos/masters-503/12.jpg'],
    matterports: ['https://my.matterport.com/show/?m=atGMyRsLP1k&mls=1']
  },
  'wyndham-210': {
    id: 'wyndham-210',
    slug: 'wyndham-210',
    llcName: 'RKS Properties - Wyndham Meadows 1, LLC',
    email: 'info@rksproperties.io',
    address: '210 Wyndham Meadows Way',
    city: 'Wylie',
    state: 'TX',
    zip: '75098',
    squareFeet: 1148,
    bedrooms: 2,
    bathrooms: 2,
    type: 'Half Duplex',
    parking: 'Garage',
    yearBuilt: 2003,
    estimatedRent: 1825,
    leaseStatus: 'occupied',
    leaseEnd: 'August 2026',
    thumbnail: '/photos/thumbnails/wyndham-210.jpg',
    photos: ['/photos/wyndham-210/01.jpg','/photos/wyndham-210/02.jpg','/photos/wyndham-210/03.jpg','/photos/wyndham-210/04.jpg','/photos/wyndham-210/05.jpg','/photos/wyndham-210/06.jpg','/photos/wyndham-210/07.jpg','/photos/wyndham-210/08.jpg','/photos/wyndham-210/09.jpg','/photos/wyndham-210/10.jpg','/photos/wyndham-210/11.jpg','/photos/wyndham-210/12.jpg'],
    matterports: ['https://my.matterport.com/show/?m=QNqo2fpYcCi&mls=1']
  },
  'wyndham-212': {
    id: 'wyndham-212',
    slug: 'wyndham-212',
    llcName: 'RKS Properties - Wyndham Meadows 1, LLC',
    email: 'info@rksproperties.io',
    address: '212 Wyndham Meadows Way',
    city: 'Wylie',
    state: 'TX',
    zip: '75098',
    squareFeet: 1148,
    bedrooms: 2,
    bathrooms: 2,
    type: 'Half Duplex',
    parking: 'Garage',
    yearBuilt: 2003,
    estimatedRent: 1825,
    leaseStatus: 'occupied',
    leaseEnd: 'September 2026',
    thumbnail: '/photos/thumbnails/wyndham-212.jpg',
    photos: ['/photos/wyndham-212/01.jpg','/photos/wyndham-212/02.jpg','/photos/wyndham-212/03.jpg','/photos/wyndham-212/04.jpg','/photos/wyndham-212/05.jpg','/photos/wyndham-212/06.jpg','/photos/wyndham-212/07.jpg','/photos/wyndham-212/08.jpg','/photos/wyndham-212/09.jpg','/photos/wyndham-212/10.jpg','/photos/wyndham-212/11.jpg','/photos/wyndham-212/12.jpg','/photos/wyndham-212/13.jpg'],
    matterports: ['https://my.matterport.com/show/?m=74BirLs72nE&mls=1']
  },
  'pinetrail-505': {
    id: 'pinetrail-505',
    slug: 'pinetrail-505',
    llcName: 'RKS Properties - Pine Trail 1, LLC',
    email: 'info@rksproperties.io',
    address: '505 Pine Trail Dr',
    city: 'Allen',
    state: 'TX',
    zip: '75002',
    squareFeet: 1005,
    bedrooms: 2,
    bathrooms: 2,
    type: 'Half Duplex',
    parking: 'Carport',
    yearBuilt: 1978,
    estimatedRent: 1850,
    leaseStatus: 'occupied',
    leaseEnd: 'March 2027',
    thumbnail: '/photos/thumbnails/pinetrail-505.jpg',
    photos: ['/photos/pinetrail-505/01.jpg','/photos/pinetrail-505/02.jpg','/photos/pinetrail-505/03.jpg','/photos/pinetrail-505/04.jpg','/photos/pinetrail-505/05.jpg','/photos/pinetrail-505/06.jpg','/photos/pinetrail-505/07.jpg','/photos/pinetrail-505/08.jpg','/photos/pinetrail-505/09.jpg','/photos/pinetrail-505/10.jpg','/photos/pinetrail-505/11.jpg','/photos/pinetrail-505/12.jpg'],
    matterports: ['https://my.matterport.com/show/?m=Mgb1AqrSXqm&mls=1']
  },
  'pinetrail-507': {
    id: 'pinetrail-507',
    slug: 'pinetrail-507',
    llcName: 'RKS Properties - Pine Trail 1, LLC',
    email: 'info@rksproperties.io',
    address: '507 Pine Trail Dr',
    city: 'Allen',
    state: 'TX',
    zip: '75002',
    squareFeet: 1005,
    bedrooms: 2,
    bathrooms: 2,
    type: 'Half Duplex',
    parking: 'Carport',
    yearBuilt: 1978,
    estimatedRent: 1850,
    leaseStatus: 'occupied',
    leaseEnd: 'April 2026',
    thumbnail: '/photos/thumbnails/pinetrail-507.jpg',
    photos: ['/photos/pinetrail-507/01.jpg','/photos/pinetrail-507/02.jpg','/photos/pinetrail-507/03.jpg','/photos/pinetrail-507/04.jpg','/photos/pinetrail-507/05.jpg','/photos/pinetrail-507/06.jpg','/photos/pinetrail-507/07.jpg','/photos/pinetrail-507/08.jpg','/photos/pinetrail-507/09.jpg','/photos/pinetrail-507/10.jpg','/photos/pinetrail-507/11.jpg','/photos/pinetrail-507/12.jpg'],
    matterports: ['https://my.matterport.com/show/?m=D63HaUe4Vzp&mls=1']
  },
  'lillie-3509': {
    id: 'lillie-3509',
    slug: 'lillie-3509',
    llcName: 'RKS Properties - Lillie 1, LLC',
    email: 'info@rksproperties.io',
    address: '3509 Lillie St',
    city: 'Sachse',
    state: 'TX',
    zip: '75048',
    squareFeet: 1045,
    bedrooms: 2,
    bathrooms: 1.5,
    type: 'Half Duplex',
    parking: 'Carport',
    yearBuilt: 1983,
    estimatedRent: 1725,
    leaseStatus: 'occupied',
    leaseEnd: 'February 2027',
    thumbnail: '/photos/thumbnails/lillie-3509.jpg',
    photos: ['/photos/lillie-3509/01.jpg','/photos/lillie-3509/02.jpg','/photos/lillie-3509/03.jpg','/photos/lillie-3509/04.jpg','/photos/lillie-3509/05.jpg','/photos/lillie-3509/06.jpg','/photos/lillie-3509/07.jpg','/photos/lillie-3509/08.jpg','/photos/lillie-3509/09.jpg','/photos/lillie-3509/10.jpg','/photos/lillie-3509/11.jpg','/photos/lillie-3509/12.jpg'],
    matterports: ['https://my.matterport.com/show/?m=gXEhNcoGJh5&mls=1']
  },
  'lillie-3513': {
    id: 'lillie-3513',
    slug: 'lillie-3513',
    llcName: 'RKS Properties - Lillie 1, LLC',
    email: 'info@rksproperties.io',
    address: '3513 Lillie St',
    city: 'Sachse',
    state: 'TX',
    zip: '75048',
    squareFeet: 1045,
    bedrooms: 2,
    bathrooms: 1.5,
    type: 'Half Duplex',
    parking: 'Carport',
    yearBuilt: 1983,
    estimatedRent: 1725,
    leaseStatus: 'occupied',
    leaseEnd: 'January 2027',
    thumbnail: '/photos/thumbnails/lillie-3513.jpg',
    photos: ['/photos/lillie-3513/01.jpg','/photos/lillie-3513/02.jpg','/photos/lillie-3513/03.jpg','/photos/lillie-3513/04.jpg','/photos/lillie-3513/05.jpg','/photos/lillie-3513/06.jpg','/photos/lillie-3513/07.jpg','/photos/lillie-3513/08.jpg','/photos/lillie-3513/09.jpg','/photos/lillie-3513/10.jpg','/photos/lillie-3513/11.jpg','/photos/lillie-3513/12.jpg'],
    matterports: ['https://my.matterport.com/show/?m=b8gyzcC1SXt&mls=1']
  }
};

export function getProperty(slug: string): Property | null {
  return properties[slug] || null;
}
