import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledComponentsComponent } from './styled-components.component';

describe('StyledComponentsComponent', () => {
  let component: StyledComponentsComponent;
  let fixture: ComponentFixture<StyledComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyledComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyledComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
