import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MenuComponent],
  exports: [MenuComponent],
})
export class SharedUiModule {}
