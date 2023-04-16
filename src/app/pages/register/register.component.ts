import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  loading = false;
  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router) {}

  register() {
    this.router.navigateByUrl('/login');
  }
}
