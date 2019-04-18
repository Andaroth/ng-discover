import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Prevision } from './prevision';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(
    private http: HttpClient
  ) {}

  fetchWeather(query: string): Observable<Prevision[]> {
    console.log('fetch weather');
    return this.http.get<Prevision[]>(this.apiUrl + query && query.length ? `?q=${query}` : ``).pipe(
      tap(_ => console.log('tap'))
    );
  }
}
