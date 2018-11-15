import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-basic',
  template: `
    <div>
      <app-topbar></app-topbar>
      <div class="pt-12 container mx-auto">
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class LayoutBasicComponent {}
