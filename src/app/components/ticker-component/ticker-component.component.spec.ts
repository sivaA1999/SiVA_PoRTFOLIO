import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TickerComponentComponent } from './ticker-component.component';

describe('TickerComponentComponent', () => {
  let component: TickerComponentComponent;
  let fixture: ComponentFixture<TickerComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TickerComponentComponent]
    });
    fixture = TestBed.createComponent(TickerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
