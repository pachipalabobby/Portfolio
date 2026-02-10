import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { AboutComponent } from './components/about/about';
import { ServicesComponent } from './components/services/services';
import { PortfolioComponent } from './components/portfolio/portfolio';
import { ClientsComponent } from './components/clients/clients';
import { ExperienceComponent } from './components/experience/experience';
import { StatsComponent } from './components/stats/stats';
import { BlogComponent } from './components/blog/blog';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    ClientsComponent,
    ExperienceComponent,
    StatsComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'portfolio-app';
}
