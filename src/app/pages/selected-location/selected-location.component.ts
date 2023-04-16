import { Component } from '@angular/core';
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: 'app-selected-location',
  templateUrl: './selected-location.component.html',
  styleUrls: ['./selected-location.component.scss']
})
export class SelectedLocationComponent {
  
  data = this.locationService.getAll();
  
  constructor(private locationService: LocationService) {}
}
