import { Component } from '@angular/core';
import { TeamTableComponent } from "../team-table/team-table.component";

@Component({
  selector: 'app-team-members',
  standalone: true,
  imports: [TeamTableComponent],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.css'
})
export class TeamMembersComponent {

}
