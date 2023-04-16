import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../../../shared/services/comment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  
  @Input() dataFromParent: any;
  newComment:string = '';
  id: number = 0;
  

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.params.subscribe(params =>{
        this.id = params['id'];
    })
  }

  getExistingComments() {
    return this.commentService.getCommentsByLocationId(this.id);
  }
}
