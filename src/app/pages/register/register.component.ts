import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  loading = false;
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private router: Router,
    private userService: UserService) {}

  registerUser() {
    
    //1
    this.userService.create({
      id: '',
      email: this.registerForm.get('email')?.value,
      username: this.registerForm.get('email')?.value?.split('@')[0]
    } as User);

    //2
    this.router.navigateByUrl('/login');
  }
}
