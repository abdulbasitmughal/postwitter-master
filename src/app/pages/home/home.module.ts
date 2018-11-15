import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewPostFormComponent } from './components/post-form/post-form.component';
import { PostService } from './post.service';

@NgModule({
  declarations: [HomeComponent, NewPostFormComponent],
  imports: [HomeRoutingModule, SharedModule],
  providers: [PostService]
})
export class HomeModule {}
