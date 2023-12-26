import { Component, Input } from '@angular/core';
import { Category } from '../../models/category';
import { categories } from '../../data/categories.data';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  //categories: Category[] = categories;
  @Input() categories: Category[] = categories;
}
