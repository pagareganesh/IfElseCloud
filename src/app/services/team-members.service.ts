import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * @author Ganesh Pagare
 * @description
 * TeamMembersService handles all HTTP requests related to fetching
 * team members data from the backend API.
 */
@Injectable({
  providedIn: 'root',
})
export class TeamMembersService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  /**
   * Fetches team members data from the server.
   * @returns An Observable containing the API response with grid columns and data.
   */
  getTeamMembersData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
