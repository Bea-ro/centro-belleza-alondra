import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TouchEventService {
  private touchStartX: number = 0;

  public handleTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  public handleTouchMove(
    event: TouchEvent,
    router: Router,
    pathPrev: string,
    pathNext: string
  ): void {
    const touchEndX = event.touches[0].clientX;
    const deltaX = touchEndX - this.touchStartX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        router.navigate([pathNext]);
        console.log('dcha');
      } else {
        router.navigate([pathPrev]);
        console.log('izda');
      }
      this.touchStartX = touchEndX;
    }
  }
}
