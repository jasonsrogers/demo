import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { MenuItemHexComponent } from './menu-item-hex/menu-item-hex.component';
import { MenuComponent } from './menu/menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ClocksPageComponent } from './clocks-page/clocks-page.component';
import { AiPageComponent } from './ai-page/ai-page.component';
import { CybertruckButtonComponent } from './cybertruck-button/cybertruck-button.component';
import { StyledComponentsPageComponent } from './styled-components-page/styled-components-page.component';
import { HexagonPageComponent } from './hexagon-page/hexagon-page.component';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    MenuItemHexComponent,
    MenuComponent,
    HomePageComponent,
    ClocksPageComponent,
    ClockComponent,
    AiPageComponent,
    CybertruckButtonComponent,
    StyledComponentsPageComponent,
    HexagonPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
