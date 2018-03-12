import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberPendingFeeComponent } from './member-pending-fee.component';

describe('MemberPendingFeeComponent', () => {
  let component: MemberPendingFeeComponent;
  let fixture: ComponentFixture<MemberPendingFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberPendingFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberPendingFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
