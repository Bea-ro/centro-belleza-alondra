import { Service } from '../models/service';

export const services: Service[] = [
  {
    name: 'Hyaluron Pen Labios',
    description: 'Hidratación labial y relleno de labios sin cirujía.',
    price: 190,
    duration: '1 hora',
    category: 'rostro',
    images: [
      'https://res.cloudinary.com/dnlceaase/image/upload/v1702895221/alondra/IMG_20231218_112151_eesokm.jpg',
      'https://res.cloudinary.com/dnlceaase/image/upload/v1702895221/alondra/IMG_20231218_111859_snv53z.jpg',
    ],
  },
  {
    name: 'Peinado Celebración',
    description: 'Tu peinado para esa ocasión especial.',
    price: 38.5,
    duration: '1,5 horas',
    category: 'pelo',
    images: [
      'https://res.cloudinary.com/dnlceaase/image/upload/v1702895221/alondra/IMG_20231218_112119_h7u1ws.jpg',
      'https://res.cloudinary.com/dnlceaase/image/upload/v1702895221/alondra/IMG_20231218_112058_dh1ho3.jpg',
      'https://res.cloudinary.com/dnlceaase/image/upload/v1702895952/alondra/IMG_20231218_112021_skybed.jpg',
    ],
  },
  {
    name: 'Lifting Pestañas',
    description: 'Eleva tus pestañas de forma permanente.',
    price: 30,
    duration: '30 minutos',
    category: 'rostro',
    images: [
      'https://res.cloudinary.com/dnlceaase/image/upload/v1702896049/alondra/woman-2315_1280_utjdo9.jpg',
    ],
  },
  {
    name: 'Peeling Corporal',
    description: 'Reafirma la piel, eliminando manchas y líneas de expresión.',
    price: 150,
    duration: '2 horas',
    category: 'cuerpo',
    images: [
      'https://res.cloudinary.com/dnlceaase/image/upload/v1702896292/alondra/peeling_qzg4xn.jpg',
    ],
  },
  {
    name: 'Maderoterapia Corporal',
    description:
      'Tonifica el cuerpo y reafirma la silueta, eliminando la celulitis.',
    price: 175,
    duration: '2 horas',
    category: 'cuerpo',
    images: [
      'https://res.cloudinary.com/dnlceaase/image/upload/v1702812936/alondra/massage-5463832_1280_fqozyf.jpg',
      'https://res.cloudinary.com/dnlceaase/image/upload/v1702896403/alondra/maderoterapia-2_ucuzpq.png',
    ],
  },
  {
    name: 'Microblading Cejas',
    description:
      'Corrije la forma de tus cejas adaptándolas a la bbeleza de tu rostro.',
    price: 38.5,
    duration: '45 minutos',
    category: 'rostro',
    images: [
      'https://res.cloudinary.com/dnlceaase/image/upload/v1702812936/alondra/IMG_20231217_115949_d1clef.jpg',
    ],
  },
];
