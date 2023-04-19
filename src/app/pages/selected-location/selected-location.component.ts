import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/shared/services/location.service';
import { Location } from '../../shared/models/location';

@Component({
  selector: 'app-selected-location',
  templateUrl: './selected-location.component.html',
  styleUrls: ['./selected-location.component.scss']
})
export class SelectedLocationComponent implements OnInit {

  data?: Array<Location>;

  ngOnInit(): void {
    
    this.locationService.getAll().subscribe(
      data => {
        this.data = data;

        console.log("Data from root: " + this.data);

      }, error => {
        console.error('Error in subscription of locationService.getAll()!\n' + error)
      });
  }
  
  constructor(private locationService: LocationService) {}
}
