import { Component, inject, } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  private breakpointObserver = inject(BreakpointObserver);

constructor( public loginService:LoginService){}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    
    logout() {
      this.loginService.isAdminLoggedIn = false;
      this.loginService.isUserLoggedIn = false;
      alert("You have successfully logged out");
      
    }
}

