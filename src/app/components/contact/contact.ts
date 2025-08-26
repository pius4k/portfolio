import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // 👈 Import FormsModule
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card'; 

@Component({
  selector: 'app-contact',
  standalone: true,                          // 👈 mark standalone
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  imports: [CommonModule, FormsModule, RouterModule,MatCardModule]   // 👈 add here
})
export class ContactComponent {
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted:', form.value);
      alert('Thank you for reaching out! I will get back to you soon.');
      form.reset();
    }
  }

  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/pius', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/pius', icon: '💼' },
    { name: 'Twitter', url: 'https://twitter.com/pius', icon: '🐦' }
  ];
}
