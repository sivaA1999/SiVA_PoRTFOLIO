import { Component, OnInit } from '@angular/core';

// Define a simple type for better code clarity
interface WorkExperience {
  company: string;
  jobTitle: string;
  location: string;
  dateRange: string;
  skills: string[];
  description: string; // Add description if you were using it
  logoFilename?: string; // Optional field for the logo filename
  showMore?: boolean; // Optional field for UI state
}
@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {

  workExperiences: any[] = [];

  constructor() {}

  ngOnInit(): void {
    const logoMap: { [key: string]: string } = {
    'Tata Consultancy Services': 'tcs.jpeg',
    'Wipro': 'wipro.png',
    'Infosys': 'infosys.png',
    'Cognizant': 'cognizant.jpeg',
    'Capgemini': 'capgemini.png',
    'Oracle': 'oracle.jpeg'
  };
   // 2. Define the static data array (REPLACEMENT FOR BACKEND CALL)
    const mockWorkExperiences: Omit<WorkExperience, 'logoFilename' | 'showMore'>[] = [
      {
        company: 'Tata Consultancy Services',
        jobTitle: 'Senior Software Engineer',
        location: 'Chennai, India',
        dateRange: 'Jan 2022 - Present',
        skills: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'FastAPI'],
        description: 'Developed and maintained enterprise-level applications...'
      },
      {
        company: 'Wipro',
        jobTitle: 'Software Developer',
        location: 'Bangalore, India',
        dateRange: 'Jun 2020 - Dec 2021',
        skills: ['Java', 'Spring Boot', 'SQL', 'REST API'],
        description: 'Contributed to microservices development...'
      }
      // Add all your work experiences here statically
    ];

     // 3. Assign and map the static data to include logo and initial state
    this.workExperiences = mockWorkExperiences.map(item => ({
      ...item,
      // Look up the logo filename from the map, or use default
      logoFilename: logoMap[item.company] || 'default-logo.png',
      showMore: false // Initialize UI state
    }));
  }

  // ✅ Image error handler for fallback (kept as it is good practice)
  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/company-logo/default-logo.png';
  }
}