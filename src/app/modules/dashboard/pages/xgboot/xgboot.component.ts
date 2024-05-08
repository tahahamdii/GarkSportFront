import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-xgboot',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './xgboot.component.html',
  styleUrl: './xgboot.component.scss'
})
export class XgbootComponent {

  predictionResults: any;

  constructor(private http: HttpClient) { }

  predict(): void {
    const inputData = {
      "Attack": 81,
      "Midfield": 82,
      "Defence": 82,
      "Speed": "Fast",
      "Dribbling": "Normal",
      "Passing": "Mixed",
      "Positioning": "Normal",
      "Crossing": "Normal",
      "Shooting": "Normal",
      "Aggression": "Press",
      "Pressure": "Medium",
      "Team_width": "Normal",
      "Defender_line": "Cover",
      "Domestic_prestige": 20,
      "International_prestige": 20
    };

    this.http.post<any>('http://localhost:5000/predict', inputData)
      .subscribe(data => {
        this.predictionResults = data;
      });
  }
}
