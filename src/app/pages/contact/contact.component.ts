import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TouchEventService } from '../../services/touch-event.service';
import { Contact } from 'src/app/models/contact';
import { contact } from '../../data/contact.data';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contact: Contact = contact;
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
