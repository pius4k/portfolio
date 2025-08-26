// src/app/components/about/about.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  name: string = 'Pius Pius';
  university: string = 'Dominican University';
  graduationYear: string = '2026';

  bio: string = `I’m a Computer Science student at ${this.university}, expected to graduate in ${this.graduationYear}. 
  I’m passionate about technology, particularly in Web Development, Graphics and Image Processing, and 
  finding creative solutions to real-world problems.`;

  hobbies: string[] = [
    'Exploring new programming technologies',
    'Building side projects',
    'Running a mini importation business',
    'Reading about innovation and entrepreneurship'
  ];
}

