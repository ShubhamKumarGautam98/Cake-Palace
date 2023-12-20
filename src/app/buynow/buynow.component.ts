// Import necessary modules and services
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../models/user';
import { cake } from '../models/cake';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    
  ) {}

  ngOnInit() {
    if (!this.loginService.isUserLoggedIn) {
      this.router.navigate(['login']);
    } else {
       this.router.navigate(['order'])
     }
    }
}