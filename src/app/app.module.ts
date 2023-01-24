import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { MenuItemHexComponent } from './menu-item-hex/menu-item-hex.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ClocksComponent } from './clocks/clocks.component';
import { AiImagesComponent } from './ai-images/ai-images.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    MenuItemHexComponent,
    MenuComponent,
    HomeComponent,
    ClocksComponent,
    AiImagesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
