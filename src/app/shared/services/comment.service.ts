import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  collectionName = 'Comments';

  constructor(
    private afs: AngularFirestore) { }

  create(comment: Comment) {
    
    comment.id = this.afs.createId();
    return this.afs.collection<Comment>(this.collectionName).doc(comment.id).set(comment);
  }

  getAll() {
    return this.afs.collection<Comment>(this.collectionName).valueChanges();
  }

  update(comment: Comment) {
    return this.afs.collection<Comment>(this.collectionName).doc(comment.id).set(comment);
  }

  delete(id: string) {
    return this.afs.collection<Comment>(this.collectionName).doc(id).delete();
  }

  getCommentsByLocationId(id: string) {
    
    return this.afs.collection<Comment>(
      this.collectionName,
      ref => ref.where('locationId', '==', id).orderBy('date', 'asc')
      ).valueChanges();
  }
}
