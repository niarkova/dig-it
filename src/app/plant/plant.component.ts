import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrowStuffApiService } from '../grow-stuff-api.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {
  plantId: string;
  plant: any;

  constructor(private apiService: GrowStuffApiService, private actRoute: ActivatedRoute) {
    this.plantId = this.actRoute.snapshot.params.id;
   }

  ngOnInit() {
    this.apiService.getPlant(this.plantId).subscribe((result: any) => {
      if(result) {
        this.plant = result.data;
      }
    });
  }

}
