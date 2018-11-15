import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PostCardComponent } from './components/post-card/post-card.component';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { RouterModule } from '@angular/router';
import { TimeAgoPipe } from 'time-ago-pipe';

@NgModule({
  declarations: [PostCardComponent, UserCardComponent, TimeAgoPipe],
  exports: [PostCardComponent, UserCardComponent, ReactiveFormsModule, CommonModule],
  imports: [RouterModule]
})
export class SharedModule {}
