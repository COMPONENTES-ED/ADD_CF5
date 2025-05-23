<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>3</span></div>
        <h1>Técnicas de transformación de datos</h1>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div
            class="row justify-content-center align-items-center bg2 text-white p-4 brad"
          >
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/27.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                La transformación de datos también soporta el proceso de
                análisis, es en este punto donde los datos crudos se convierten
                en información procesable y significativa. Este proceso requiere
                un conjunto diverso de técnicas y metodologías que permiten
                adaptar, modificar y reestructurar los datos para satisfacer las
                necesidades específicas del análisis. En este capítulo se
                exploran las principales técnicas de transformación, desde la
                conversión básica de tipos de datos hasta operaciones más
                complejas de clasificación y ordenamiento.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_3_1" class="titulo-segundo color-acento-contenido">
        <h2>3.1 Conversión de tipos de datos</h2>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-auto j1">
          <img class="img-a img-t" src="@/assets/curso/temas/28.png" alt="" />
        </div>
        <div class="col my-lg-0 my-3">
          <p>
            La conversión de tipos de datos representa una operación fundamental
            en el proceso de transformación. Esta tarea, aparentemente simple,
            requiere una comprensión profunda de los diferentes tipos de datos y
            sus características, así como de las implicaciones y posibles
            riesgos asociados con cada conversión.
          </p>
          <div class="bgi brad p-3 mb-4 j1">
            <p class="mb-0">
              Los tipos de datos numéricos requieren especial atención durante
              el proceso de conversión. La transformación entre enteros y
              números de punto flotante, por ejemplo, puede introducir problemas
              de precisión que deben manejarse cuidadosamente. La pérdida de
              precisión en cálculos financieros o científicos puede tener
              consecuencias significativas en los resultados del análisis.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-6 my-lg-0 my-3">
          <div class="bg1 brad p-3 mb-4 j1 h-100">
            <p class="mb-0">
              La conversión de fechas y horas presenta desafíos particulares
              debido a la diversidad de formatos existentes y las
              consideraciones de zonas horarias. El manejo adecuado de estos
              tipos de datos requiere atención a detalles como el formato de
              entrada, la zona horaria de referencia y el manejo de casos
              especiales como años bisiestos o cambios de horario de verano.
            </p>
          </div>
        </div>
        <div class="col-lg-6 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/29.png" alt="" />
        </div>
      </div>
      <div class="row bg11 align-items-center">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-center mb-5">
            <div class="col-lg-5 my-lg-0 my-3 j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/30.png"
                alt=""
              />
            </div>
            <div class="col-lg-7 my-lg-0 my-3">
              <p>
                Las conversiones de tipos de texto a numéricos deben
                implementarse con robustez para manejar casos excepcionales.
                Esto incluye la gestión de diferentes separadores decimales,
                formatos regionales y caracteres especiales. Una estrategia
                común es la implementación de validaciones previas a la
                conversión para identificar posibles problemas:
              </p>
              <ul class="mb-0 lista-ul fa-ul">
                <li>
                  <i class="fas fa-check v1"></i
                  ><span
                    >Validación de formato (asegurar que el texto sigue un
                    patrón válido).</span
                  >
                </li>
                <li>
                  <i class="fas fa-check v1"></i
                  ><span>Detección de valores nulos o vacíos.</span>
                </li>
                <li>
                  <i class="fas fa-check v1"></i
                  ><span>Identificación de caracteres no permitidos.</span>
                </li>
                <li>
                  <i class="fas fa-check v1"></i
                  ><span>Verificación de rangos válidos. </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="titulo-sexto color-acento-botones">
                <h5>Tabla 2.</h5>
                <span>Consideraciones en la conversión de tipos de datos</span>
              </div>
              <div class="tabla-a color-acento-botones text-center">
                <table>
                  <caption>
                    Fuente: OIT, 2024.
                  </caption>
                  <thead>
                    <tr>
                      <th>Tipo de conversión</th>
                      <th>Consideraciones clave</th>
                      <th>Riesgos potenciales</th>
                      <th>Estrategias de mitigación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="fast-bold">Texto a número</td>
                      <td>
                        Formato regional (p. ej., ".", "," como separador
                        decimal), separadores de miles
                      </td>
                      <td>
                        Pérdida de precisión, valores inválidos (p. ej.,
                        "1,000.5" con "," como separador decimal)
                      </td>
                      <td>
                        Validación previa con expresiones regulares, manejo de
                        excepciones, funciones de conversión específicas del
                        lenguaje
                      </td>
                    </tr>
                    <tr>
                      <td class="fast-bold">Número a texto</td>
                      <td>
                        Precisión decimal, formato de salida (p. ej., número de
                        decimales, separadores de miles)
                      </td>
                      <td>
                        Truncamiento, pérdida de información significativa
                      </td>
                      <td>
                        Especificación explícita del formato de salida, redondeo
                        controlado
                      </td>
                    </tr>
                    <tr>
                      <td class="fast-bold">Texto a fecha</td>
                      <td>
                        Formatos de entrada (p. ej., "dd/mm/aaaa",
                        "aaaa-mm-dd"), zonas horarias
                      </td>
                      <td>
                        Ambigüedad en fechas (p. ej., "01/02/2023"), datos
                        inválidos (p. ej., "30/02/2023")
                      </td>
                      <td>
                        <i>Parsing</i> robusto con bibliotecas especializadas,
                        validación de formato con expresiones regulares o
                        funciones de validación de fechas
                      </td>
                    </tr>
                    <tr>
                      <td class="fast-bold">Número a fecha</td>
                      <td>
                        Epoch o sistema de referencia temporal, unidades de
                        tiempo (p. ej., segundos, milisegundos)
                      </td>
                      <td>
                        Interpretación incorrecta de la unidad de tiempo,
                        desbordamiento (valores fuera del rango representable)
                      </td>
                      <td>
                        Validación de rango, documentación clara del sistema de
                        referencia y unidades
                      </td>
                    </tr>
                    <tr>
                      <td class="fast-bold">Categorías a números</td>
                      <td>
                        Esquema de codificación (p. ej.,
                        <i>one-hot encoding, label encoding</i>), orden de las
                        categorías
                      </td>
                      <td>
                        Pérdida de contexto o relaciones entre categorías,
                        introducción de sesgo en el orden
                      </td>
                      <td>
                        Mapeo explícito entre categorías y números, preservación
                        de metadatos sobre el esquema de codificación
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Separador> </Separador>
          <div id="t_3_2" class="titulo-segundo color-acento-contenido">
            <h2>3.2 Clasificación y ordenamiento</h2>
          </div>
          <div class="row justify-content-center mb-5">
            <div class="col-lg-8 my-lg-0 my-3">
              <p>
                La clasificación y ordenamiento de datos impacta directamente en
                la calidad y utilidad del análisis posterior. Estas operaciones
                van más allá del ordenamiento alfabético o numérico, abarcando
                técnicas sofisticadas que consideran múltiples criterios y
                relaciones complejas entre datos
              </p>
              <p>
                El proceso de clasificación implica la organización sistemática
                de datos en categorías significativas. Este proceso requiere una
                comprensión profunda del dominio del problema y de las
                relaciones inherentes entre los datos. La clasificación puede
                basarse en criterios simples o en combinaciones complejas de
                múltiples atributos. Los métodos de clasificación pueden variar
                según la naturaleza de los datos:
              </p>
            </div>
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/32.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-4 my-lg-0 my-3 j1">
          <img class="img-a img-t" src="@/assets/curso/temas/33.png" alt="" />
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <div class="bgi brad1 p-4 h-100">
            <img class="img-t mb-2" src="@/assets/curso/temas/10.svg" alt="" />
            <h5 class="text-center">Para datos numéricos</h5>
            <ul class="mb-0 lista-ul fa-ul">
              <li>
                <i class="fas fa-check v1"></i
                ><span>Clasificación por rangos.</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span>Categorización por percentiles.</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span>Agrupación por intervalos.</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span>Normalización y estandarización.</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span>Discretización basada en frecuencia. </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <div class="bg12 brad1 p-4 h-100">
            <img class="img-t mb-2" src="@/assets/curso/temas/10.svg" alt="" />
            <h5 class="text-center">Para datos categóricos</h5>
            <ul class="mb-0 lista-ul fa-ul">
              <li>
                <i class="fas fa-check v1"></i
                ><span>Agrupación por jerarquías.</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span>Clasificación por frecuencia.</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span>Consolidación de categorías.</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span>Mapeo a taxonomías estándar.</span>
              </li>
              <li>
                <i class="fas fa-check v1"></i
                ><span>Reducción de cardinalidad. </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p>
        El ordenamiento de datos, por su parte, requiere la definición clara de
        criterios de ordenación y la gestión adecuada de casos especiales. La
        implementación de esquemas de ordenamiento debe considerar aspectos como
        la estabilidad del ordenamiento, el manejo de valores nulos y la
        eficiencia computacional en grandes conjuntos de datos.
      </p>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div
            class="bloque-texto-g bloque-texto-g--inverso color-secundario p-3 p-sm-4 p-md-5"
          >
            <div
              class="bloque-texto-g__img"
              :style="{
                'background-image': `url(${require('@/assets/curso/temas/34.png')})`,
              }"
            ></div>
            <div class="bloque-texto-g__texto p-4">
              <p class="mb-0">
                Las estrategias de ordenamiento múltiple, donde los datos se
                ordenan según varios criterios en secuencia, requieren una
                consideración cuidadosa del orden de precedencia y las reglas de
                desempate. Estas operaciones son particularmente relevantes en
                análisis que involucran series temporales o datos
                jerárquicos.<br />
                La optimización del rendimiento en operaciones de clasificación
                y ordenamiento es necesaria cuando se trabaja con grandes
                volúmenes de datos. Esto puede incluir la implementación de
                índices, la selección de algoritmos eficientes y la
                consideración de estrategias de procesamiento paralelo cuando
                sea apropiado.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_3_3" class="titulo-segundo color-acento-contenido">
        <h2>3.3 Eliminación de datos innecesarios</h2>
      </div>
      <div class="row justify-content-center align-items-center mb-4">
        <div class="col-lg-auto">
          <img class="img-a img-t" src="@/assets/curso/temas/35.png" alt="" />
        </div>
        <div class="col pt-lg-0 pt-md-4">
          <p class="mb-0">
            La eliminación de datos innecesarios es una labor de gran cuidado y
            significancia en el proceso de transformación de datos, la cual
            contribuye tanto a la calidad del análisis como a la eficiencia del
            procesamiento. Este proceso requiere un equilibrio o armonía entre
            la reducción de la redundancia y la preservación de información
            valiosa.
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="row justify-content-center bg13 brad1 p-4 mb-4 pb-0">
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/36.png"
                alt=""
              />
            </div>
            <div class="col-lg-8 my-lg-0 my-3">
              <div class="bg1 brad1 p-4">
                <p class="mb-0">
                  La identificación de datos redundantes representa el primer
                  paso en este proceso. La redundancia puede manifestarse de
                  diversas formas, desde duplicados exactos hasta redundancias
                  funcionales más sutiles, donde la misma información se
                  representa de diferentes maneras. La detección de estas
                  redundancias requiere un análisis cuidadoso de las relaciones
                  entre variables y la comprensión profunda del contexto del
                  negocio.
                </p>
              </div>
            </div>
          </div>
          <div class="bgi brad1 p-4">
            <p class="mb-0">
              La eliminación de variables irrelevantes debe abordarse con
              particular atención al contexto del análisis. Una variable que
              parece irrelevante en un contexto puede resultar determinante en
              otro. El proceso de selección debe considerar factores como la
              correlación entre variables, la importancia para el negocio y el
              potencial impacto en análisis futuros. Las decisiones de
              eliminación deben documentarse cuidadosamente, incluyendo la
              justificación y las posibles implicaciones.
            </p>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_3_4" class="titulo-segundo color-acento-contenido">
        <h2>3.4 Creación de nuevas variables</h2>
      </div>
      <div class="row bg4 align-items-center">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-center align-items-center mb-4">
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/38.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                La creación de nuevas variables representa una oportunidad para
                enriquecer el análisis mediante la generación de características
                derivadas que capturen información relevante no presente
                explícitamente en los datos originales. Este proceso requiere
                creatividad y comprensión profunda tanto del dominio del
                problema como de las técnicas analíticas disponibles.
              </p>
            </div>
          </div>
          <div class="row justify-content-center mb-5">
            <div class="col-lg-8 my-lg-0 my-3">
              <p>
                Las transformaciones matemáticas constituyen una fuente común de
                nuevas variables. Estas pueden incluir operaciones básicas entre
                variables existentes, transformaciones no lineales, o cálculos
                más complejos basados en fórmulas específicas del dominio. La
                selección de transformaciones apropiadas debe guiarse por
                consideraciones teóricas y prácticas, incluyendo la
                interpretabilidad de las nuevas variables y su utilidad para el
                análisis posterior.
              </p>
              <p>
                La agregación temporal representa otra técnica valiosa para la
                creación de variables derivadas. En el análisis de series
                temporales, por ejemplo, la creación de medias móviles, tasas de
                cambio o indicadores de estacionalidad puede proporcionar
                insights valiosos sobre patrones y tendencias en los datos. La
                selección de ventanas temporales apropiadas y métodos de
                agregación requiere consideración cuidadosa del contexto y los
                objetivos del análisis.
              </p>
            </div>
            <div class="col-lg-4 my-lg-0 my-3">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/37.png"
                alt=""
              />
            </div>
          </div>
          <Separador> </Separador>
          <div id="t_3_4" class="titulo-segundo color-acento-contenido">
            <h2>3.5 Funciones de transformación esenciales</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-auto j1">
          <img class="img-a img-t" src="@/assets/curso/temas/39.png" alt="" />
        </div>
        <div class="col my-lg-0 my-3">
          <p>
            Las funciones de transformación constituyen el conjunto de
            herramientas fundamentales que todo analista de datos debe dominar
            para realizar transformaciones efectivas. Estas funciones abarcan
            desde operaciones simples hasta transformaciones complejas que
            pueden aplicarse en diversos contextos analíticos.
          </p>
          <div class="bgi brad p-3 mb-4 j1">
            <p class="mb-0">
              Las funciones de normalización y estandarización se emplean para
              hacer comparables variables con diferentes escalas. La
              normalización min-max, la estandarización z-score y otras técnicas
              similares permiten llevar variables a rangos comparables mientras
              preservan las relaciones relativas entre observaciones. La
              selección de la técnica apropiada debe considerar la distribución
              de los datos y los requisitos específicos del análisis posterior.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-lg-0 my-3">
          <p>
            Las funciones de manejo de valores atípicos representan otro
            conjunto clave de herramientas. Estas funciones pueden incluir
            métodos de winsorización, que limitan valores extremos a ciertos
            percentiles, o técnicas de transformación robusta que reducen la
            influencia de valores atípicos en el análisis. La implementación de
            estas funciones debe equilibrar la necesidad de manejar valores
            extremos con la importancia de preservar información relevante.
          </p>
          <div class="bg5 brad p-3 mb-4 j1">
            <p class="mb-0">
              Las funciones de imputación de valores faltantes constituyen una
              categoría rotunda de transformaciones. Estas pueden variar desde
              métodos simples como la imputación por media o mediana, hasta
              técnicas más sofisticadas basadas en modelos predictivos o métodos
              de imputación múltiple. La selección del método de imputación debe
              considerar el mecanismo de ausencia de datos, el patrón de valores
              faltantes y el impacto potencial en el análisis posterior.
            </p>
          </div>
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/40.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div class="titulo-sexto color-acento-botones">
            <h5>Tabla 3.</h5>
            <span
              >Funciones de transformación esenciales y sus aplicaciones</span
            >
          </div>
          <div class="tabla-a color-acento-botones text-center">
            <table>
              <caption>
                Fuente: OIT, 2024.
              </caption>
              <thead>
                <tr>
                  <th>Tipo de Función</th>
                  <th>Propósito</th>
                  <th>Consideraciones clave</th>
                  <th>Ejemplos de aplicación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="fast-bold">Normalización</td>
                  <td>
                    Estandarizar escalas de variables a un rango común (p. ej.,
                    0-1)
                  </td>
                  <td>
                    Preservar las relaciones entre valores, impacto de
                    <i>outliers</i> en la transformación
                  </td>
                  <td>
                    Preparación de datos para modelos de
                    <i>Machine Learning</i>, facilitar la comparación de
                    variables con diferentes unidades.
                  </td>
                </tr>
                <tr>
                  <td class="fast-bold">Agregación</td>
                  <td>
                    Resumir datos a un nivel superior de granularidad (p. ej.,
                    de diario a mensual)
                  </td>
                  <td>
                    Elección de la función de agregación (p. ej., suma,
                    promedio, máximo), pérdida de detalle individual
                  </td>
                  <td>
                    Análisis de series temporales, creación de reportes a nivel
                    gerencial.
                  </td>
                </tr>
                <tr>
                  <td class="fast-bold">Imputación</td>
                  <td>Manejar valores faltantes en un conjunto de datos</td>
                  <td>
                    Mecanismo de ausencia de datos (aleatorio, no aleatorio),
                    posible introducción de sesgo
                  </td>
                  <td>
                    Asegurar la completitud de los datos para análisis
                    estadístico, aplicación de algoritmos que no toleran valores
                    faltantes.
                  </td>
                </tr>
                <tr>
                  <td class="fast-bold">Discretización</td>
                  <td>Convertir una variable continua en categórica</td>
                  <td>
                    Número de intervalos o puntos de corte, pérdida de
                    información por la agrupación, interpretabilidad de las
                    categorías resultantes
                  </td>
                  <td>
                    Creación de rangos de edad (p. ej., "joven", "adulto",
                    "mayor"), análisis de datos con histogramas.
                  </td>
                </tr>
                <tr>
                  <td class="fast-bold">Codificación</td>
                  <td>
                    Transformar variables categóricas en una representación
                    numérica
                  </td>
                  <td>
                    Cardinalidad de la variable (número de categorías), problema
                    de "<i>sparse data</i>" con <i>one-hot encoding</i>
                  </td>
                  <td>
                    <i>One-hot encoding</i> para variables nominales,
                    <i>label encoding</i> o <i>encoding ordinal</i> para
                    variables ordinales.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/41.png" alt="" />
        </div>
        <div class="col-lg-8 my-lg-0 my-3">
          <p>
            La aplicación efectiva de estas funciones de transformación requiere
            tanto comprensión técnica como también juicio analítico para
            seleccionar las transformaciones más apropiadas en cada contexto. La
            documentación clara de las transformaciones aplicadas y sus
            parámetros es decisiva para la reproducibilidad del análisis y la
            interpretación correcta de los resultados.
          </p>
          <p>
            La automatización de transformaciones frecuentes mediante funciones
            personalizadas o pipelines de procesamiento puede mejorar
            significativamente la eficiencia y consistencia del proceso de
            transformación. Sin embargo, esta automatización debe implementarse
            con cuidado, incluyendo validaciones apropiadas y mecanismos de
            manejo de excepciones.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema3',
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
