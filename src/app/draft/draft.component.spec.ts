import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DraftComponent } from './draft.component';

describe('DraftComponent', () => {
  let component: DraftComponent;
  let fixture: ComponentFixture<DraftComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DraftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
