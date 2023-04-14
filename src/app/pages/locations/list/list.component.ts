import { Component, Input } from '@angular/core';
import { MapService } from '../../../shared/services/map.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() dataFromParent: any;

  constructor(private mapService: MapService) {}

  listClick(id: number) {
    this.mapService.setData(id);
  }
}
