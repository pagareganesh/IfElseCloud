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
  public doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: '75%',
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      {
        data: [240, 60],
        backgroundColor: ['#7c3aed', '#e5e7eb'],
        borderWidth: 0,
        borderRadius: 15,
        hoverOffset: 4,
        circumference: 180,
        rotation: 270,
      },
    ],
  };
}
