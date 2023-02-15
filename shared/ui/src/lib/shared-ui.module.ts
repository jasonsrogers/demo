import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { MenuComponent } from './menu/menu.component';
import { AppHeaderComponent } from './app-header/app-header.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MenuComponent, AnalogClockComponent, AppHeaderComponent],
  exports: [MenuComponent, AnalogClockComponent, AppHeaderComponent],
})
export class SharedUiModule {}
