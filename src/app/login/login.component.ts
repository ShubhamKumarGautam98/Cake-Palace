import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { email: "", password: "" };
  hidePassword: boolean = true;
  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService
  ) {}

  login() {
    this.userService.checkUseremailAndPassword(this.user.email, this.user.password).subscribe(
      (data) => {
        if (data.length === 1) {
          this.loginService.canLogin(data);
          this.showSnackBar('Login Success');
          this.router.navigateByUrl('viewallcakes');
        } else {
          this.userService.checkIfUserExists(this.user.email).subscribe(
            (data) => {
              if (data.length === 1) {
                this.showSnackBar('Password incorrect');
              } else {
                this.showSnackBar('Not a registered user');
                this.router.navigateByUrl('registration');
              }
            }
          );
        }
      }
    );
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds
      panelClass: ['custom-snackbar'] // Add your custom CSS class for styling
    });
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }
}
