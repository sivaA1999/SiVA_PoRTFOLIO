import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-ticker-component',
  templateUrl: './ticker-component.component.html',
  styleUrls: ['./ticker-component.component.css']
})
export class TickerComponentComponent implements OnInit {

  quotes: string[] = [];
  marqueeText = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
      this.router.events
  .pipe(
    filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
  )
  .subscribe((event: NavigationEnd) => {
    // Now this is safe to treat as NavigationEnd
    this.updateQuotes(event.urlAfterRedirects);
    console.log('NavigationEnd:', event.url);
  });
       // On initial load
    const currentUrl = this.router.url;
    this.updateQuotes(currentUrl);
  }

  updateQuotes(route: string) {
    switch (route) {
      case '/projects':
        this.quotes = [
          '🔥 Angular Expert | 💡 Built 5+ Fullstack Projects',
          '🧠 AI Assistant Powered by Gemini | 🛠️ FastAPI Backend',
        ];
        break;
      case '/resume':
        this.quotes = [
          '📁 View Fullstack Projects | Angular + FastAPI + Docker',
          '🚀 Deployed on AWS | Secure & Scalable Codebase',
        ];
        break;
      case '/header':
        this.quotes = [
          '👋 Meet the Developer | 3+ Years Experience | Open to Work',
          '🎓 B.Tech in CSE | Freelance-ready | 📬 support@retrievegenie.com',
        ];
        break;
      case '/contact':
        this.quotes = [
          '📬 Let’s Connect | Quick replies guaranteed!',
          '📞 Schedule a Call | support@retrievegenie.com',
        ];
        break;
        case '/login':
        this.quotes = [
          '👋 Meet the Chatly Assistant | Teck Stack: FastAPI, Angualr, Python, Typescript, MySQL Database | Open to Work',
          '🎓 B.Tech in CSE | Freelance-ready | 📬 support@retrievegenie.com',
        ];
        break;
      default:
        this.quotes = [
          '✨ Building Smart Web Apps | 🌙 Dark Mode Ready',
          '💼 Explore My Work | 🛠️ Always Improving',
        ];
    }

    this.marqueeText = this.quotes.join(' ••• ');
  }

}


