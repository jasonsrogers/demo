import { Component } from '@angular/core';

export type Image = {
  name: string;
  url: string;
  thumbnailUrl: string;
};

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent {
  public images: Image[] = [
    {
      name: 'image1',
      url: 'assets/image1.png',
      thumbnailUrl: 'assets/image1-thumbnail.png',
    },
    {
      name: 'image2',
      url: 'assets/image2.png',
      thumbnailUrl: 'assets/image2-thumbnail.png',
    },
    {
      name: 'image3',
      url: 'assets/image3.png',
      thumbnailUrl: 'assets/image3-thumbnail.png',
    },
    {
      name: 'image1',
      url: 'assets/image1.png',
      thumbnailUrl: 'assets/image1-thumbnail.png',
    },
    {
      name: 'image2',
      url: 'assets/image2.png',
      thumbnailUrl: 'assets/image2-thumbnail.png',
    },
    {
      name: 'image3',
      url: 'assets/image3.png',
      thumbnailUrl: 'assets/image3-thumbnail.png',
    },
    {
      name: 'image1',
      url: 'assets/image1.png',
      thumbnailUrl: 'assets/image1-thumbnail.png',
    },
    {
      name: 'image2',
      url: 'assets/image2.png',
      thumbnailUrl: 'assets/image2-thumbnail.png',
    },
    {
      name: 'image3',
      url: 'assets/image3.png',
      thumbnailUrl: 'assets/image3-thumbnail.png',
    },
    {
      name: 'image1',
      url: 'assets/image1.png',
      thumbnailUrl: 'assets/image1-thumbnail.png',
    },
    {
      name: 'image2',
      url: 'assets/image2.png',
      thumbnailUrl: 'assets/image2-thumbnail.png',
    },
    {
      name: 'image3',
      url: 'assets/image3.png',
      thumbnailUrl: 'assets/image3-thumbnail.png',
    },
    {
      name: 'image1',
      url: 'assets/image1.png',
      thumbnailUrl: 'assets/image1-thumbnail.png',
    },
    {
      name: 'image2',
      url: 'assets/image2.png',
      thumbnailUrl: 'assets/image2-thumbnail.png',
    },
    {
      name: 'image3',
      url: 'assets/image3.png',
      thumbnailUrl: 'assets/image3-thumbnail.png',
    },
    {
      name: 'image1',
      url: 'assets/image1.png',
      thumbnailUrl: 'assets/image1-thumbnail.png',
    },
    {
      name: 'image2',
      url: 'assets/image2.png',
      thumbnailUrl: 'assets/image2-thumbnail.png',
    },
    {
      name: 'image3',
      url: 'assets/image3.png',
      thumbnailUrl: 'assets/image3-thumbnail.png',
    },
    {
      name: 'image1',
      url: 'assets/image1.png',
      thumbnailUrl: 'assets/image1-thumbnail.png',
    },
    {
      name: 'image2',
      url: 'assets/image2.png',
      thumbnailUrl: 'assets/image2-thumbnail.png',
    },
    {
      name: 'image3',
      url: 'assets/image3.png',
      thumbnailUrl: 'assets/image3-thumbnail.png',
    },
    {
      name: 'image1',
      url: 'assets/image1.png',
      thumbnailUrl: 'assets/image1-thumbnail.png',
    },
    {
      name: 'image2',
      url: 'assets/image2.png',
      thumbnailUrl: 'assets/image2-thumbnail.png',
    },
    {
      name: 'image3',
      url: 'assets/image3.png',
      thumbnailUrl: 'assets/image3-thumbnail.png',
    },
  ];

  public categories = [
    {
      title: 'Cyber punk greek gods',
      images: this.images,
    },
  ];

  public selectedImage: Image | undefined = undefined;

  openModal(image: Image): void {
    this.selectedImage = image;
    // document.getElementById('modal-image').src = image.url;
    // document.getElementById('modal').style.display = 'block';
  }

  closeModal(): void {
    this.selectedImage = undefined;
  }
}
