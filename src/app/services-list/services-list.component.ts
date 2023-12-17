import { Component } from '@angular/core';
import { Service } from '../service';
import { services } from '../data/services.data.';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css'],
})
export class ServicesListComponent {
  services: Service[] = services;
}
