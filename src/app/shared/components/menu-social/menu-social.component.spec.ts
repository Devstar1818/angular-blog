import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSocialComponent } from './menu-social.component';

describe('MenuSocialComponent', () => {
  let component: MenuSocialComponent;
  let fixture: ComponentFixture<MenuSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
