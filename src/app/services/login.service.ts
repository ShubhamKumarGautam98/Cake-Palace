import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 isAdminLoggedIn:boolean=false;
 isUserLoggedIn:boolean=false;
 username:string="";
 role:string="";
 email:string="";
  constructor() { }
  
  canLogin(data:any)
 {
     if(data[0].role=="user"){
      this.isUserLoggedIn=true;
      this.username=data[0].firstName
      this.email=data[0].emailId
     }
     else{
      this.isAdminLoggedIn=true;
      this.username=data[0].firstName;
      this.role=data[0].role;
      this.email=data[0].emailId
     }
  }
   canLogOut()
   {
     this.isAdminLoggedIn=false;
     this.isUserLoggedIn=false;
     this.username="";
     this.role="";
   }
}
