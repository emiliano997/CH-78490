import { Course, CourseStatus } from '../model/Course';

export const mockCourses: Course[] = [
  {
    id: 1,
    title: 'Angular',
    description:
      'En este curso aprenderás a construir aplicaciones web con Angular. Angular se destaca por su enfoque en la modularización, lo que permite desarrollar aplicaciones de alto nivel de manera más fácil y rápida. Además, Angular ofrece una gran cantidad de herramientas y bibliotecas que te ayudarán a crear aplicaciones robustas y escalables.',
    beginDate: new Date('2022-01-01'),
    endDate: new Date('2022-12-31'),
    status: CourseStatus.SCHEDULED,
  },
  {
    id: 2,
    title: 'React',
    description:
      'React es una biblioteca de JavaScript para construir interfaces de usuario. Es mantenida por Facebook y una comunidad de desarrolladores individuales y empresas. React se puede utilizar como base en el desarrollo de aplicaciones de página única o móviles.',
    beginDate: new Date('2022-01-01'),
    endDate: new Date('2022-12-31'),
    status: CourseStatus.STARTED,
  },
  {
    id: 3,
    title: 'Vue',
    description:
      'Vue (pronunciado /vjuː/, como vista) es un marco de trabajo de JavaScript progresivo para construir interfaces de usuario. Es de código abierto y es mantenido por Evan You.',
    beginDate: new Date('2022-01-01'),
    endDate: new Date('2022-12-31'),
    status: CourseStatus.FINISHED,
  },
  {
    id: 4,
    title: 'NestJS',
    description:
      'Nest es un marco de trabajo de Node.js progresivo para construir aplicaciones de servidor eficientes y escalables. Proporciona una solución completa para la construcción de aplicaciones web, móviles y incluso aplicaciones IoT.',
    beginDate: new Date('2022-01-01'),
    endDate: new Date('2022-12-31'),
    status: CourseStatus.SCHEDULED,
  },
];
