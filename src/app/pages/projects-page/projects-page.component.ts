import { Component, OnInit } from '@angular/core';

interface Project {
  company: string;
  jobTitle: string;
  location: string;
  dateRange: string;
  skills: string[];
  description: string; // Add description if you were using it
  logoFilename?: string; // Optional field for the logo filename
  showMore?: boolean; // Optional field for UI state
  // ⭐ ADDED: Property to distinguish project type
  type: 'professional' | 'personal';
}
@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  // ⭐ CHANGED: Two separate arrays for filtering in HTML
  professionalProjects: Project[] = [];
  sideProjects: Project[] = [];

  constructor() {}

  ngOnInit(): void {
    const logoMap: { [key: string]: string } = {
    'New India Assurance': 'nia.png',
    'National Stock Exchange': 'nse.jpg',
    // Personal/Side Project Logos
    'Zuvi Digital Platform': 'zuvi.png',
    'Chatly-AI Assistant': 'chatly.webp'
  };

  // 2. Define the static data array with the new 'type' property
    const mockProjects: Omit<Project, 'logoFilename' | 'showMore'>[] = [
      // --- PROFESSIONAL PROJECTS ---
      {
        company: 'National Stock Exchange',
        jobTitle: 'Senior Software Engineer',
        location: 'Chennai, India',
        dateRange: 'Jan 2022 - Present',
        skills: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'FastAPI'],
        description: 'Developed and maintained enterprise-level applications...',
        type: 'professional' // ⭐ PROFESSIONAL
      },
      {
        company: 'New India Assurance',
        jobTitle: 'Software Developer',
        location: 'Bangalore, India',
        dateRange: 'Jun 2020 - Dec 2021',
        skills: ['Java', 'Spring Boot', 'SQL', 'REST API'],
        description: 'Contributed to microservices development...',
        type: 'professional' // ⭐ PROFESSIONAL
      },
      // --- PERSONAL/SIDE PROJECTS ---
      {
        company: 'Zuvi Digital Platform',
        jobTitle: 'Full-Stack Developer (Side Project)',
        location: 'Remote',
        dateRange: 'Aug 2023 - Present',
        skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
        description: 'A personal project focused on creating a digital portfolio for creatives.',
        type: 'personal' // ⭐ PERSONAL
      },
      {
        company: 'Chatly-AI Assistant',
        jobTitle: 'AI Developer (Side Project)',
        location: 'Remote',
        dateRange: 'May 2024 - Present',
        skills: ['Python', 'LLMs', 'FastAPI', 'Azure'],
        description: 'An open-source project building a custom RAG-based AI assistant.',
        type: 'personal' // ⭐ PERSONAL
      }
    ];

    // 3. Process and filter the data
    const mappedProjects: Project[] = mockProjects.map(item => ({
      ...item,
      logoFilename: logoMap[item.company] || 'default-logo.png',
      showMore: false
    }));

    // ⭐ FILTERING: Separate the projects into their respective arrays
    this.professionalProjects = mappedProjects.filter(p => p.type === 'professional');
    this.sideProjects = mappedProjects.filter(p => p.type === 'personal');
  }

  // ✅ Image error handler for fallback (kept as it is good practice)
  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/company-logo/default-logo.png';
  }
}

