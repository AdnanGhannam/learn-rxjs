import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(`http://localhost:5000/users`);
  }

  login(name: string, password: string) {
    return this.http.post<any>(`http://localhost:5000/login`, { name, password });
  }

  update(id: string, name: string, firstname: string, lastname: string, email: string ) {
    return this.http.put(`http://localhost:5000/users/${id}`, 
      { name, firstname, lastname, email }, 
      { headers: { "Authorization": `Bearer ${sessionStorage.getItem("token")}` }});
  }
}
