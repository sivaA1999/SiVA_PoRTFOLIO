import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBubbleComponentComponent } from './nav-bubble-component.component';

describe('NavBubbleComponentComponent', () => {
  let component: NavBubbleComponentComponent;
  let fixture: ComponentFixture<NavBubbleComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBubbleComponentComponent]
    });
    fixture = TestBed.createComponent(NavBubbleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
