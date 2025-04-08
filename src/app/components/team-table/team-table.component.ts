import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TeamMembersService } from '../../services/team-members.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SharedService } from '../../services/shared.service';

/**
 * @author Ganesh Pagare
 * @description
 * TeamTableComponent displays a paginated, editable table of team members.
 * Includes edit functionality with reactive forms.
 */
@Component({
  selector: 'app-team-table',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './team-table.component.html',
  styleUrl: './team-table.component.css',
})
export class TeamTableComponent {
  public gridColumns: any[] = [];
  public gridData: any[] = [];
  public isLoading = false;
  public selectAll: boolean = false;
  public currentPage = 1;
  private pageSize = 10;
  public totalPages = 1;
  public paginatedData: any[] = [];
  public visiblePages: (number | string)[] = [];
  public showToast = false;
  public toastMessage = '';
  public toastType = 'success';
  editedMember: any = null;
  editForm!: FormGroup;

  constructor(
    private teamMembersService: TeamMembersService,
    private sharedService: SharedService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.teamMembersService.getTeamMembersData().subscribe(
      (data) => {
        this.gridColumns = data.grid_columns;
        this.gridData = data.grid_data.map((member: any) => ({
          ...member,
          isEdit: false,
        }));
        this.updatePaginatedData();
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  /**
   * Sends the number of team members to shared service.
   */
  private sendNumberOfUsers() {
    this.sharedService.setNumberOfUsers(this.gridData.length);
  }

  /**
   * Toggles selection for all checkboxes.
   */
  toggleAllSelection() {
    this.gridData.forEach((item) => {
      item.selected = this.selectAll;
    });
  }

  /**
   * Checks if all items are selected and updates the selectAll state.
   */
  checkIfAllSelected() {
    this.selectAll = this.gridData.every((item) => item.selected);
  }

  /**
   * Updates paginated data based on current page.
   * @private
   */
  private updatePaginatedData(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedData = this.gridData.slice(start, end);
    this.totalPages = Math.ceil(this.gridData.length / this.pageSize);
    this.updateVisiblePages();
    this.sendNumberOfUsers();
  }

  /**
   * Navigates to the specified page.
   * @param page - Page number to go to
   */
  goToPage(page: any): void {
    this.currentPage = page;
    this.updatePaginatedData();
  }

  /**
   * Navigates to the previous page.
   */
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedData();
    }
  }

  /**
   * Navigates to the next page.
   */
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedData();
    }
  }

  /**
   * Updates visible pagination numbers.
   * @private
   */
  private updateVisiblePages(): void {
    const pages: (number | string)[] = [];

    if (this.totalPages <= 3) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (this.currentPage <= 2) {
        pages.push(1, 2, '...', this.totalPages);
      } else if (this.currentPage >= this.totalPages - 2) {
        pages.push(
          1,
          '...',
          this.totalPages - 2,
          this.totalPages - 1,
          this.totalPages
        );
      } else {
        pages.push(
          1,
          '...',
          this.currentPage - 1,
          this.currentPage,
          this.currentPage + 1,
          '...',
          this.totalPages
        );
      }
    }

    this.visiblePages = pages;
  }

  /**
   * Opens edit popup and initializes form with selected member data.
   * @param member - Team member object
   */
  openEditPopup(member: any) {
    this.editedMember = member;
    this.editForm = this.fb.group({
      first_name: [member.name.first_name, Validators.required],
      last_name: [member.name.last_name, Validators.required],
      status: [member.status, Validators.required],
      role: [member.role, Validators.required],
    });
  }

  /**
   * Closes the edit popup and clears form.
   */
  closeEditPopup() {
    this.editedMember = null;
  }

  /**
   * Saves edited member data to the table and closes the popup.
   */
  saveEditedMember() {
    if (this.editedMember && this.editForm.valid) {
      const formValues = this.editForm.value;
      this.editedMember.name.first_name = formValues.first_name;
      this.editedMember.name.last_name = formValues.last_name;
      this.editedMember.status = formValues.status;
      this.editedMember.role = formValues.role;
      this.closeEditPopup();
    }
    this.showToastMessage('Member updated successfully', 'success');
  }

  /**
   * Deletes a row from the grid.
   * @param index - Index of the item in the paginated list
   */
  deleteRow(index: number) {
    const actualIndex = (this.currentPage - 1) * this.pageSize + index;
    this.gridData.splice(actualIndex, 1);
    this.updatePaginatedData();
    this.showToastMessage('Member deleted successfully', 'error');
  }

  /**
   * Shows toast with custom message and style.
   * @param message - Message to display
   * @param type - Type of toast ('success' or 'error')
   */
  showToastMessage(message: string, type: 'success' | 'error' = 'success') {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;

    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
}
