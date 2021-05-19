import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrowStuffApiService {
  constructor(private httpClient: HttpClient) { }

  public searchPlant(plant: string) {
    return this.httpClient.get(`https://openfarm.cc/api/v1/crops/?filter=${plant}`);
  }

  public getPlant(plant: string) {
    return this.httpClient.get(`https://openfarm.cc/api/v1/crops/${plant}`);
  }
}
