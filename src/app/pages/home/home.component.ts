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
  public showLoadMoreButton = false;

  public pageNumber = 1;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.fetchPosts();
  }

  private fetchPosts(): void {
    if (this.pageNumber === 1) {
      this.loading = true;
    }
    this.postService.publicPosts(this.pageNumber).subscribe(
      ({post}) => {
        this.loading = false;

        if (!post) {
          return;
        }

        this.showLoadMoreButton = post.length === 10;
        this.pageNumber += 1;

        this.posts = [...this.posts, ...this.processPostsResponse(post)];
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

  public loadMore(): void {
    this.fetchPosts();
  }
}
