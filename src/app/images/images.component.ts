import { Component } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent {
  public images = [
    { name: 'image1', url: 'assets/image1.png' },
    { name: 'image1', url: 'assets/image2.png' },
    { name: 'image1', url: 'assets/image3.png' },
  ];
}
