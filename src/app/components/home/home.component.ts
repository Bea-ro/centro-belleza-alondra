import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TouchEventService } from '../../services/touch-event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private router: Router,
    private touchEventService: TouchEventService
  ) {}

  @HostListener('scroll', ['$event'])
  onScrill(event: Event): void {
    console.log('evento');
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    console.log('evento');
    this.touchEventService.handleTouchStart(event);
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent): void {
    this.touchEventService.handleTouchMove(
      event,
      this.router,
      './',
      './servicios'
    );
  }
}
