import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagonPageComponent } from './hexagon-page.component';

describe('HexagonPageComponent', () => {
  let component: HexagonPageComponent;
  let fixture: ComponentFixture<HexagonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HexagonPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HexagonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
