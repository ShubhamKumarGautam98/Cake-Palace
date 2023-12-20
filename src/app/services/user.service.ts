import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient:HttpClient) { }

  addUser(event:any):Observable<any>{
    return this.httpClient.post<any>("http://localhost:3000/users",event);
  }
  
  checkIfUserExists(email:String){
    alert("service: "+email);
    return this.httpClient.get<User[]>("http://localhost:3000/users?email="+email);
  }

  checkUseremailAndPassword(emailid:String,password:String){
    return this.httpClient.get<User[]>("http://localhost:3000/users?emailid="+emailid+"&password="+password);
  }
  getuser(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:3000/users");
}
}