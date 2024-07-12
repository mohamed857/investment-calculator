import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData, InvestmentResult } from '../investmentData';

@Component({
  selector: 'app-dataform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dataform.component.html',
  styleUrl: './dataform.component.css'
})
export class DataformComponent {
  @Output() data = new EventEmitter<InvestmentData>();
  // investmentData = signal<InvestmentData>({ amount: 0, duration: 0, annualInvestment: 0, returnRate: 0 });
  investmentData! :InvestmentData;

  calculateInvestment() {
    this.data.emit(this.investmentData);

  }
  calculateInvestimentResults(investment: InvestmentData): void {
    const annualData: InvestmentResult[] = [];
    let investmentValue = investment.amount;

    for (let i = 0; i < investment.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (investment.returnRate / 100);
      investmentValue += interestEarnedInYear + investment.annualInvestment;
      const totalInterest =
        investmentValue -
        investment.annualInvestment * year -
        investment.amount;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: investment.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          investment.amount + investment.annualInvestment * year,
      });
    }

    // return annualData;
    this.data.emit(this.investmentData);

  }
}
