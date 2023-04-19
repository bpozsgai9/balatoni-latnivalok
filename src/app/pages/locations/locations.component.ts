import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/shared/services/location.service';
import { Location } from '../../shared/models/location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  data?: Array<Location>;
  chosenId?: string;
  
  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    
    this.locationService.getAll().subscribe(
      data => {
        this.data = data;
        this.chosenId = this.data[0].id;

        console.log("Data from root: " + this.data);
        console.log('The basic id is: ' + this.chosenId);

      }, error => {
        console.error('Error in subscription of locationService.getAll()!\n' + error)
      });
  }

  loadClickedId(clickedId: string) {
    this.chosenId = clickedId;
    console.log('The id of the clicked in parent is: ' + this.chosenId);
  }
}
