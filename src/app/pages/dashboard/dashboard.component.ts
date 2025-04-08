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
    TeamMembersComponent,
    VendorBreakdownComponent,
    VendorStatusComponent,
    NgChartsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
