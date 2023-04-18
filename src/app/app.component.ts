import { Component, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'balatoni-latnivalok';
  loggedInUser?: firebase.default.User | null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.isUserLoggedIn().subscribe(user => {
      
      this.loggedInUser = user;
      console.log(this.loggedInUser);
      localStorage.setItem('user', JSON.stringify(this.loggedInUser))
    
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
  }

}
