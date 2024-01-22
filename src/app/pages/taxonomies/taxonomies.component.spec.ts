import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxonomiesComponent } from './taxonomies.component';

describe('TaxonomiesComponent', () => {
  let component: TaxonomiesComponent;
  let fixture: ComponentFixture<TaxonomiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxonomiesComponent]
    });
    fixture = TestBed.createComponent(TaxonomiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
