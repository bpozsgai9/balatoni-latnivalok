import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  loading = false;
  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router) {}
  
  login() {
    this.router.navigateByUrl('/main');
  }
}
