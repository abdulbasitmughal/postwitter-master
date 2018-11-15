import { Component } from '@angular/core';
import { UserDataStore } from '@/shared/user-data.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: 'topbar.component.html'
})
export class TopbarComponent {
  constructor(private userData: UserDataStore, private router: Router) {}

  logoutUser(): void {
    this.userData.destroyUserData();
    this.router.navigate(['/login']);
  }
}
