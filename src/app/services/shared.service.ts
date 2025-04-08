import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * @author Ganesh Pagare
 * @description
 * It currently manages the number of users in a team and allows other components
 */
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private _numberOfUsers = new BehaviorSubject<number>(0);
  numberOfUsers$ = this._numberOfUsers.asObservable();

  /**
   * Updates the current number of users.
   * @param length - The new number of users to be set.
   */
  setNumberOfUsers(length: number): void {
    this._numberOfUsers.next(length);
  }
}
