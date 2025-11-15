import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuddyListPageComponent } from './buddy-list-page.component';

describe('BuddyListPageComponent', () => {
  let component: BuddyListPageComponent;
  let fixture: ComponentFixture<BuddyListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuddyListPageComponent]
    });
    fixture = TestBed.createComponent(BuddyListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
