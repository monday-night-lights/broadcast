import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnnouncersComponent } from './announcers.component';

describe('AnnouncersComponent', () => {
  let component: AnnouncersComponent;
  let fixture: ComponentFixture<AnnouncersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
