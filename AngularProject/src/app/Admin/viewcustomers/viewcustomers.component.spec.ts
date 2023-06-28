import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustomersComponent } from './viewcustomers.component';

describe('ViewcustomersComponent', () => {
  let component: ViewcustomersComponent;
  let fixture: ComponentFixture<ViewcustomersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcustomersComponent]
    });
    fixture = TestBed.createComponent(ViewcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
