import { StatePenaltyData } from '@/types';

const MOCK_DATA: StatePenaltyData[] = [
  { stateName: "Alabama", stateCode: "AL", penaltyPerViolation: 1000, statuteCode: "Ala. Code §27-12A-5" },
  { stateName: "Alaska", stateCode: "AK", penaltyPerViolation: 25000, statuteCode: "Alaska Stat. §21.27.440" },
  { stateName: "Arizona", stateCode: "AZ", penaltyPerViolation: 15000, statuteCode: "Ariz. Rev. Stat. §20-401.06" },
  { stateName: "Arkansas", stateCode: "AR", penaltyPerViolation: 10000, statuteCode: "Ark. Code §23-64-407" },
  { stateName: "California", stateCode: "CA", penaltyPerViolation: 50000, statuteCode: "Cal. Ins. Code §1633" },
  { stateName: "Colorado", stateCode: "CO", penaltyPerViolation: 1000, statuteCode: "Colo. Rev. Stat. §10-3-104" },
  { stateName: "Connecticut", stateCode: "CT", penaltyPerViolation: 50000, statuteCode: "Conn. Gen. Stat. §38a-272" },
  { stateName: "Delaware", stateCode: "DE", penaltyPerViolation: 5000, statuteCode: "Del. Code §2101(a)" },
  { stateName: "District of Columbia", stateCode: "DC", penaltyPerViolation: 1000, statuteCode: "D.C. Code §31-2502.03" },
  { stateName: "Florida", stateCode: "FL", penaltyPerViolation: 10000, statuteCode: "Fla. Stat. §626.621" },
  { stateName: "Georgia", stateCode: "GA", penaltyPerViolation: 1000, statuteCode: "Ga. Code §33-23-22" },
  { stateName: "Hawaii", stateCode: "HI", penaltyPerViolation: 10000, statuteCode: "Haw. Rev. Stat. §431:2-312" },
  { stateName: "Idaho", stateCode: "ID", penaltyPerViolation: 2000, statuteCode: "Idaho Code §41-1017" },
  { stateName: "Illinois", stateCode: "IL", penaltyPerViolation: 1000, statuteCode: "215 ILCS 5/445" },
  { stateName: "Indiana", stateCode: "IN", penaltyPerViolation: 500, statuteCode: "Ind. Code §27-1-17-2" },
  { stateName: "Iowa", stateCode: "IA", penaltyPerViolation: 5000, statuteCode: "Iowa Code §505.8" },
  { stateName: "Kansas", stateCode: "KS", penaltyPerViolation: 100000, statuteCode: "Kan. Stat. §40-2404" },
  { stateName: "Kentucky", stateCode: "KY", penaltyPerViolation: 100000, statuteCode: "Ky. Rev. Stat. §304.47-055" },
  { stateName: "Louisiana", stateCode: "LA", penaltyPerViolation: 50000, statuteCode: "La. Rev. Stat. §22:1555" },
  { stateName: "Maine", stateCode: "ME", penaltyPerViolation: 2000, statuteCode: "24-A M.R.S. §601" },
  { stateName: "Maryland", stateCode: "MD", penaltyPerViolation: 10000, statuteCode: "Md. Code, Ins. §4-205" },
  { stateName: "Massachusetts", stateCode: "MA", penaltyPerViolation: 10000, statuteCode: "Mass. Gen. Laws ch. 175 §162G" },
  { stateName: "Michigan", stateCode: "MI", penaltyPerViolation: 50000, statuteCode: "Mich. Comp. Laws §500.479" },
  { stateName: "Minnesota", stateCode: "MN", penaltyPerViolation: 3000, statuteCode: "Minn. Stat. §60A.14" },
  { stateName: "Mississippi", stateCode: "MS", penaltyPerViolation: 500, statuteCode: "Miss. Code §83-5-33" },
  { stateName: "Missouri", stateCode: "MO", penaltyPerViolation: 10000, statuteCode: "Mo. Rev. Stat. §374.045" },
  { stateName: "Montana", stateCode: "MT", penaltyPerViolation: 5000, statuteCode: "Mont. Code §33-3-502" },
  { stateName: "Nebraska", stateCode: "NE", penaltyPerViolation: 1000, statuteCode: "Neb. Rev. Stat. §44-1601" },
  { stateName: "Nevada", stateCode: "NV", penaltyPerViolation: 5000, statuteCode: "Nev. Rev. Stat. §680B.030" },
  { stateName: "New Hampshire", stateCode: "NH", penaltyPerViolation: 2500, statuteCode: "N.H. Rev. Stat. §402-B:3" },
  { stateName: "New Jersey", stateCode: "NJ", penaltyPerViolation: 500, statuteCode: "N.J. Stat. §17:22A-28" },
  { stateName: "New Mexico", stateCode: "NM", penaltyPerViolation: 1000, statuteCode: "N.M. Stat. §59A-2-9.2" },
  { stateName: "New York", stateCode: "NY", penaltyPerViolation: 5000, statuteCode: "N.Y. Ins. Law §1102" },
  { stateName: "North Carolina", stateCode: "NC", penaltyPerViolation: 2500, statuteCode: "N.C. Gen. Stat. §58-2-69" },
  { stateName: "North Dakota", stateCode: "ND", penaltyPerViolation: 1000, statuteCode: "N.D. Cent. Code §26.1-02-27" },
  { stateName: "Ohio", stateCode: "OH", penaltyPerViolation: 2500, statuteCode: "Ohio Rev. Code §3999.04" },
  { stateName: "Oklahoma", stateCode: "OK", penaltyPerViolation: 5000, statuteCode: "Okla. Stat. tit. 36 §1402" },
  { stateName: "Oregon", stateCode: "OR", penaltyPerViolation: 25000, statuteCode: "Or. Rev. Stat. §746.240" },
  { stateName: "Pennsylvania", stateCode: "PA", penaltyPerViolation: 1000, statuteCode: "40 Pa. Stat. §1007" },
  { stateName: "Rhode Island", stateCode: "RI", penaltyPerViolation: 10000, statuteCode: "R.I. Gen. Laws §27-4-11" },
  { stateName: "South Carolina", stateCode: "SC", penaltyPerViolation: 1000, statuteCode: "S.C. Code §38-2-10" },
  { stateName: "South Dakota", stateCode: "SD", penaltyPerViolation: 500, statuteCode: "S.D. Codified Laws §58-4-1" },
  { stateName: "Tennessee", stateCode: "TN", penaltyPerViolation: 1000, statuteCode: "Tenn. Code §56-6-103" },
  { stateName: "Texas", stateCode: "TX", penaltyPerViolation: 10000, statuteCode: "Tex. Ins. Code §101.052" },
  { stateName: "Utah", stateCode: "UT", penaltyPerViolation: 2500, statuteCode: "Utah Code §31A-2-308" },
  { stateName: "Vermont", stateCode: "VT", penaltyPerViolation: 500, statuteCode: "8 V.S.A. §4724" },
  { stateName: "Virginia", stateCode: "VA", penaltyPerViolation: 2500, statuteCode: "Va. Code §38.2-1040" },
  { stateName: "Washington", stateCode: "WA", penaltyPerViolation: 25000, statuteCode: "Wash. Rev. Code §48.15.023" },
  { stateName: "West Virginia", stateCode: "WV", penaltyPerViolation: 20000, statuteCode: "W. Va. Code §33-3-14" },
  { stateName: "Wisconsin", stateCode: "WI", penaltyPerViolation: 5000, statuteCode: "Wis. Stat. §601.64" },
  { stateName: "Wyoming", stateCode: "WY", penaltyPerViolation: 10000, statuteCode: "Wyo. Stat. §26-2-110" },
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
