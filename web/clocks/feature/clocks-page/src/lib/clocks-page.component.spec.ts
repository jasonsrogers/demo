import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClocksPageComponent } from './clocks-page.component';

describe('ClocksPageComponent', () => {
  let component: ClocksPageComponent;
  let fixture: ComponentFixture<ClocksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClocksPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClocksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
