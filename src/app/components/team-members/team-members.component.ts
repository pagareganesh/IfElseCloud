import { Component } from '@angular/core';
import { TeamTableComponent } from '../team-table/team-table.component';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-team-members',
  standalone: true,
  imports: [TeamTableComponent],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.css',
})
export class TeamMembersComponent {
  numberOfUsers!: number;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.numberOfUsers$.subscribe((length) => {
      this.numberOfUsers = length;
    });
  }
}
