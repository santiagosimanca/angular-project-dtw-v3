import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuhambComponent } from './menuhamb.component';

describe('MenuhambComponent', () => {
  let component: MenuhambComponent;
  let fixture: ComponentFixture<MenuhambComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuhambComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuhambComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
