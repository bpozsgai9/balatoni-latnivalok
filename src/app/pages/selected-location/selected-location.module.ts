import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedLocationComponent } from './selected-location.component';
import { CommentComponent } from './comment/comment.component';
import { ViewerComponent } from './viewer/viewer.component';



@NgModule({
  declarations: [
    SelectedLocationComponent,
    CommentComponent,
    ViewerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SelectedLocationModule { }
