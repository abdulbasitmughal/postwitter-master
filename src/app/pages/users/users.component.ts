import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users-component',
  templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
  public users = [];
  public loading = false;
  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  private fetchUsers(): void {
    this.loading = true;
    this.userService.getAllUsers().subscribe(
      ({user}) => {
        this.loading = false;
        if (!user) {
          return;
        }
        this.users = [...this.processUsersFetchReponse(user)];
      },
      error => {
        this.loading = false;
        console.log('error while fetching users', error);
      }
    );
  }

  private processUsersFetchReponse(usersArray): any {
    return usersArray.map(user => ({
      email: user.Email,
      userHandle: `@${user.Email.split('@')[0]}`
    }));
  }
}
