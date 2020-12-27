import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(environment.url+'user');
  }

  getById(id: number) {
      return this.http.get(environment.url+'user/' + id);
  }

  create(user: User) {
    return this.http.post(environment.url+'user/AddUserToDB', user);
  }

  update(user: User) {
    return this.http.put(environment.url+'user/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(environment.url+'user/' + id);
  }
}