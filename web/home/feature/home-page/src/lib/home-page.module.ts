import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
  ],
  exports: [HomePageComponent],
  declarations: [HomePageComponent],
})
export class WebHomeFeatureHomePageModule {}
