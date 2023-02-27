import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@demo-app/shared/ui';
import { HomePageComponent } from './home-page.component';

@NgModule({
  imports: [
    CommonModule,
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
