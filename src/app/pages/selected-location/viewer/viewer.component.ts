import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  @Input() dataFromParent: any;
  id: string = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.params.subscribe(params =>{
        this.id = params['id'];
    })
  }

  getName() {
    return this.dataFromParent[this.id].name;
  }

  getLocation() {
    return this.dataFromParent[this.id].location;
  }

  getDescription() {
    return this.dataFromParent[this.id].description;
  }

  getImg() {
    return "assets/" + this.dataFromParent[this.id].img;
  }
}
