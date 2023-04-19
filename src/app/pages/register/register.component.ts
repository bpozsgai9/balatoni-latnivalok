import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

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

        //SAVE TO DATABASE
        const user: User = {
          id: cred.user?.uid as string,
          email: this.registerForm.get('email')?.value as string,
          username: this.registerForm.get('email')?.value?.split('@')[0] as string
        }
        
        this.userService.create(user)
        .then(_ => {
            console.log('User added successfully!');
        
        }).catch(error => {

          console.error(error);

        });
        //END

        this.router.navigateByUrl('/login');
        this.loading = false;

      }).catch(err => {

        console.error(err);
        this.loading = false;
      })
  }
}
