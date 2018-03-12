import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDatatableComponent } from './member-datatable.component';

describe('MemberDatatableComponent', () => {
  let component: MemberDatatableComponent;
  let fixture: ComponentFixture<MemberDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
