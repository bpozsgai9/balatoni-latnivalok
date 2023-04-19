import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private auth: AngularFireAuth,
    private afs: AngularFirestore) { }

  collectionName = 'Users';

  //AUTH
  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  isUserLoggedIn() {
    return this.auth.user;
  }

  //USER DATABASE
  create(user: User) {
    return this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
  }

  getAll() {

  }

  getUserById(id: number) {}

  update(user: User) {}

  delete(id: number) {}
}
