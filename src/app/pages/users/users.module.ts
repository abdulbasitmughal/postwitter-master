import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';
import { SharedModule } from '@/shared/shared.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [UsersRoutingModule, SharedModule],
  providers: [UsersService]
})
export class UsersModule {}
