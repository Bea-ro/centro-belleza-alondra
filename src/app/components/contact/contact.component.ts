import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TouchEventService } from '../../services/touch-event.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(
    private router: Router,
    private touchEventService: TouchEventService
  ) {}

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.touchEventService.handleTouchStart(event);
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent): void {
    this.touchEventService.handleTouchMove(
      event,
      this.router,
      './conocenos',
      './'
    );
  }
}
