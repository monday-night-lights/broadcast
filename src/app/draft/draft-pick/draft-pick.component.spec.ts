import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DraftPickComponent } from './draft-pick.component';

describe('DraftPickComponent', () => {
  let component: DraftPickComponent;
  let fixture: ComponentFixture<DraftPickComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
