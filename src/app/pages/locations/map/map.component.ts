import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, Subscription } from 'rxjs';
import { Location } from 'src/app/shared/models/location';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  
  @Input() dataFromParent?: Array<Location>;
  @Input() chosenMapId?: string;

  constructor(
    private sanitizer: DomSanitizer) {}

  sanitizedURL() {
    
    if (this.dataFromParent && this.chosenMapId) {
      
      const selectedUrl = 
        this.dataFromParent.filter(e => e.id == this.chosenMapId)[0].embedMapUrl
      return this.sanitizer.bypassSecurityTrustResourceUrl(selectedUrl);

    }
    return "";
  }
}
