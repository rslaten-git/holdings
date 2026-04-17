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
  type: string; // "Single Family" or "Half Duplex"
  garage: boolean;
  estimatedRent: number;
  leaseStatus: 'occupied' | 'available';
  leaseEnd?: string; // Format: "Month YYYY"
  description?: string;
  matterports?: string[];
  unit?: string; // "A" or "B" for duplexes
}

// Properties by door/unit - 8 total
export const properties: Record<string, Property> = {
  lillie_3509: {
    id: 'lillie-3509',
    slug: 'lillie-3509',
    llcName: 'RKS Properties - Lillie 1, LLC',
    email: 'lillie1@rksproperties.io',
    address: '3509 Lillie Lane',
    city: 'Sachse',
    state: 'TX',
    zip: '75048',
    squareFeet: 1050,
    bedrooms: 2,
    bathrooms: 1.5,
    type: 'Half Duplex',
    garage: false,
    estimatedRent: 1800,
    leaseStatus: 'occupied',
    leaseEnd: 'Aug 2026',
    unit: 'A',
    matterports: ['https://my.matterport.com/show/?m=gXEhNcoGJh5&mls=1']
  },
  lillie_3513: {
    id: 'lillie-3513',
    slug: 'lillie-3513',
    llcName: 'RKS Properties - Lillie 1, LLC',
    email: 'lillie1@rksproperties.io',
    address: '3513 Lillie Lane',
    city: 'Sachse',
    state: 'TX',
    zip: '75048',
    squareFeet: 1050,
    bedrooms: 2,
    bathrooms: 1.5,
    type: 'Half Duplex',
    garage: false,
    estimatedRent: 1800,
    leaseStatus: 'occupied',
    leaseEnd: 'Aug 2026',
    unit: 'B',
    matterports: ['https://my.matterport.com/show/?m=b8gyzcC1SXt&mls=1']
  },
  masters_503: {
    id: 'masters-503',
    slug: 'masters-503',
    llcName: 'RKS Properties - Masters 1, LLC',
    email: 'masters1@rksproperties.io',
    address: '503 Masters Ave',
    city: 'Wylie',
    state: 'TX',
    zip: '75098',
    squareFeet: 1950,
    bedrooms: 3,
    bathrooms: 1,
    type: 'Single Family',
    garage: true,
    estimatedRent: 2200,
    leaseStatus: 'occupied',
    leaseEnd: 'Mar 2027',
    matterports: ['https://my.matterport.com/show/?m=atGMyRsLP1k&mls=1']
  },
  clinton_3107: {
    id: 'clinton-3107',
    slug: 'clinton-3107',
    llcName: 'RKS Properties - Clinton I, LLC',
    email: 'clinton1@rksproperties.io',
    address: '3107 Clinton St',
    city: 'Sachse',
    state: 'TX',
    zip: '75048',
    squareFeet: 1650,
    bedrooms: 3,
    bathrooms: 2,
    type: 'Single Family',
    garage: false,
    estimatedRent: 1800,
    leaseStatus: 'occupied',
    leaseEnd: 'Nov 2026',
    matterports: ['https://my.matterport.com/show/?m=676mecfjrYZ&mls=1']
  },
  wyndham_210: {
    id: 'wyndham-210',
    slug: 'wyndham-210',
    llcName: 'RKS Properties - Wyndham Meadows 1, LLC',
    email: 'wyndham1@rksproperties.io',
    address: '210 Wyndham Boulevard',
    city: 'Wylie',
    state: 'TX',
    zip: '75098',
    squareFeet: 1200,
    bedrooms: 2,
    bathrooms: 2,
    type: 'Half Duplex',
    garage: true,
    estimatedRent: 1400,
    leaseStatus: 'occupied',
    leaseEnd: 'Dec 2025',
    unit: 'A',
    matterports: ['https://my.matterport.com/show/?m=QNqo2fpYcCi&mls=1']
  },
  wyndham_212: {
    id: 'wyndham-212',
    slug: 'wyndham-212',
    llcName: 'RKS Properties - Wyndham Meadows 1, LLC',
    email: 'wyndham1@rksproperties.io',
    address: '212 Wyndham Boulevard',
    city: 'Wylie',
    state: 'TX',
    zip: '75098',
    squareFeet: 1200,
    bedrooms: 2,
    bathrooms: 2,
    type: 'Half Duplex',
    garage: true,
    estimatedRent: 1400,
    leaseStatus: 'occupied',
    leaseEnd: 'Dec 2025',
    unit: 'B',
    matterports: ['https://my.matterport.com/show/?m=74BirLs72nE&mls=1']
  },
  pinetrail_505: {
    id: 'pinetrail-505',
    slug: 'pinetrail-505',
    llcName: 'RKS Properties - Pine Trail 1, LLC',
    email: 'pinetrail1@rksproperties.io',
    address: '505 Pine Trail Drive',
    city: 'Allen',
    state: 'TX',
    zip: '75002',
    squareFeet: 1000,
    bedrooms: 2,
    bathrooms: 2,
    type: 'Half Duplex',
    garage: false,
    estimatedRent: 1050,
    leaseStatus: 'occupied',
    leaseEnd: 'Jan 2027',
    unit: 'A',
    matterports: ['https://my.matterport.com/show/?m=Mgb1AqrSXqm&mls=1']
  },
  pinetrail_507: {
    id: 'pinetrail-507',
    slug: 'pinetrail-507',
    llcName: 'RKS Properties - Pine Trail 1, LLC',
    email: 'pinetrail1@rksproperties.io',
    address: '507 Pine Trail Drive',
    city: 'Allen',
    state: 'TX',
    zip: '75002',
    squareFeet: 1000,
    bedrooms: 2,
    bathrooms: 2,
    type: 'Half Duplex',
    garage: false,
    estimatedRent: 1050,
    leaseStatus: 'occupied',
    leaseEnd: 'Jan 2027',
    unit: 'B',
    matterports: ['https://my.matterport.com/show/?m=D63HaUe4Vzp&mls=1']
  }
};

export function getProperty(slug: string): Property | null {
  return properties[slug] || null;
}
