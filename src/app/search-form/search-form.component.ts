import { Component, OnInit } from '@angular/core';
import { GrowStuffApiService } from '../grow-stuff-api.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  results: any = {};
  searchForm = this.formBuilder.group({
    searchString: ['', [Validators.required]],
  });

  constructor(private apiService: GrowStuffApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const plant = this.searchForm.value.searchString.trim();

    if(plant) {
      this.search(plant);
    }
  }

  search(plant: string) {
    this.apiService.searchPlant(plant).subscribe((data) => {
      if(data) {
        this.results = data;
      }
    });
  }

  searchAndSetInput(plant: string) {
    this.searchForm.controls['searchString'].setValue(plant);

    this.search(plant);
  }
}
