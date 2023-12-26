import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
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
