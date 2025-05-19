<template>
  <div class="curso-main-container referencias">
    <BannerInterno
      icono="fas fa-book"
      titulo="Referencias bibliográficas"
    ></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div v-for="ref in orderedData" :key="ref.link" class="referencias__item">
        <span v-html="ref.referencia"></span
        ><a v-if="ref.link" class="ms-1" :href="ref.link" target="_blank"
          ><span v-html="ref.link"></span
          ><i class="ms-1 fas fa-external-link-alt"></i
        ></a>
        <hr class="my-3" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Referencias',
  data: () => ({
    referencias: [
      {
        referencia:
          'Bansal, S. K. & Kagemann, S. (2015). Integrating Big Data: A Semantic Extract-Transform-Load Framework. Computer, 48(3), 42-50. ',
        link: 'https://doi.org/10.1109/mc.2015.76',
      },
      {
        referencia:
          'De Vries, A. & Meys, J. (2012). R For Dummies. John Wiley & Sons.',
      },
      {
        referencia:
          'Díaz, C. O., Soler, P., Pérez, M. & Mier, A. (2024). OMASHU: La ciencia detrás del éxito; Big Data e IA en los eSports. Revista SISTEMAS, 170, 61-79. ',
        link: 'https://doi.org/10.29236/sistemas.n170a7',
      },
      {
        referencia:
          'Guardelli, E. (2024). Minería de Procesos: Convertir Datos en Valor. MedTechBiz.',
      },
      {
        referencia:
          'Jones, H. (2018). Analítica de Datos: Una guía esencial para principiantes en minería de datos, recolección de datos, análisis de Big Data para negocios y conceptos de inteligencia empresarial. Independently Published.',
      },
      {
        referencia:
          'Leyva, D. S. (2024). Domina Machine Learning: Guía completa para principiantes. Independently Published.',
      },
      {
        referencia:
          'McKinsey, W. (2023). Python para análisis de datos. Anaya Multimedia.',
      },
      {
        referencia:
          'Orlandi, M. A. M. (2024). Tecnologías Big Data, Minería de Datos y Analítica aplicada a la gestión de Recursos Humanos: contiene: un caso de estudio. Editora Dialética.',
      },
      {
        referencia:
          'Shovic, J. C. & Simpson, A. (2019). Python All-in-One For Dummies. John Wiley & Sons.',
      },
      {
        referencia:
          'Subirats Maté, L., Pérez Trenard, D. O., Calvo González, M. & Isabel Guitart Hormigo. (2019). Introducción a la limpieza y análisis de los datos. ',
        link:
          'https://openaccess.uoc.edu/bitstream/10609/148647/1/IntroduccionALaLimpiezaYAnalisisDeLosDatos.pdf',
      },
    ],
  }),
  computed: {
    orderedData() {
      return [...this.referencias].sort((a, b) => {
        const afl = this.quitarAcentos(a.referencia.split(' ')[0].toLowerCase())
        const bfl = this.quitarAcentos(b.referencia.split(' ')[0].toLowerCase())
        if (afl < bfl) return -1
        if (afl > bfl) return 1
        return 0
      })
    },
  },
  methods: {
    quitarAcentos(str) {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    },
  },
}
</script>

<style lang="sass">
.referencias
  &__item
    &:last-child
      hr
        display: none
    a
      color: $blue
      text-decoration: underline
      overflow-wrap: break-word
</style>
