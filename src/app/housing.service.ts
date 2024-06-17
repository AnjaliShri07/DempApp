import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { last } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url ='http://localhost:3000/locations';
  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number): Promise<HousingLocation | undefined> {
   // return this.housingLocationList.find(housingLocation => housingLocation.id === id)
   const data = await fetch('${this.url}/${id}');
   return await data.json() ?? {};
  } 

  submitApplication(firstName: String, lastName: String, email: String){
    console.log(firstName, lastName, email);
  }
}
