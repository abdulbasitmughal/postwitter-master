import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { PostModel } from '@/shared/models';

@Component({
  selector: 'app-home-component',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  public posts: Array<PostModel> = [];
  public loading = false;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  private fetchPosts(): void {
    this.loading = true;
    this.postService.publicPosts().subscribe(
      ({post}) => {
        this.loading = false;
        if (!post) {
          return;
        }
        this.posts = [...this.processPostsResponse(post)];
      },
      error => {
        this.loading = false;
        console.log('Dummy error says error', JSON.stringify(error));
      }
    );
  }

  private processPostsResponse(postsArray): any {
    return postsArray.map(({email, TimeTag, Message}) => ({
      userHandle: email ? `@${email.split('@')[0]}` : '',
      postTime: TimeTag,
      postText: Message,
      userEmail: email
    }));
  }

  public onSubmitPost(textToPost: string): void {
    this.postService.submit({message: textToPost}).subscribe(
      resp => {
        this.posts = [...this.processPostsResponse([resp]), ...this.posts];
      },
      error => {
        console.log('error in post POST', JSON.stringify(error));
      }
    );
  }
}
