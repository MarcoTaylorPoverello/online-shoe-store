import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAndCsComponent } from './t-and-cs.component';

describe('TAndCsComponent', () => {
  let component: TAndCsComponent;
  let fixture: ComponentFixture<TAndCsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TAndCsComponent]
    });
    fixture = TestBed.createComponent(TAndCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
