import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedUiModule } from '@demo-app/shared/ui';
import { MarkdownModule } from 'ngx-markdown';
import { WebShellModule } from 'web/shell/feature/web-shell/src/lib/web-shell.module';
import { AppComponent } from './app.component';
import { MenuItemHexComponent } from './menu-item-hex/menu-item-hex.component';

@NgModule({
  declarations: [AppComponent, MenuItemHexComponent],
  imports: [
    BrowserModule,
    WebShellModule,
    CommonModule,
    SharedUiModule,
    MarkdownModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
