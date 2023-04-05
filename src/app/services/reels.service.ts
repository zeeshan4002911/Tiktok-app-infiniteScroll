import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReelsService {
  constructor(private http: HttpClient) {}

  getReels(): Observable<any> {
    let headers = new HttpHeaders({
      'X-RapidAPI-Key': 'f6ddf5453emsh5ba09650385164dp1562ebjsnbce929f5b759',
      'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com',
    });

    return this.http.get('https://tiktok-all-in-one.p.rapidapi.com/feed', {
      params: { region: 'US', device_id: '7523368224928586621' },
      headers,
    });
  }
}
