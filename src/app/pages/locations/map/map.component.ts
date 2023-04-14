import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MapService } from '../../../shared/services/map.service'
import { take } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  
  @Input() dataFromParent: any;
  sendedId:number = 1;

  constructor(
    private sanitizer: DomSanitizer,
    private mapService: MapService) {}
  
  ngOnInit(): void {
    
    //https://www.openstreetmap.org/search?query=Béke-sztúpa#map=17/47.96352/19.74543
    //TODO: hibát dob
    const sub = this.mapService.currentData.subscribe((data: number) => {
      this.sendedId = data;
    })
  }

  ngOnDestroy(): void {
    
  }

  sanitizedURL() {

    console.log(this.sendedId);
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.dataFromParent[this.sendedId].embedMapUrl);
  }
}
