import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedUiModule } from '@demo-app/shared/ui';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuItemHexComponent } from './menu-item-hex/menu-item-hex.component';

@NgModule({
  declarations: [AppComponent, MenuItemHexComponent],
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
