import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledComponentsPageComponent } from './styled-components-page.component';

describe('StyledComponentsPageComponent', () => {
  let component: StyledComponentsPageComponent;
  let fixture: ComponentFixture<StyledComponentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StyledComponentsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StyledComponentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
