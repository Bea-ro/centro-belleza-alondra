import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookingComponent } from './components/booking/booking.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'servicios',
    component: ServicesComponent,
    title: 'Servicios',
  },
  {
    path: 'reserva',
    component: BookingComponent,
    title: 'Reserva',
  },
  {
    path: 'conocenos',
    component: AboutComponent,
    title: 'Conócenos',
  },
  {
    path: 'contacto',
    component: ContactComponent,
    title: 'Contacto',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
