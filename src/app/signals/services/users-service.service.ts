import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { User, UserData } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  private http= inject(HttpClient);
  private baseUrl:string='https://reqres.in/api/users';

  constructor() { }

  getUserById(id: number):Observable<UserData>{

    return this.http.get<User>( `${this.baseUrl}/${id}` )
    .pipe(
      map(response=> response.data),
      tap((r)=> console.log({r}))
    );
  }
}
