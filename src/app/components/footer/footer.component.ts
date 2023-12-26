import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  standalone: true,
  imports: [NavbarComponent],
  selector: 'app-footer',
  template: ` <app-navbar></app-navbar> `,
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {}
