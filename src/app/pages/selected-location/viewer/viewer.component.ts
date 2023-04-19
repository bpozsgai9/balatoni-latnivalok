import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  @Input() dataFromParent: any;
  id?: string;

  constructor(private route: ActivatedRoute) {}

  //TODO: nem tölti be!
  ngOnInit() {
    this.route.params.subscribe(params =>{
        this.id = params['id'];
    })
  }

  getName() {
    if (this.dataFromParent) {
      return this.dataFromParent[this.id].name;
    }
    return 'Unknown';
  }

  getLocation() {
    if (this.dataFromParent) {
      return this.dataFromParent[this.id].location;
    }
    return 'Unknown';
  }

  getDescription() {
    if (this.dataFromParent) {
      return this.dataFromParent[this.id].description;
    }
    return 'Unknown';
  }

  getImg() {
    if (this.dataFromParent) {
      return this.dataFromParent[this.id].img;
    }
    return 'Unknown';
  }
}
