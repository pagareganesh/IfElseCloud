import { Component } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-vendor-status',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './vendor-status.component.html',
  styleUrl: './vendor-status.component.css',
})
export class VendorStatusComponent {
  // Monitor (Doughnut Chart)
  public doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Active', 'Inactive'],
    datasets: [
      {
        data: [85, 15],
        backgroundColor: ['#4caf50', '#e0e0e0'],
        borderWidth: 0,
      },
    ],
  };
}
