import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LottoAdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let component: LottoAdminComponent;
  let fixture: ComponentFixture<LottoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LottoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LottoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
