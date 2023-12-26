import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Category } from '../../models/category';
import { categories } from '../../data/categories.data';
import { ServicesListComponent } from '../../components/services-list/services-list.component';

@Component({
  standalone: true,
  imports: [ServicesListComponent, CommonModule, NgOptimizedImage],
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  //categories: Category[] = categories;
  @Input() categories: Category[] = categories;
}
