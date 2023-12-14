import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string | string[] = '';
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.url === '/'
          ? (this.title = 'Belleza Alondra')
          : (this.title = this.router.url.split('/')[1]);
      }
    });
  }
}
