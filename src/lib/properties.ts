// Property data structure
export interface Property {
  id: string;
  slug: string;
  llcName: string;
  email: string;
  currentRent: number;
  yearBuilt: number;
  address: string;
  squareFeet: number;
  bedrooms: number;
  bathrooms: number;
  type: string; // e.g., "Single Family", "Duplex"
  garage: boolean;
  leaseStatus: 'available' | 'leased';
  leaseDate?: string;
  description?: string;
  matterports?: string[];
  mediaFolderIds?: string[];
}

// Hardcoded property data - will be replaced with API calls to family office DB
export const properties: Record<string, Property> = {
  lillie1: {
    id: 'lillie',
    slug: 'lillie1',
    llcName: 'Lillie 1 LLC',
    email: 'lillie1@rksproperties.io',
    currentRent: 2400,
    yearBuilt: 1995,
    address: '3509 Lillie Lane',
    squareFeet: 2100,
    bedrooms: 4,
    bathrooms: 2,
    type: 'Single Family',
    garage: true,
    leaseStatus: 'leased',
    leaseDate: '2024-06-01',
    matterports: [
      'https://my.matterport.com/show/?m=gXEhNcoGJh5&mls=1',
      'https://my.matterport.com/show/?m=b8gyzcC1SXt&mls=1'
    ]
  },
  masters1: {
    id: 'masters',
    slug: 'masters1',
    llcName: 'Masters 1 LLC',
    email: 'masters1@rksproperties.io',
    currentRent: 2200,
    yearBuilt: 1998,
    address: 'Masters Property',
    squareFeet: 1950,
    bedrooms: 3,
    bathrooms: 2,
    type: 'Single Family',
    garage: true,
    leaseStatus: 'leased',
    leaseDate: '2024-08-01',
    matterports: [
      'https://my.matterport.com/show/?m=atGMyRsLP1k&mls=1'
    ]
  },
  clinton1: {
    id: 'clinton',
    slug: 'clinton1',
    llcName: 'Clinton I LLC',
    email: 'clinton1@rksproperties.io',
    currentRent: 1800,
    yearBuilt: 2001,
    address: 'Clinton Property',
    squareFeet: 1650,
    bedrooms: 3,
    bathrooms: 1.5,
    type: 'Single Family',
    garage: false,
    leaseStatus: 'leased',
    leaseDate: '2024-05-15',
    matterports: [
      'https://my.matterport.com/show/?m=676mecfjrYZ&mls=1'
    ]
  },
  wyndham1: {
    id: 'wyndham',
    slug: 'wyndham1',
    llcName: 'Wyndham Meadows 1 LLC',
    email: 'wyndham1@rksproperties.io',
    currentRent: 2800,
    yearBuilt: 1992,
    address: '210 Wyndham Boulevard',
    squareFeet: 2400,
    bedrooms: 4,
    bathrooms: 2.5,
    type: 'Duplex',
    garage: true,
    leaseStatus: 'leased',
    leaseDate: '2024-07-01',
    matterports: [
      'https://my.matterport.com/show/?m=QNqo2fpYcCi&mls=1',
      'https://my.matterport.com/show/?m=74BirLs72nE&mls=1'
    ]
  },
  pinetrail1: {
    id: 'pinetrail',
    slug: 'pinetrail1',
    llcName: 'Pine Trail 1 LLC',
    email: 'pinetrail1@rksproperties.io',
    currentRent: 2100,
    yearBuilt: 2005,
    address: '505 Pine Trail Drive',
    squareFeet: 2000,
    bedrooms: 3,
    bathrooms: 2,
    type: 'Single Family',
    garage: true,
    leaseStatus: 'leased',
    leaseDate: '2024-09-01',
    matterports: [
      'https://my.matterport.com/show/?m=Mgb1AqrSXqm&mls=1',
      'https://my.matterport.com/show/?m=D63HaUe4Vzp&mls=1'
    ]
  }
};

export function getProperty(slug: string): Property | null {
  return properties[slug] || null;
}

export function getRentEstimate(currentRent: number): number {
  return Math.round(currentRent * 1.05);
}
