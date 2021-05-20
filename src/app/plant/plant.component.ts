import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrowStuffApiService } from '../grow-stuff-api.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {
  plantId: string;
  plant: any;
  plants: Observable<any[]>;

  constructor(private apiService: GrowStuffApiService, private actRoute: ActivatedRoute,  private store: Store<AppState>) {
    this.plantId = this.actRoute.snapshot.params.id;

    this.plants = this.store.select(state => state.plant);
   }

  ngOnInit() {
    this.apiService.getPlant(this.plantId).subscribe((result: any) => {
      if(result) {
        this.plant = result.data;
      }
    });
  }

  addPlant() {
    this.store.dispatch({
      type: 'ADD_PLANT',
      payload: this.plant,
    });
  }
}
