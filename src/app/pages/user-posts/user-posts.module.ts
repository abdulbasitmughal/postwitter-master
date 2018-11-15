import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UserPostService } from './user-posts.service';
import { SharedModule } from '@/shared/shared.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [UsersRoutingModule, SharedModule],
  providers: [UserPostService]
})
export class UserPostsModule {}
