import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LocationService } from 'src/app/shared/services/location.service';
import { Location } from '../../shared/models/location';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit, AfterViewInit {

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

  ngAfterViewInit(): void {
    alert('Üdvözöllek a BALATONE - Balatoni Látnivalók oldalán!\n\n' + 
    '🏖️⛵🌊\n\n' +
    'Mielőtt betölt az oldal, érdemes tudnod pár információt!\n\n' + 
    'Az főoldal két hasábra lesz osztva.\nBal oldalt egy helyszínlistát fogsz látni nevekkel ellátva és egy szem ikonnal (👁️).\n' +
    'Az ikonra való kattintással tudsz átnavigálni a helyszínhez tartozó részletekre.\n' + 
    'Ezeken a helyszíneken több információt is megtudhatsz az adott balatoni csodáról, illetve van lehetőséged:\n\b- kommentelni\n\b- kommentet törölni\n\b- módosítani is azt!\n\n' + 
    'Jobb oldalt pedig egy OpenStreetMap térképet.\nEz egy Google Map-hez hasonló ingyenes interaktív térkép, ez megjeleníti az adott helyszínt.\n\n' + 'Kellemes böngészést és szuper nyarat!\n\n' +
    '☀️😎👙');
  }

  loadClickedId(clickedId: string) {
    this.chosenId = clickedId;
    console.log('The id of the clicked in parent is: ' + this.chosenId);
  }
}
