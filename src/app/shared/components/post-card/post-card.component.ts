import { Component, Input } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'post-card',
  templateUrl: 'post-card.component.html'
})
export class PostCardComponent {
  @Input() userHandle;
  @Input() postText;
  @Input() postTime;
  @Input() userEmail;
}
