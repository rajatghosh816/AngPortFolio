
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    MatIconModule,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ServicesComponent,
    ContactComponent,
  ],
})
export class AppComponent {
  sidebarOpen = false;

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      // Close sidebar after clicking a link (on mobile)
      if (window.innerWidth <= 768) {
        this.sidebarOpen = false;
      }
    }
  }
}
