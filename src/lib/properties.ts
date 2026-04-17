// Property data structure
export interface Property {
  id: string;
  slug: string;
  llcName: string;
  email: string;
  currentRent: number;
  yearBuilt: number;
  address: string;
  city: string;
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
    llcName: 'Lillie 1, LLC',
    email: 'lillie1@rksproperties.io',
    currentRent: 2400,
    yearBuilt: 1995,
    address: '3509 & 3513 Lillie Lane',
    city: 'Sachse',
    squareFeet: 2100,
    bedrooms: 2,
    bathrooms: 1.5,
    type: 'Duplex',
    garage: false,
    leaseStatus: 'leased',
    leaseDate: '2025-08-31',
    matterports: [
      'https://my.matterport.com/show/?m=gXEhNcoGJh5&mls=1',
      'https://my.matterport.com/show/?m=b8gyzcC1SXt&mls=1'
    ]
  },
  masters1: {
    id: 'masters',
    slug: 'masters1',
    llcName: 'Masters 1, LLC',
    email: 'masters1@rksproperties.io',
    currentRent: 2200,
    yearBuilt: 1998,
    address: '503 Masters Ave',
    city: 'Wylie',
    squareFeet: 1950,
    bedrooms: 3,
    bathrooms: 1,
    type: 'Single Family',
    garage: true,
    leaseStatus: 'leased',
    leaseDate: '2026-03-31',
    matterports: [
      'https://my.matterport.com/show/?m=atGMyRsLP1k&mls=1'
    ]
  },
  clinton1: {
    id: 'clinton',
    slug: 'clinton1',
    llcName: 'Clinton I, LLC',
    email: 'clinton1@rksproperties.io',
    currentRent: 1800,
    yearBuilt: 2001,
    address: '3107 Clinton St',
    city: 'Sachse',
    squareFeet: 1650,
    bedrooms: 3,
    bathrooms: 2,
    type: 'Single Family',
    garage: false,
    leaseStatus: 'leased',
    leaseDate: '2026-11-30',
    matterports: [
      'https://my.matterport.com/show/?m=676mecfjrYZ&mls=1'
    ]
  },
  wyndham1: {
    id: 'wyndham',
    slug: 'wyndham1',
    llcName: 'Wyndham Meadows 1, LLC',
    email: 'wyndham1@rksproperties.io',
    currentRent: 2800,
    yearBuilt: 1992,
    address: '210 & 212 Wyndham Boulevard',
    city: 'Wylie',
    squareFeet: 2400,
    bedrooms: 2,
    bathrooms: 2,
    type: 'Duplex',
    garage: true,
    leaseStatus: 'leased',
    leaseDate: '2025-12-31',
    matterports: [
      'https://my.matterport.com/show/?m=QNqo2fpYcCi&mls=1',
      'https://my.matterport.com/show/?m=74BirLs72nE&mls=1'
    ]
  },
  pinetrail1: {
    id: 'pinetrail',
    slug: 'pinetrail1',
    llcName: 'Pine Trail 1, LLC',
    email: 'pinetrail1@rksproperties.io',
    currentRent: 2100,
    yearBuilt: 2005,
    address: '505 & 507 Pine Trail Drive',
    city: 'Allen',
    squareFeet: 2000,
    bedrooms: 2,
    bathrooms: 2,
    type: 'Duplex',
    garage: false,
    leaseStatus: 'leased',
    leaseDate: '2026-01-31',
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
  return currentRent;
}
