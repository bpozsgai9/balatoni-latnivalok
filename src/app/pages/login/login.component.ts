import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  loading = false;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private router: Router,
    private userService: UserService) {}
  
  loginUser() {

    this.userService.login(
      this.loginForm.get('email')?.value as string,
      this.loginForm.get('password')?.value as string
    ).then(cred => {

      console.log(cred);
      localStorage.setItem('userEmail', this.loginForm.get('email')?.value as string);
      this.router.navigateByUrl('/main');
      this.loading = false;

    }).catch(err => {

      console.error(err);
      this.loading = false;
    })
  }
}
