import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { SharedUiModule } from '@demo-app/shared/ui';
import { AiPageComponent } from './ai-page/ai-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { ClocksPageComponent } from './clocks-page/clocks-page.component';
import { CybertruckButtonComponent } from './cybertruck-button/cybertruck-button.component';
import { HexagonPageComponent } from './hexagon-page/hexagon-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ImagesComponent } from './images/images.component';
import { MenuItemHexComponent } from './menu-item-hex/menu-item-hex.component';
import { StyledComponentsPageComponent } from './styled-components-page/styled-components-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    MenuItemHexComponent,
    HomePageComponent,
    ClocksPageComponent,
    ClockComponent,
    AiPageComponent,
    CybertruckButtonComponent,
    StyledComponentsPageComponent,
    HexagonPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, SharedUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
