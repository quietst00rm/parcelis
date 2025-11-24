export interface StatePenaltyData {
  stateName: string;
  stateCode: string;
  penaltyPerViolation: number;
}

export interface CalculationResult {
  daily: number;
  monthly: number;
  yearly: number;
}
