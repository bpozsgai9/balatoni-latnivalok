import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

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
    
    this.userService.register(
      this.registerForm.get('email')?.value as string,
      this.registerForm.get('password')?.value as string
      ).then(cred => {

        console.log(cred);
        this.router.navigateByUrl('/login');
        this.loading = false;

      }).catch(err => {

        console.error(err);
        this.loading = false;
      })
  }
}
