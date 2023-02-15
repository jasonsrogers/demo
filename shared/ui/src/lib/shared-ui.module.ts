import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MenuComponent, AnalogClockComponent],
  exports: [MenuComponent, AnalogClockComponent],
})
export class SharedUiModule {}
