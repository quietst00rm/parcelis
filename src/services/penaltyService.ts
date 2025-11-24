import { StatePenaltyData } from '@/types';

const MOCK_DATA: StatePenaltyData[] = [
  { stateName: "Alabama", stateCode: "AL", penaltyPerViolation: 1000 },
  { stateName: "Alaska", stateCode: "AK", penaltyPerViolation: 25000 },
  { stateName: "Arizona", stateCode: "AZ", penaltyPerViolation: 15000 },
  { stateName: "Arkansas", stateCode: "AR", penaltyPerViolation: 10000 },
  { stateName: "California", stateCode: "CA", penaltyPerViolation: 50000 },
  { stateName: "Colorado", stateCode: "CO", penaltyPerViolation: 1000 },
  { stateName: "Connecticut", stateCode: "CT", penaltyPerViolation: 50000 },
  { stateName: "Delaware", stateCode: "DE", penaltyPerViolation: 5000 },
  { stateName: "District of Columbia", stateCode: "DC", penaltyPerViolation: 1000 },
  { stateName: "Florida", stateCode: "FL", penaltyPerViolation: 10000 },
  { stateName: "Georgia", stateCode: "GA", penaltyPerViolation: 1000 },
  { stateName: "Hawaii", stateCode: "HI", penaltyPerViolation: 10000 },
  { stateName: "Idaho", stateCode: "ID", penaltyPerViolation: 2000 },
  { stateName: "Illinois", stateCode: "IL", penaltyPerViolation: 1000 },
  { stateName: "Indiana", stateCode: "IN", penaltyPerViolation: 500 },
  { stateName: "Iowa", stateCode: "IA", penaltyPerViolation: 5000 },
  { stateName: "Kansas", stateCode: "KS", penaltyPerViolation: 100000 },
  { stateName: "Kentucky", stateCode: "KY", penaltyPerViolation: 100000 },
  { stateName: "Louisiana", stateCode: "LA", penaltyPerViolation: 50000 },
  { stateName: "Maine", stateCode: "ME", penaltyPerViolation: 2000 },
  { stateName: "Maryland", stateCode: "MD", penaltyPerViolation: 10000 },
  { stateName: "Massachusetts", stateCode: "MA", penaltyPerViolation: 10000 },
  { stateName: "Michigan", stateCode: "MI", penaltyPerViolation: 50000 },
  { stateName: "Minnesota", stateCode: "MN", penaltyPerViolation: 3000 },
  { stateName: "Mississippi", stateCode: "MS", penaltyPerViolation: 500 },
  { stateName: "Missouri", stateCode: "MO", penaltyPerViolation: 10000 },
  { stateName: "Montana", stateCode: "MT", penaltyPerViolation: 5000 },
  { stateName: "Nebraska", stateCode: "NE", penaltyPerViolation: 1000 },
  { stateName: "Nevada", stateCode: "NV", penaltyPerViolation: 5000 },
  { stateName: "New Hampshire", stateCode: "NH", penaltyPerViolation: 2500 },
  { stateName: "New Jersey", stateCode: "NJ", penaltyPerViolation: 500 },
  { stateName: "New Mexico", stateCode: "NM", penaltyPerViolation: 1000 },
  { stateName: "New York", stateCode: "NY", penaltyPerViolation: 5000 },
  { stateName: "North Carolina", stateCode: "NC", penaltyPerViolation: 2500 },
  { stateName: "North Dakota", stateCode: "ND", penaltyPerViolation: 1000 },
  { stateName: "Ohio", stateCode: "OH", penaltyPerViolation: 2500 },
  { stateName: "Oklahoma", stateCode: "OK", penaltyPerViolation: 5000 },
  { stateName: "Oregon", stateCode: "OR", penaltyPerViolation: 25000 },
  { stateName: "Pennsylvania", stateCode: "PA", penaltyPerViolation: 1000 },
  { stateName: "Rhode Island", stateCode: "RI", penaltyPerViolation: 10000 },
  { stateName: "South Carolina", stateCode: "SC", penaltyPerViolation: 1000 },
  { stateName: "South Dakota", stateCode: "SD", penaltyPerViolation: 500 },
  { stateName: "Tennessee", stateCode: "TN", penaltyPerViolation: 1000 },
  { stateName: "Texas", stateCode: "TX", penaltyPerViolation: 10000 },
  { stateName: "Utah", stateCode: "UT", penaltyPerViolation: 2500 },
  { stateName: "Vermont", stateCode: "VT", penaltyPerViolation: 500 },
  { stateName: "Virginia", stateCode: "VA", penaltyPerViolation: 2500 },
  { stateName: "Washington", stateCode: "WA", penaltyPerViolation: 25000 },
  { stateName: "West Virginia", stateCode: "WV", penaltyPerViolation: 20000 },
  { stateName: "Wisconsin", stateCode: "WI", penaltyPerViolation: 5000 },
  { stateName: "Wyoming", stateCode: "WY", penaltyPerViolation: 10000 },
];

/**
 * Simulates a backend call to fetch penalty data.
 */
export async function getPenaltyData(): Promise<StatePenaltyData[]> {
  // Simulate network latency
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_DATA);
    }, 600);
  });
}
