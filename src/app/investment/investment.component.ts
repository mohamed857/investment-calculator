import { Component, signal } from '@angular/core';
import { DataformComponent } from "./dataform/dataform.component";
import { CurrencyPipe } from '@angular/common';
import { InvestmentData } from './investmentData';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-investment',
  standalone: true,
  imports: [DataformComponent,CurrencyPipe,FormsModule],
  templateUrl: './investment.component.html',
  styleUrl: './investment.component.css'
})
export class InvestmentComponent {
  investmentData!:InvestmentData;
  duration=signal(0);
  calculateInvestment(data:InvestmentData) {
    this.investmentData = data;
    this.duration.set(data.duration);
  }
  counter(i: number) {
    return new Array(i);
}
}
