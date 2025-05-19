<template>
  <div class="curso-main-container pb-3">
    <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-fluid img-a" src="@/assets/curso/temas/1.png" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <div class="bg2 text-white p-3 brad j1 h-100">
            <p>
              El siguiente diagrama proporciona una visión general sintetizada
              de los principales temas abordados en este componente sobre
              limpieza y transformación de datos. Este mapa está diseñado para
              ayudar al lector a visualizar la interconexión entre los diversos
              elementos que conforman el proceso integral de preparación y
              transformación de datos.
            </p>
            <p>
              En el origen del diagrama se encuentra el concepto principal de
              limpieza y transformación de datos, del cual se ramifican cinco
              áreas fundamentales: fundamentos, importación de datos, técnicas
              de transformación, herramientas y mejores prácticas. Cada una de
              estas áreas se desglosa en subtemas clave, reflejando la
              estructura y el contenido del componente, desde los conceptos
              básicos hasta las aplicaciones prácticas y tendencias actuales.
            </p>
          </div>
        </div>
      </div>
      <p class="mb-5">
        Este diagrama sirve como una guía visual para navegar por los conceptos
        presentados en el texto, permitiendo al lector comprender rápidamente el
        flujo y la interrelación de los procesos involucrados en la preparación
        y transformación de datos. Al revisar este mapa, el aprendiz podrá
        apreciar cómo los diferentes aspectos, desde la importación inicial
        hasta las mejores prácticas, se integran para formar un proceso
        coherente y sistemático. Se invita a explorar este diagrama como un
        complemento al contenido detallado del componente, utilizándolo como una
        referencia rápida y un recordatorio visual de los conceptos clave en el
        campo de la limpieza y transformación de datos.
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-10 bgs p-4 brad">
          <figure>
            <img
              class="img-a img-t"
              src="@/assets/curso/temas/sintesis.svg"
              alt="se denomina «Síntesis temática del componente», allí se mencionan los principales temas tratados sobre la limpieza y transformación de datos —como sus fundamentos, importación, técnicas, herramientas y prácticas— y algunos subtemas que los integran."
            />
          </figure>
        </div>
      </div>
      <div class="row justify-content-center mt-2 mb-5">
        <div class="col-lg-10">
          <figcaption>Fuente: OIT, 2024.</figcaption>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-auto">
          <a
            class="anexo mb-5"
            :href="obtenerLink('/downloads/Sintesis.pdf')"
            target="_blank"
          >
            <div class="anexo__icono">
              <img src="@/assets/bullets/icono-pdf.svg" />
            </div>
            <div class="anexo__texto">
              <p>Anexo. Síntesis</p>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
