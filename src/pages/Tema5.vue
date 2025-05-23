<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>5</span></div>
        <h1>Mejores prácticas y casos de aplicación</h1>
      </div>
      <div class="row bg4 align-items-center">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-center align-items-center mb-4">
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/54.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                La implementación exitosa de procesos de limpieza y
                transformación de datos requiere el dominio técnico de
                herramientas y metodologías, al igual que la adhesión a mejores
                prácticas y la comprensión de su aplicación en contextos reales.
                Este capítulo explora las prácticas fundamentales y presenta
                casos de estudio que ilustran su implementación efectiva en
                situaciones del mundo real.
              </p>
            </div>
          </div>
          <Separador> </Separador>
          <div id="t_5_1" class="titulo-segundo color-acento-contenido">
            <h2>5.1 Documentación y control de calidad</h2>
          </div>
          <div class="row justify-content-center mb-4">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/55.png"
                alt=""
              />
            </div>
            <div class="col-lg-8 my-lg-0 my-3">
              <p>
                La documentación exhaustiva y el control de calidad riguroso
                constituyen pilares fundamentales en cualquier proceso de
                transformación de datos. Una documentación efectiva no solo
                facilita el mantenimiento y la reproducibilidad de los procesos,
                sino que también proporciona transparencia y trazabilidad en las
                transformaciones realizadas.
              </p>
              <p>
                La documentación de procesos de transformación debe abordar
                múltiples niveles de detalle. A nivel estratégico, debe incluir
                los objetivos y justificación de las transformaciones
                realizadas, estableciendo claramente el contexto empresarial y
                los requisitos del negocio. A nivel técnico, debe detallar las
                especificaciones de las transformaciones, incluyendo:
              </p>
              <ul class="lista-ul fa-ul">
                <li>
                  <i class="fas fa-check v1"></i
                  ><span>Descripción detallada de las fuentes de datos.</span>
                </li>
                <hr />
                <li>
                  <i class="fas fa-check v1"></i
                  ><span
                    >Mapeo de transformaciones y reglas de negocio
                    aplicadas.</span
                  >
                </li>
                <hr />
                <li>
                  <i class="fas fa-check v1"></i
                  ><span>Tratamiento de casos especiales y excepciones.</span>
                </li>
                <hr />
                <li>
                  <i class="fas fa-check v1"></i
                  ><span>Dependencias y requisitos técnicos.</span>
                </li>
                <hr />
                <li>
                  <i class="fas fa-check v1"></i
                  ><span>Procedimientos de validación implementados.</span>
                </li>
                <hr />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p>
        El control de calidad en la transformación de datos debe implementarse
        como un proceso continuo y sistemático. Los elementos clave de un
        sistema robusto de control de calidad incluyen:
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-5 my-lg-0 my-3">
          <div class="bgi brad1 p-4 h-100">
            <h5>Validaciones técnicas</h5>
            <ul class="mb-0 lista-ul fa-ul">
              <li>
                <i class="fas fa-check v1"></i
                ><span>Verificación de integridad de datos.</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span>Comprobación de consistencia en tipos de datos.</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span>Validación de rangos y restricciones.</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span>Detección de anomalías y valores atípicos.</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-5 my-lg-0 my-3">
          <div class="bg10 brad1 p-4 h-100">
            <h5>Validaciones de negocio</h5>
            <ul class="mb-0 lista-ul fa-ul">
              <li>
                <i class="fas fa-check v1"></i
                ><span>Conformidad con reglas de negocio.</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span>Verificación de relaciones entre entidades.</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span>Comprobación de agregaciones y cálculos.</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span>Validación de tendencias y patrones esperados. </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div
            class="row justify-content-center align-items-center bg2 text-white p-4 brad"
          >
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/56.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                La implementación de pruebas automatizadas constituye una
                práctica esencial para mantener la calidad de las
                transformaciones a lo largo del tiempo. Estas pruebas deben
                ejecutarse de manera regular y documentar sus resultados de
                forma sistemática, permitiendo la detección temprana de
                problemas y la verificación continua de la calidad de los datos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_5_2" class="titulo-segundo color-acento-contenido">
        <h2>5.2 Casos de estudio prácticos</h2>
      </div>
      <p>
        La aplicación práctica de técnicas de transformación de datos se ilustra
        mejor a través de casos de estudio reales que demuestran tanto los
        desafíos enfrentados como las soluciones implementadas.
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-3 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/58.png" alt="" />
        </div>
        <div class="col-lg-9 my-lg-0 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
            <div titulo="Caso 1: Integración de datos de ventas minoristas">
              <p>
                Una cadena minorista nacional enfrentaba el desafío de integrar
                datos de ventas provenientes de múltiples sistemas punto de
                venta, cada uno con sus propias particularidades en formato y
                estructura. El proceso de transformación implementado incluía:
              </p>
              <p>Desafíos principales:</p>
              <ul class="lista-ul fa-ul mb-0 ps-3">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Inconsistencia en formatos de fecha y hora entre
                    sistemas.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span>Variaciones en la codificación de productos.</span>
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span>Discrepancias en las convenciones de nombres. </span>
                </li>
              </ul>
              <p>Solución implementada:</p>
              <ul class="lista-ul fa-ul mb-0 ps-3">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Desarrollo de un pipeline automatizado de
                    transformación.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Implementación de mapeos estandarizados para códigos de
                    productos.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span>Creación de un sistema de validación multinivel.</span>
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Establecimiento de procesos de reconciliación diaria.</span
                  >
                </li>
              </ul>
              <p>Resultados:</p>
              <ul class="lista-ul fa-ul mb-0 ps-3">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Reducción del 75 % en el tiempo de procesamiento.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Mejora significativa en la precisión de los reportes.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Mayor confiabilidad en el análisis de tendencias.
                  </span>
                </li>
              </ul>
            </div>
            <div titulo="Caso 2: Limpieza de datos de investigación médica">
              <p>
                Un instituto de investigación médica requería la consolidación y
                limpieza de datos de ensayos clínicos provenientes de múltiples
                centros de investigación.
              </p>
              <p>Desafíos principales:</p>
              <ul class="lista-ul fa-ul mb-0 ps-3">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span>Datos incompletos y valores faltantes.</span>
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Inconsistencias en la codificación de diagnósticos.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Necesidad de mantener la trazabilidad de todas las
                    transformaciones.</span
                  >
                </li>
              </ul>
              <p>Solución implementada:</p>
              <ul class="lista-ul fa-ul mb-0 ps-3">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Desarrollo de protocolos estandarizados de limpieza.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Implementación de sistemas de validación específicos del
                    dominio.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Creación de registros detallados de transformaciones.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Establecimiento de procesos de revisión por pares.</span
                  >
                </li>
              </ul>
              <p>Resultados:</p>
              <ul class="lista-ul fa-ul mb-0 ps-3">
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Mejora en la calidad y confiabilidad de los datos.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span
                    >Reducción significativa en el tiempo de preparación de
                    datos.</span
                  >
                </li>
                <li>
                  <i class="fas fa-check-circle color1"></i
                  ><span>Mayor facilidad en la reproducción de análisis. </span>
                </li>
              </ul>
            </div>
          </AccordionRED>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-7 my-lg-0 my-3">
          <div class="bg16 br-d p-4 brad">
            <p>
              La documentación detallada de estos casos de estudio, incluyendo
              las lecciones aprendidas y las mejores prácticas identificadas,
              proporciona insights valiosos para la implementación de soluciones
              similares en otros contextos. La experiencia acumulada en estos
              casos demuestra la importancia de:
            </p>
            <ul class="mb-0 lista-ul fa-ul">
              <li>
                <i class="fas fa-check v1"></i
                ><span>Establecer procesos claros y documentados.</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span>Implementar controles de calidad robustos.</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span>Mantener la trazabilidad de las transformaciones.</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span>Adaptar las soluciones al contexto específico.</span>
              </li>
              <li class="mb-0">
                <i class="fas fa-check v1"></i
                ><span class="mb-0"
                  >Fomentar la colaboración entre equipos técnicos y de negocio.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/57.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_5_3" class="titulo-segundo color-acento-contenido">
        <h2>5.3 Tendencias y recomendaciones</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-7 my-lg-0 my-3">
          <p>
            El campo de la transformación y limpieza de datos continúa
            evolucionando rápidamente, impulsado por avances tecnológicos y
            nuevas necesidades empresariales. Una de las tendencias más
            significativas es la creciente adopción de técnicas de
            automatización basadas en inteligencia artificial para la detección
            y corrección de anomalías en los datos. Los sistemas de aprendizaje
            automático están siendo incorporados cada vez más en los procesos de
            limpieza, permitiendo identificar patrones sutiles y realizar
            correcciones de manera más eficiente.
          </p>
        </div>
        <div class="col-lg-5 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/59.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div class="titulo-sexto color-acento-botones">
            <h5>Figura 3.</h5>
            <span>Tendencias en transformación de datos</span>
          </div>
          <div class="bgfig p-5 brad mb-2">
            <img
              class="img-a img-t"
              src="@/assets/curso/temas/60.svg"
              alt="La Figura 3 se denomina «Tendencias en transformación de datos» y presenta un diagrama circular concéntrico que muestra las principales tendencias en transformación de datos, donde en el núcleo se ubica la «Automatización Inteligente» como tendencia central."
            />
          </div>
          <figcaption>Fuente: OIT, 2024.</figcaption>
        </div>
      </div>
      <p class="mb-5">
        La democratización de las herramientas de transformación de datos
        representa otra tendencia significativa. Las plataformas modernas están
        evolucionando hacia interfaces más intuitivas que permiten a usuarios
        con diversos niveles de experiencia técnica participar en los procesos
        de transformación de datos. Esta tendencia está acompañada por un
        énfasis creciente en la transparencia y explicabilidad de las
        transformaciones realizadas.
      </p>
      <div class="row justify-content-center">
        <div class="col-lg-4 my-lg-0 my-3 j">
          <img class="img-a img-t" src="@/assets/curso/temas/61.png" alt="" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <div class="bgi brad1 p-4 mb-4">
            <p class="mb-0">
              El procesamiento en tiempo real de datos se está convirtiendo en
              un requisito cada vez más común. Las organizaciones están migrando
              hacia arquitecturas que permiten la transformación y limpieza de
              datos en tiempo real, facilitando la toma de decisiones más ágil y
              la respuesta inmediata a cambios en los datos.
            </p>
          </div>
          <p>
            La gobernanza de datos y el cumplimiento normativo continúan ganando
            importancia, especialmente en un contexto de regulaciones cada vez
            más estrictas sobre privacidad y protección de datos. Las
            organizaciones están implementando <em>frameworks</em> más robustos
            para asegurar que los procesos de transformación de datos cumplan
            con requisitos regulatorios mientras mantienen la eficiencia
            operativa.
          </p>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_5_4" class="titulo-segundo color-acento-contenido">
        <h2>5.4 Conclusiones</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-8 my-lg-0 my-3">
          <p>
            La limpieza y transformación de datos constituye un elemento
            fundamental en la cadena de valor de los datos modernos. A medida
            que las organizaciones continúan su transformación digital, la
            capacidad para procesar y preparar datos de manera eficiente se
            vuelve cada vez más crítica para el éxito empresarial.
          </p>
          <p>
            La adopción de mejores prácticas en documentación y control de
            calidad, combinada con la implementación de soluciones tecnológicas
            avanzadas, permite a las organizaciones maximizar el valor de sus
            datos mientras mantienen altos estándares de calidad y
            confiabilidad. Los casos de estudio presentados demuestran que el
            éxito en la transformación de datos requiere un equilibrio entre la
            excelencia técnica y la comprensión profunda del contexto
            empresarial.
          </p>
          <div class="bg5 brad1 p-4">
            <p class="mb-0">
              Las tendencias emergentes sugieren un futuro donde la
              transformación de datos será cada vez más automatizada e integrada
              en los procesos empresariales, pero también más accesible y
              transparente. La continua evolución de herramientas y metodologías
              promete facilitar estos procesos, mientras que el énfasis en la
              gobernanza y la calidad de datos asegura que los resultados sean
              confiables y utilizables.
            </p>
          </div>
        </div>
        <div class="col-lg-4 my-lg-0 my-3 j">
          <img class="img-a img-t" src="@/assets/curso/temas/62.png" alt="" />
        </div>
      </div>
      <div
        class="bloque-texto-g bloque-texto-g--inverso color-secundario p-3 p-sm-4 p-md-5 bg17"
      >
        <div
          class="bloque-texto-g__img"
          :style="{
            'background-image': `url(${require('@/assets/curso/temas/63.png')})`,
          }"
        ></div>
        <div class="bloque-texto-g__texto p-4">
          <p class="mb-0">
            En última instancia, el éxito en la transformación de datos no
            depende solo de la tecnología utilizada, sino también de la
            capacidad de las organizaciones para establecer procesos sólidos,
            mantener altos estándares de calidad y adaptarse a un panorama
            tecnológico en constante evolución. La inversión en capacitación,
            herramientas adecuadas y procesos bien diseñados continuará siendo
            esencial para aprovechar al máximo el potencial de los datos en el
            entorno empresarial moderno.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema5',
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
