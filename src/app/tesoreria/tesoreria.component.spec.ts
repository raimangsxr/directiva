import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesoreriaComponent } from './tesoreria.component';

describe('TesoreriaComponent', () => {
  let component: TesoreriaComponent;
  let fixture: ComponentFixture<TesoreriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesoreriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesoreriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
