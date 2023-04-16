import { Component, Input } from '@angular/core';
import { MapService } from '../../../shared/services/map.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() dataFromParent: any;

  constructor(
    private mapService: MapService,
    private router: Router) {}

  listClick(id: number) {
    this.mapService.setData(id);
  }

  navigateToElement(id: number) {
    this.router.navigateByUrl('/location/' + id);
  }
}
