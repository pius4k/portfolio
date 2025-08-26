import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  imports: [CommonModule]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built with Angular to showcase my skills, projects, and experiences.',
      technologies: ['Angular', 'TypeScript', 'CSS'],
      link: 'https://github.com/pius-portfolio'
    },
    {
      title: 'Blog App',
      description: 'A blogging platform connected with WordPress API where users can read and publish posts.',
      technologies: ['Next.js', 'WordPress API', 'JavaScript'],
      link: 'https://github.com/pius-blog'
    },
    {
      title: 'Graphics & Image Processing Project',
      description: 'Academic project focused on image manipulation and filtering techniques.',
      technologies: ['Python', 'OpenCV'],
    }
  ];
}
