import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-injury',
  templateUrl: './injury.component.html',
  standalone: true,
  imports: [FormsModule,CommonModule],
  styleUrl: './injury.component.scss'
})
export class InjuryComponent {
  players: any[] = [
    { poste: 'Attaquant', age: 25 },
    { poste: 'Milieu de terrain', age: 26 }
  ];
  predictions: Record<string, any[]> | null = null;

  constructor(private http: HttpClient) {}

  analyzeInjuries() {
    const data = this.players;
    this.http.post<any>('http://127.0.0.1:5000/predict', data).subscribe(response => {
      this.predictions = response;
    });
  }
}