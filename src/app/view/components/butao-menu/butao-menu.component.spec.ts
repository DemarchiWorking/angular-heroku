import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButaoMenuComponent } from './butao-menu.component';

describe('ButaoMenuComponent', () => {
  let component: ButaoMenuComponent;
  let fixture: ComponentFixture<ButaoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButaoMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButaoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
