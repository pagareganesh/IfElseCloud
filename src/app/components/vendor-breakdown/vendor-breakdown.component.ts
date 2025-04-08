import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
@Component({
  selector: 'app-vendor-breakdown',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './vendor-breakdown.component.html',
  styleUrl: './vendor-breakdown.component.css',
})
export class VendorBreakdownComponent {
  barChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Months',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        ticks: {
          padding: 20,
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Security Rating',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
        ticks: {
          stepSize: 20,
        },
        grid: {},
      },
    },
  };

  barChartData: ChartData<'bar'> = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Vendor A',
        data: [20, 30, 25, 18, 22, 28, 26, 24, 27, 30, 33, 29],
        backgroundColor: '#8b5cf6',
      },
      {
        label: 'Vendor B',
        data: [15, 25, 20, 14, 18, 22, 21, 20, 22, 26, 28, 25],
        backgroundColor: '#a78bfa',
      },
      {
        label: 'Vendor C',
        data: [10, 20, 15, 12, 14, 18, 17, 16, 18, 20, 22, 19],
        backgroundColor: '#e5e7eb',
      },
    ],
  };
}
