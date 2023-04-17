import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  create(user: User) {}

  getUserById(id: number) {}

  getUserByEmailAndPassword(email: string, password: string): User {
    
    const example: User = {
      id: '',
      email: 'example@ex.ex',
      username: 'example'
    };

    return example;
  }

  update(user: User) {}

  delete(id: number) {}
}
