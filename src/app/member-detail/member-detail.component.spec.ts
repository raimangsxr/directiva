import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SociosDetailComponent } from './member-detail.component';

describe('SociosDetailComponent', () => {
  let component: SociosDetailComponent;
  let fixture: ComponentFixture<SociosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SociosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SociosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
