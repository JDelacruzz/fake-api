import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable } from 'rxjs';
import { User } from '../interfaces/store.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseHttpService {
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
}
