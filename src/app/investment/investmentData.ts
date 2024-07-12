export interface InvestmentData {
  duration: number,
  amount: number,
  annualInvestment: number,
  returnRate:number,
}
export interface InvestmentResult {
    annualInvestment: number;
    interest: number;
    totalAmountInvested: number;
    totalInterest: number;
    valueEndOfYear: number;
    year: number;
  }