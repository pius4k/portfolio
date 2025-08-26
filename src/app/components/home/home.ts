import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  name: string = 'Pius Pius';
  university: string = 'Dominican University';
  graduationYear: string = '2026';
  interests: string[] = [
    'Web Development',
    'Graphics & Image Processing',
    'Mini Importation Business',
    'Problem-Solving with Tech'
  ];

  get introduction(): string {
    return `Hi, I'm ${this.name}, a Computer Science student at ${this.university}, graduating in ${this.graduationYear}. Passionate about ${this.interests.join(', ')}.`;
  }
}

