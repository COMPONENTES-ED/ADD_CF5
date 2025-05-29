<template>
  <div class="curso-main-container introduccion">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero">
          <span><i class="fas fa-info"></i></span>
        </div>
        <h1>Introducción</h1>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-5 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/2.png" alt="" />
        </div>
        <div class="col-lg-7 my-lg-0 my-3">
          <p>
            En el mundo actual del análisis de datos, la calidad y la
            preparación adecuada de la información se han convertido en factores
            determinantes para el éxito de cualquier proyecto analítico. Los
            datos crudos, aquellos que provienen directamente de diversas
            fuentes, raramente se encuentran en un estado óptimo para su
            análisis inmediato. Frecuentemente, contienen inconsistencias,
            valores faltantes, formatos incompatibles y otros problemas que
            pueden comprometer la validez de los análisis posteriores.
          </p>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-lg-0 my-3">
          <div class="bg1 brad p-3 mb-4 j1 h-100">
            <p class="mb-0">
              Pero
              <mark class="bgt1"
                >¿cómo se transforma un conjunto de datos desordenado en
                información valiosa y procesable?</mark
              >
              Este componente formativo aborda esta pregunta fundamental,
              adentrándose en el mundo de la limpieza y transformación de datos.
              Se exploran las técnicas, herramientas y mejores prácticas que
              permiten convertir datos crudos en conjuntos de información
              confiables y útiles para el análisis.
            </p>
          </div>
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/3.png" alt="" />
        </div>
      </div>
      <p>
        A lo largo de ese componente formativo, se guiará al aprendiz a través
        de un proceso sistemático que abarca desde la importación inicial de
        datos hasta su transformación final, pasando por técnicas de limpieza,
        validación y control de calidad. Mediante ejemplos prácticos y casos de
        estudio reales, se descubrirá cómo abordar los desafíos comunes en la
        preparación de datos y cómo implementar soluciones efectivas utilizando
        herramientas modernas como Python y R.
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div
            class="row justify-content-center align-items-center bg3 p-4 brad"
          >
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/4.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                La limpieza y transformación de datos son pasos preliminares en
                el proceso analítico, pero también constituyen la base
                fundamental sobre la cual se construye todo análisis exitoso.
                Como reza el conocido adagio en ciencia de datos: “garbage in,
                garbage out” (si entra basura, sale basura). Por ello, es
                necesario dominar estas técnicas y herramientas, para cualquier
                persona que trabaje con datos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h5 class="mb-5">
        ¡Bienvenido a este recorrido por el mundo de la limpieza y
        transformación de datos: técnicas y herramientas informáticas¡
      </h5>
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12">
          <figure>
            <div class="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/qas_rTn5Avs?si=1WKsYQzdPIQi00ds"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              >
              </iframe>
            </div>
            <figcaption>
              Video. Limpieza y transformación de datos técnicas y herramientas
              informáticas
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
