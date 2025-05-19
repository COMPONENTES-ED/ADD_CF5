export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de la limpieza y transformación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Introducción a la limpieza y transformación de datos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia en el análisis de datos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos de datos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Proceso general de preparación de datos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Importación y lectura de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Lectura de datos desde archivos externos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Conexión y extracción desde bases de datos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Mejores prácticas en la importación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Técnicas de transformación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conversión de tipos de datos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clasificación y ordenamiento',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Eliminación de datos innecesarios',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Creación de nuevas variables',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Funciones de transformación esenciales',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas y tecnologías para la transformación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Herramientas especializadas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Bibliotecas principales en R y Python',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Automatización de procesos de transformación',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Mejores prácticas y casos de aplicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Documentación y control de calidad',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Casos de estudio prácticos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Tendencias y recomendaciones',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Conclusiones',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228117_CF05_DU_V2.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name:
      'Limpieza y transformación de datos: técnicas y herramientas informáticas',
    Description:
      'Este componente presenta una exploración de los procesos de limpieza y transformación de datos, abarcando desde sus fundamentos hasta las técnicas y herramientas más recientes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
}
