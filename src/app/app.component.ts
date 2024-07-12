import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvestmentComponent } from "./investment/investment.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InvestmentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'investment-calculator';
}
