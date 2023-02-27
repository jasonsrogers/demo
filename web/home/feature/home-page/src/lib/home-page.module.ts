import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@demo-app/shared/ui';
import { MarkdownModule } from 'ngx-markdown';
import { HomePageComponent } from './home-page.component';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent,
      },
    ]),
    SharedUiModule,
  ],
  exports: [HomePageComponent],
  declarations: [HomePageComponent],
})
export class WebHomeFeatureHomePageModule {}
