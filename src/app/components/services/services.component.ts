import { Component, HostListener } from '@angular/core';
import { Category } from '../../../app/category';
import { categories } from '../../data/categories.data';
import { Router } from '@angular/router';
import { TouchEventService } from '../../services/touch-event.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  categories: Category[] = categories;

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
      './',
      './reserva'
    );
  }
}
