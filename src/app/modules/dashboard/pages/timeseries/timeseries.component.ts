import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timeseries',
  templateUrl: './timeseries.component.html',
  standalone: true,
  imports: [FormsModule,CommonModule],
  styleUrls: ['./timeseries.component.scss']
})
export class TimeseriesComponent {
  steps: number = 3;
  predictions: number[] = [];

  constructor(private http: HttpClient) {}

  getTimeseriesPredictions() {
    const data = { steps: this.steps };
    this.http.post<any>('http://127.0.0.1:5000/predict', data).subscribe(response => {
      this.predictions = response.predictions;
    });
  }
}
