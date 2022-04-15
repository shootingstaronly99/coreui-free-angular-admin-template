import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tashkilot } from 'src/app/shared/model/tashkilot';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TashkilotService {
  api = environment.baseUrl + '/api/tashkilot';
  constructor(public http:HttpClient) { }
  getAll():Observable<any> { 
    return this.http.get<any>(this.api);
  }
  getUser():Observable<any> { 
    return this.http.get<any>(this.api);
  }
  update(user: Tashkilot): Observable<Tashkilot> {
    return this.http.put<Tashkilot>(this.api+"/edit", user);
  }
  deleteById(id: number): Observable<any> {
    return this.http.get(this.api + "/status/" + id);
  }
}
