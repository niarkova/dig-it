import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-plant-search-result',
  templateUrl: './plant-search-result.component.html',
  styleUrls: ['./plant-search-result.component.scss']
})

export class PlantSearchResultComponent implements OnInit {
  @Input() resultList: any[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addPlant(plant: any) {
    this.store.dispatch({
      type: 'ADD_PLANT',
      payload: plant,
    });
  }

  removePlant(plant: any) {
    this.store.dispatch({
      type: 'REMOVE_PLANT',
      payload: plant,
    });
  }

}
