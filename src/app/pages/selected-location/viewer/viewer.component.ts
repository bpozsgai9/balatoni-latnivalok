import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../../../shared/models/location'
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  @Input() dataFromParent?: Array<Location>;
  id?: string;
  loadedImg?: string;

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationService) {}

  ngOnInit() {
    
    this.route.params.subscribe(params =>{
      this.id = params['id'];
      
      if (this.dataFromParent) {
        const url = this.dataFromParent.filter(e => e.id == this.id)[0].img;
        this.locationService.getImagesFromStorage(url).subscribe(data => {
          this.loadedImg = data;
        });
      }
    });
  }

  getName() {
    if (this.dataFromParent) {

      return this.dataFromParent.filter(e => e.id == this.id)[0].name;
    }
    return 'Unknown';
  }

  getLocation() {
    if (this.dataFromParent) {
      return this.dataFromParent.filter(e => e.id == this.id)[0].location;
    }
    return 'Unknown';
  }

  getDescription() {
    if (this.dataFromParent) {
      return this.dataFromParent.filter(e => e.id == this.id)[0].description;
    }
    return 'Unknown';
  }

  getImg() {

    return this.loadedImg;
  }
}
