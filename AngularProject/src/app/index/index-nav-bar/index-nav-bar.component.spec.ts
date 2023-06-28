import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexNavBarComponent } from './index-nav-bar.component';

describe('IndexNavBarComponent', () => {
  let component: IndexNavBarComponent;
  let fixture: ComponentFixture<IndexNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexNavBarComponent]
    });
    fixture = TestBed.createComponent(IndexNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
