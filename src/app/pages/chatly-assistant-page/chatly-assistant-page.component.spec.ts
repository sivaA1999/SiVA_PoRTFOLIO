import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatlyAssistantPageComponent } from './chatly-assistant-page.component';

describe('ChatlyAssistantPageComponent', () => {
  let component: ChatlyAssistantPageComponent;
  let fixture: ComponentFixture<ChatlyAssistantPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatlyAssistantPageComponent]
    });
    fixture = TestBed.createComponent(ChatlyAssistantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
