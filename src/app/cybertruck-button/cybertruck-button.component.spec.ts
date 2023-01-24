import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CybertruckButtonComponent } from './cybertruck-button.component';

describe('CybertruckButtonComponent', () => {
  let component: CybertruckButtonComponent;
  let fixture: ComponentFixture<CybertruckButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CybertruckButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CybertruckButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
