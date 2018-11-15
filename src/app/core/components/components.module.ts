import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutBasicComponent } from './layout/layout-basic.component';
import { LayoutBlankComponent } from './layout/layout-blank.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [LayoutBasicComponent, LayoutBlankComponent, TopbarComponent],
  exports: [LayoutBasicComponent, LayoutBlankComponent],
  imports: [CommonModule, RouterModule]
})
export class ComponentModule {}
