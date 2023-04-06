import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReelsService {
  constructor(private http: HttpClient) {}

  getReels(): Observable<any> {
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': environment['API_Key'],
      'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com',
    });

    return this.http.get('https://tiktok-all-in-one.p.rapidapi.com/feed', {
      params: { region: 'US', device_id: '7523368224928586621' },
      headers,
    });
  }
}
