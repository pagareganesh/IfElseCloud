import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeamMembersService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getTeamMembersData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
