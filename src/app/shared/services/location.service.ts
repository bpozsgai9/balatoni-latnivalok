import { Injectable } from '@angular/core';
import { Location } from '../models/location';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage) { }

  collectionName = 'Locations';

  getAll() {
    console.log('Service called!');
    return this.afs.collection<Location>(this.collectionName, ref => ref.orderBy('name', 'asc').limit(20)
    ).valueChanges();
  }

  getImagesFromStorage(imageUrl: string) {
    return this.storage.ref(imageUrl).getDownloadURL();
  }
}
