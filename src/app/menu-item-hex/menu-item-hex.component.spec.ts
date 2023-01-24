import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemHexComponent } from './menu-item-hex.component';

describe('MenuItemComponent', () => {
  let component: MenuItemHexComponent;
  let fixture: ComponentFixture<MenuItemHexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuItemHexComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuItemHexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
