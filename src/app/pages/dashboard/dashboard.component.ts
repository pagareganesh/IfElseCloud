import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { TeamMembersComponent } from '../../components/team-members/team-members.component';
import { VendorBreakdownComponent } from '../../components/vendor-breakdown/vendor-breakdown.component';
import { VendorStatusComponent } from '../../components/vendor-status/vendor-status.component';
import { ChartData, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    TeamMembersComponent,
    VendorBreakdownComponent,
    VendorStatusComponent,
    NgChartsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  // Vendor Breakdown (Bar Chart)
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {},
      y: {
        beginAtZero: true,
      },
    },
  };

  public barChartLabels: string[] = [
    'Vendor A',
    'Vendor B',
    'Vendor C',
    'Vendor D',
  ];
  public barChartData: ChartData<'bar'> = {
    labels: this.barChartLabels,
    datasets: [
      {
        data: [45, 67, 80, 50],
        backgroundColor: ['#36a2eb', '#4bc0c0', '#ff6384', '#ffcd56'],
      },
    ],
  };


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
