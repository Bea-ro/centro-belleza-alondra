import { Component, HostListener } from '@angular/core';
import { Service } from '../../models/service';
import { services } from '../../data/services.data';
import { PriceToStringService } from '../../services/price-to-string.service';
import { TouchEventService } from '../../services/touch-event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['services-list.component.css'],
})
export class ServicesListComponent {
  services: Service[] = services;
  convertedServices: Service[] = [];

  constructor(
    private priceToStringService: PriceToStringService,
    private router: Router,
    private touchEventService: TouchEventService
  ) {
    this.convertedServices = this.priceToStringService.getPricesToString(
      this.services
    );
  }

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
