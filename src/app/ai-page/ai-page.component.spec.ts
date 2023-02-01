import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiImagesComponent } from './ai-page.component';

describe('AiImagesComponent', () => {
  let component: AiImagesComponent;
  let fixture: ComponentFixture<AiImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AiImagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AiImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
