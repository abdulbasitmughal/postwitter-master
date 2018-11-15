import { Component, OnInit } from '@angular/core';
import { UserPostService } from './user-posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-component',
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
  public userInfo: any = {};
  public posts: any = [];
  public loading = false;

  constructor(private userService: UserPostService, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(
      ({email}) => {
        this.fetchSelectedUserPosts(email);
        this.fetchUserInfoBy(email);
      }
    );
  }

  private fetchSelectedUserPosts(emailId: string): void {
    this.loading = true;
    this.userService.getPostsBy(emailId).subscribe(
      ({post}) => {
        this.loading = false;
        this.posts = [...this.processPostsResponse(post)];
      },
      error => {
        this.loading = false;
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

  private fetchUserInfoBy(emailId: string): void {
    this.userInfo = Object.assign({}, {email: emailId, userHandle: `@${emailId.split('@')[0]}`});
  }
}
