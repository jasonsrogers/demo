import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClocksComponent } from './clocks-page.component';

describe('ClocksComponent', () => {
  let component: ClocksComponent;
  let fixture: ComponentFixture<ClocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClocksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
