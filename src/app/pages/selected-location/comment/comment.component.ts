import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommentService } from '../../../shared/services/comment.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Comment } from 'src/app/shared/models/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit, OnChanges {
  
  @Input() dataFromParent: any;
  id: string = '0';
  commentsForm = new FormGroup({
    comment: new FormControl('')
  });
  
  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute) {}

  ngOnInit() {

    this.route.params.subscribe(params =>{
        this.id = params['id'] as string;
    })
  }

  ngOnChanges() {
    //TODO: kommentek frissítése, observable-vel
  }

  getExistingComments() {
    return this.commentService.getCommentsByLocationId(this.id);
  }

  addComment() {

    this.commentService.create({
      id: 'id',
      email: 'example@ex.ex',
      comment: this.commentsForm.get('comment')?.value,
      date: new Date().getTime(),
      locationId: 'obj.locationId',
    } as Comment)
  }
}
