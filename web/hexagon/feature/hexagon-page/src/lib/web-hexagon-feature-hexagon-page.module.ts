import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedUiModule } from '@demo-app/shared/ui';
import { HexagonPageComponent } from './hexagon-page.component';

@NgModule({
  imports: [CommonModule, SharedUiModule],
  declarations: [HexagonPageComponent],
})
export class WebHexagonFeatureHexagonPageModule {}
