import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  imports:[CommonModule]
})
export class ServicesComponent {
  services = [
    {
      title: 'Frontend Development',
      description: 'Building high-performance, scalable, and user-friendly web applications using Angular, TypeScript, and JavaScript.',
      icon: 'code'
    },
    {
      title: 'Responsive Web Design',
      description: 'Creating mobile-friendly, responsive websites that provide seamless user experiences across all devices.',
      icon: 'devices'
    },
    {
      title: 'SEO Optimization',
      description: 'Implementing best SEO practices to enhance website visibility and search engine rankings.',
      icon: 'trending_up'
    },
    {
      title: 'Performance Optimization',
      description: 'Improving website speed, accessibility, and overall user experience by optimizing code and assets.',
      icon: 'speed'
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and visually appealing user interfaces for web applications.',
      icon: 'brush'
    },
    {
      title: 'API Integration',
      description: 'Connecting frontend applications with RESTful APIs and third-party services to enhance functionality.',
      icon: 'link'
    }
  ];
}
