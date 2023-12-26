import { Injectable } from '@angular/core';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root',
})
export class PriceToStringService {
  getPricesToString(services: Service[]): Service[] {
    services.map((service) => {
      const originalPrice = service.price as number;
      const newPrice = originalPrice.toFixed(2).toString().replace('.', ',');
      service.price = newPrice;
    });
    return services;
  }
}
