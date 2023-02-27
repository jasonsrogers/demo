import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { ImagesComponent } from './images/images.component';
import { MenuComponent } from './menu/menu.component';
import { CybertruckButtonComponent } from './cybertruck-button/cybertruck-button.component';
import { AppPageComponent } from './app-page/app-page.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    MenuComponent,
    AnalogClockComponent,
    AppHeaderComponent,
    ImagesComponent,
    CybertruckButtonComponent,
    AppPageComponent,
  ],
  exports: [
    MenuComponent,
    AnalogClockComponent,
    AppHeaderComponent,
    ImagesComponent,
    CybertruckButtonComponent,
    AppPageComponent,
  ],
})
export class SharedUiModule {}
