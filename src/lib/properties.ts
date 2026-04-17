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
    matterports: ['https://my.matterport.com/show/?m=b8gyzcC1SXt&mls=1']
  }
};

export function getProperty(slug: string): Property | null {
  return properties[slug] || null;
}
