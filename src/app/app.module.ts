import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedUiModule } from '@demo-app/shared/ui';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CybertruckButtonComponent } from './cybertruck-button/cybertruck-button.component';
import { HexagonPageComponent } from './hexagon-page/hexagon-page.component';
import { MenuItemHexComponent } from './menu-item-hex/menu-item-hex.component';
import { StyledComponentsPageComponent } from './styled-components-page/styled-components-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemHexComponent,
    CybertruckButtonComponent,
    StyledComponentsPageComponent,
    HexagonPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedUiModule,
    MarkdownModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
