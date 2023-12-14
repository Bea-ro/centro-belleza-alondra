import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TouchEventService } from '../../services/touch-event.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(
    private router: Router,
    private touchEventService: TouchEventService
  ) {}

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
      './reserva',
      './contacto'
    );
  }
}
