import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plant-search-result',
  templateUrl: './plant-search-result.component.html',
  styleUrls: ['./plant-search-result.component.scss']
})

export class PlantSearchResultComponent implements OnInit {
  @Input() resultList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this)
  }

}
