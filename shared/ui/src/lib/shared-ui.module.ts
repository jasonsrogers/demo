import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ImagesComponent } from './images/images.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    MenuComponent,
    AnalogClockComponent,
    AppHeaderComponent,
    ImagesComponent,
  ],
  exports: [
    MenuComponent,
    AnalogClockComponent,
    AppHeaderComponent,
    ImagesComponent,
  ],
})
export class SharedUiModule {}
