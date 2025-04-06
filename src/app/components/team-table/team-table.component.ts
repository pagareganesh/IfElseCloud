import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TeamMembersService } from '../../services/team-members.service';

@Component({
  selector: 'app-team-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-table.component.html',
  styleUrl: './team-table.component.css',
})
export class TeamTableComponent {
  // members = [
  //   { name: 'Olivia Rhye', status: 'Customer', role: 'Product Designer', emailPercent: 70, teams: ['Design', 'Product', 'Marketing'] },
  //   { name: 'Phoenix Baker', status: 'Churned', role: 'Product Manager', emailPercent: 60, teams: ['Design', 'Product', 'Marketing'] }
  // ];
  gridColumns: any[] = [];
  gridData: any[] = [];

  constructor(private teamMembersService: TeamMembersService) {}

  ngOnInit() {
    this.teamMembersService.getTeamMembersData().subscribe((data) => {
      this.gridColumns = data.grid_columns;
      this.gridData = data.grid_data;
      console.log(data)
    });
  }
}
