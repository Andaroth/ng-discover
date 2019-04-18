import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Prevision } from '../prevision';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  previsions: Prevision[];

  constructor(
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather(): void {
    this.weatherService.fetchWeather('London,uk').subscribe(w => this.previsions = w);
  }

}
