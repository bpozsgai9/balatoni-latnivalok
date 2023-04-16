import { Component } from '@angular/core';
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {

  data = this.locationService.getAll();
  
  constructor(private locationService: LocationService) {}
}
