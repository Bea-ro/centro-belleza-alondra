import { Component, HostListener } from '@angular/core';
import { Service } from '../../service';
import { Router } from '@angular/router';
import { TouchEventService } from '../../services/touch-event.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  services: Service[] = [
    {
      name: 'Hyaluron Pen Labios',
      description: 'Hidratación labial y relleno de labios sin cirujía.',
      price: 190,
      duration: '1 hora',
    },
    {
      name: 'Peinado Celebración',
      description: 'Tu peinado para esa ocasión especial.',
      price: 38.5,
      duration: '1,5 horas',
    },
    {
      name: 'Lifting Pestañas',
      description: 'Eleva tus pestañas de forma permanente.',
      price: 30,
      duration: '30 minutos',
    },
    {
      name: 'Peeling Corporal',
      description:
        'Reafirma la piel, eliminando manchas y líneas de expresión.',
      price: 150,
      duration: '2 horas',
    },
    {
      name: 'Maderoterapia Corporal',
      description:
        'Tonifica el cuerpo y reafirma la silueta, eliminando la celulitis.',
      price: 175,
      duration: '2 horas',
    },
    {
      name: 'Microblading Cejas',
      description:
        'Corrije la forma de tus cejas adaptándolas a la bbeleza de tu rostro.',
      price: 38.5,
      duration: '45 minutos',
    },
  ];
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
