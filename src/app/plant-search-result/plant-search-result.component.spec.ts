import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantSearchResultComponent } from './plant-search-result.component';

describe('PlantSearchResultComponent', () => {
  let component: PlantSearchResultComponent;
  let fixture: ComponentFixture<PlantSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantSearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
