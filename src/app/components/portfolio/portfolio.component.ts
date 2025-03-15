import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  imports:[CommonModule]
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Tic Tac Toe Game',
      description: 'An interactive Tic Tac Toe game',
      liveUrl: 'https://tictactoe-32f47.web.app/',
    },
    {
      title: 'Weather App',
      description: 'Displays real-time weather data using a weather API.',
      liveUrl: 'https://weather-app-d38b2.web.app',
    },
    {
      title: 'Currency Converter',
      description: 'A simple currency converter that fetches live exchange rates.',
      liveUrl: 'https://currencyconverter-3c8dc.web.app',
     
    },
    {
      title: 'IP Finder App',
      description: 'Finds your public IP address and location details.',
      liveUrl: 'https://ipfinder-23fcd.web.app',
    },
    {
      title: 'Quote Generator',
      description: 'Generates random motivational quotes.',
      liveUrl: 'https://quote-generator-63309.web.app',
    },
    {
      title: 'E-commerce Web App',
      description: 'A modern e-commerce app',
      liveUrl: 'https:ecomm-website-e4447.web.app',
    }
  ];
}
