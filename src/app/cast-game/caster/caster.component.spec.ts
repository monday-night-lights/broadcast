import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CasterComponent } from './caster.component';

describe('CasterComponent', () => {
  let component: CasterComponent;
  let fixture: ComponentFixture<CasterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
