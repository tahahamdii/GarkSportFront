import { Component } from '@angular/core';
import { SvmModelComponent } from '../../pages/svm-model/svm-model.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [SvmModelComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

}
