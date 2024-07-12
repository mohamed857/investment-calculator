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
  
}
