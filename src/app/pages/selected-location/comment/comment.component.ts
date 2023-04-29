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
  
  locationId?: string;

  existingComments?: Array<Comment>;

  commentsForm = new FormGroup({
    comment: new FormControl('')
  });
  
  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute) {}

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

    if (this.commentsForm.get('comment')?.value != null && 
    this.commentsForm.get('comment')?.value != '') {
      this.commentService.create({
        id: '',
        email: localStorage.getItem('userEmail'),
        comment: this.commentsForm.get('comment')?.value,
        date: new Date().getTime(),
        locationId: this.locationId
  
      } as Comment).then(_ => {
        this.commentsForm.get('comment')?.setValue('');
      }).catch(error => {
  
        console.error(error);
  
      })
    } else {
      alert('A kommentmezőt nem hagyhatod üresen!');
    }
  }

  deleteComment(commentId: string) {
    this.commentService.delete(commentId);
  }

  updateComment(commentId: string) {

    let newComment = prompt('Új komment: ');
    if (newComment != null && newComment != '') {
      
      alert('Biztos megváltoztatod az általad kiválasztott kommentet, a következő tartalomra? \n"' + newComment + '"')

      this.commentService.update({
        id: commentId,
        email: localStorage.getItem('userEmail'),
        comment: newComment,
        date: new Date().getTime(),
        locationId: this.locationId
  
      } as Comment).then(_ => {
  
      }).catch(error => {
  
        console.error(error);
  
      })
    } else {
      alert('A kommentmezőt nem hagyhatod üresen!');
    }
  }
}
