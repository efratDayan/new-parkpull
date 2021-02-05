import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {
  
  
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(environment.url+'user');
  }

  LoadUserDetails(userCode) {
      return this.http.get<User>(environment.url+'user/LoadUserDetails?userCode='+userCode );
  }

  create(user: User) {
    return this.http.post<number>(environment.url+'user/AddUserToDB', user);
  }

  update(user: User) {
    return this.http.post(environment.url+'user/UpdateUser',user );
  }

  findUser(name:string,password:string){
    const params = new HttpParams()
   .set('name', name)
   .set('password', password);
return this.http.get(environment.url+'user/FindUser',{params:params})
  }
  login(name: string) {
   return this.http.get<number>(environment.url+'user/GetUserCode?name='+name)
  }

  findUserForRegister(name: string) {
  return this.http.get(environment.url+'user/FindUserForRegister?name='+name)
  }

  delete(id: number) {
    return this.http.delete(environment.url+'user/' + id);
  }
}