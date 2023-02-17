import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@demo-app/shared/ui';
import { ClocksPageComponent } from './clocks-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClocksPageComponent,
      },
    ]),
    SharedUiModule,
  ],
  declarations: [ClocksPageComponent],
})
export class WebClocksFeatureClocksPageModule {}
