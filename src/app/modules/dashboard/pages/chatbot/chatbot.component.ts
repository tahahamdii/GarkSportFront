import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  standalone: true,
  imports: [FormsModule,CommonModule],
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  homeTeam: string = '';
  awayTeam: string = '';
  prediction: any = null;

  constructor(private http: HttpClient) {}

  getMatchPrediction() {
    const data = {
      home_team: this.homeTeam,
      away_team: this.awayTeam
    };
    this.http.post<any>(' http://127.0.0.1:5000/predict', data).subscribe(response => {
      this.prediction = response;
    });
  }
}
