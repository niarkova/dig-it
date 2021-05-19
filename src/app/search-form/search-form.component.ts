import { Component, OnInit } from '@angular/core';
import { GrowStuffApiService } from '../grow-stuff-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    const searchString = this.searchForm.value.searchString.trim();

    console.log(searchString, this)
    if(searchString) {
      this.apiService.getPlant(searchString).subscribe((data) => {
        if(data) {
          this.results = data;
        }
      });
    }
  }

}
