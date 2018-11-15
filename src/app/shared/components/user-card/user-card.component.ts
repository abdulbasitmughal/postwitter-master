import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'user-card',
  templateUrl: 'user-card.component.html'
})
export class UserCardComponent {
  @Input() userHandle = '@dummy';
  @Input() email = 'dummy@user';
}
