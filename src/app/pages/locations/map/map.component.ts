import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MapService } from '../../../shared/services/map.service'
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  
  @Input() dataFromParent: any;
  sendedId:string = '0';
  
  mapSubscription?: Subscription;
  mapObservation?: Observable<string>;

  constructor(
    private sanitizer: DomSanitizer,
    private mapService: MapService) {}
  
  ngOnInit(): void {
    
    this.mapObservation = this.mapService.currentData;
    this.mapSubscription = this.mapObservation
      .subscribe({
        next: (data: string) => {
          this.sendedId = data;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

  ngOnDestroy(): void {
    this.mapSubscription?.unsubscribe();
  }

  sanitizedURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.dataFromParent[this.sendedId].embedMapUrl);
  }
}
