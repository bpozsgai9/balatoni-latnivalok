import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  constructor() { }

  data: Array<Comment> = Array(
    {
      id: '0',
      email: 'kukac@ku.ku',
      comment: 'Imádtam ezt a helyet!',
      date: 1681306012049,
      locationId: '0'
    },
    {
      id: '1',
      email: 'kukac@ku.ku',
      comment: 'A nyáron voltunk itt!',
      date: 1681239490589,
      locationId: '0'
    },
    {
      id: '2',
      email: 'kukac@ku.ku',
      comment: 'Itt még nem voltam.',
      date: 0,
      locationId: '1'
    },
  );

  getAll() {
    return this.data;
  }

  getCommentsByLocationId(id: string) {
    return this.data.filter(obj => obj.locationId == id).sort();
  }

  create(comment: Comment) {

    console.log(comment)
  }

  update(comment: Comment) {

  }

  delete(id: string) {

  }
}
