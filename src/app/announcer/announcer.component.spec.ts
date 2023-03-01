import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnnouncerComponent } from './announcer.component';

describe('AnnouncerComponent', () => {
  let component: AnnouncerComponent;
  let fixture: ComponentFixture<AnnouncerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
