import { Component, OnChanges, signal, SimpleChanges } from '@angular/core';
import { DataformComponent } from "./dataform/dataform.component";
import { CurrencyPipe } from '@angular/common';
import { InvestmentData, InvestmentResult } from './investmentData';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-investment',
  standalone: true,
  imports: [DataformComponent,CurrencyPipe,FormsModule],
  templateUrl: './investment.component.html',
  styleUrl: './investment.component.css'
})
export class InvestmentComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    this.calculateInvestimentResults(this.investmentData);
  }
  investmentData!:InvestmentData;
  data!:InvestmentResult[];
  duration=signal(0);
  calculateInvestment(data:InvestmentData) {
    this.investmentData = data;
    this.duration.set(data.duration);
    this.calculateInvestimentResults(this.investmentData);
    console.log(data);
    
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
    // this.data.emit(this.investmentData);
    this.data = annualData;

  }

  counter(i: number) {
    return new Array(i);
}
}
