import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LottoComponent } from './lotto.component';

describe('LottoComponent', () => {
  let component: LottoComponent;
  let fixture: ComponentFixture<LottoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
