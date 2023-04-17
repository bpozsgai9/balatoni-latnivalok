import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private data = new BehaviorSubject('0')
  currentData = this.data.asObservable();

  constructor() { }

  setData(data: string) {
    this.data.next(data);
  }
}
