import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommentService } from '../../../shared/services/comment.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Comment } from 'src/app/shared/models/comment';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit, OnChanges {
  
  locationId?: string;
  commentsForm = new FormGroup({
    comment: new FormControl('')
  });
  existingComments?: Array<Comment>;
  
  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute,
    private auth: AngularFireAuth) {}

  ngOnInit() {

    this.route.params.subscribe(params =>{
        this.locationId = params['id'] as string;
    })

    this.commentService.getCommentsByLocationId(this.locationId as string).subscribe(comments => {
      this.existingComments = comments;
    })
  }

  ngOnChanges() {
    this.commentService.getCommentsByLocationId(this.locationId as string).subscribe(comments => {
      this.existingComments = comments;
    })
  }

  addComment() {

    this.commentService.create({
      id: '',
      email: localStorage.getItem('userEmail'),
      comment: this.commentsForm.get('comment')?.value,
      date: new Date().getTime(),
      locationId: this.locationId

    } as Comment).then(_ => {

    }).catch(error => {

      console.error(error);

    })
  }
}
