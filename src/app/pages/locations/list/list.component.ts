import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() dataFromParent: any;
  @Output() clickedIdEmmitter = new EventEmitter<string>();

  constructor(
    private router: Router) {}
  
  ngOnInit(): void {
    console.log('Database data from parent arrived: ' + this.dataFromParent);
  }

  listClick(id: string) {
    this.clickedIdEmmitter.emit(id);
  }

  navigateToElement(id: string) {
    this.router.navigateByUrl('/location/' + id);
  }


}
