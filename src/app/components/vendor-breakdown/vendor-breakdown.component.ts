import { Component } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
@Component({
  selector: 'app-vendor-breakdown',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './vendor-breakdown.component.html',
  styleUrl: './vendor-breakdown.component.css',
})
export class VendorBreakdownComponent {
  barChartOptions: ChartOptions = { responsive: true };
  barChartLabels: string[] = [
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
  ];
  barChartData = [
    {
      data: [40, 50, 60, 45, 70, 80, 60, 55, 65, 75, 50, 60],
      label: 'Security Rating',
    },
  ];
}
