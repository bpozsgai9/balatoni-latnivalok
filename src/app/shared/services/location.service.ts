import { Injectable } from '@angular/core';
import { Location } from '../models/location';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private afs: AngularFirestore) { }

  collectionName = 'Locations';

  getAll() {
    console.log('Service called!');
    return this.afs.collection<Location>(this.collectionName).valueChanges();
  }
}
