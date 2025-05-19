<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido">
        <div class="titulo-principal__numero"><span>2</span></div>
        <h1>Importación y lectura de datos</h1>
      </div>
      <div class="row bg4 align-items-center">
        <div class="px-lg-5 px-4">
          <div class="row justify-content-center">
            <div class="col-lg-4 my-lg-0 my-3 j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/17.png"
                alt=""
              />
            </div>
            <div class="col-lg-5 my-lg-0 my-3">
              <div class="bg5 p-3 brad j1 h-100">
                <p class="mb-0">
                  La importación y lectura de datos representa una etapa
                  obligada en el proceso de análisis, constituyendo el punto de
                  entrada para toda la información que será procesada
                  posteriormente. Este capítulo explora las diferentes técnicas
                  y consideraciones necesarias para garantizar una importación
                  de datos eficiente y confiable, abordando tanto la lectura
                  desde archivos externos como la conexión con bases de datos.
                </p>
              </div>
            </div>
            <div class="col-lg-3 my-lg-0 my-3 j1">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/18.png"
                alt=""
              />
            </div>
          </div>
          <Separador> </Separador>
          <div id="t_2_1" class="titulo-segundo color-acento-contenido">
            <h2>2.1 Lectura de datos desde archivos externos</h2>
          </div>
        </div>
      </div>
      <p>
        La capacidad de leer datos desde diferentes tipos de archivos externos
        representa una habilidad fundamental en la práctica del análisis de
        datos. Los analistas se enfrentan constantemente al desafío de trabajar
        con múltiples formatos de archivo, cada uno con sus propias
        particularidades y requerimientos específicos.
      </p>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-lg-0 my-3">
          <div class="bgi brad p-3 mb-4 j1">
            <p class="mb-0">
              Los archivos CSV (valores separados por comas) constituyen uno de
              los formatos más utilizados en el intercambio de datos tabulares.
              Su popularidad radica en su simplicidad y universalidad,
              características que los hacen ideales para el intercambio de
              información entre diferentes sistemas y plataformas. Sin embargo,
              el trabajo con archivos CSV presenta desafíos particulares que
              deben abordarse cuidadosamente. La detección correcta de
              delimitadores, el manejo de caracteres especiales y la
              interpretación adecuada de tipos de datos son aspectos críticos
              que requieren atención detallada durante el proceso de lectura.
            </p>
          </div>
          <div class="row justify-content-center align-items-center mb-4">
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/19.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                Los archivos Excel, por su parte, ofrecen capacidades más
                sofisticadas para el almacenamiento y organización de datos. Su
                estructura más compleja permite el manejo de múltiples hojas de
                cálculo, fórmulas y formatos específicos. La lectura de estos
                archivos requiere una comprensión profunda de su estructura
                interna y la capacidad de manejar elementos como referencias
                entre celdas, fórmulas calculadas y formatos condicionales. El
                proceso de importación debe considerar cuidadosamente estos
                aspectos para garantizar la integridad de los datos extraídos.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/20.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="titulo-sexto color-acento-botones">
            <h5>Tabla 1.</h5>
            <span>Características y consideraciones de formatos comunes</span>
          </div>
          <div class="tabla-a color-acento-botones text-center">
            <table>
              <caption>
                Fuente: OIT, 2024.
              </caption>
              <thead>
                <tr>
                  <th>Formato</th>
                  <th>Ventajas</th>
                  <th>Desventajas</th>
                  <th>Casos de uso típicos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="fast-bold">CSV</td>
                  <td>
                    Simple y universal, tamaño reducido, fácil de procesar
                  </td>
                  <td>
                    Limitado a datos tabulares, problemas con caracteres
                    especiales
                  </td>
                  <td>
                    Intercambio de datos simples, <em>logs</em>, datos
                    transaccionales
                  </td>
                </tr>
                <tr>
                  <td class="fast-bold">Excel (.xlsx)</td>
                  <td>Soporte para múltiples hojas, fórmulas, formato rico</td>
                  <td>
                    Mayor tamaño de archivo puede contener macros no deseados
                  </td>
                  <td>Reportes financieros, datos con múltiples categorías</td>
                </tr>
                <tr>
                  <td class="fast-bold">JSON</td>
                  <td>Flexible, jerárquico, popular en web</td>
                  <td>Puede ser verbose, más complejo de procesar</td>
                  <td><i>APIs web</i>, datos semiestructurados</td>
                </tr>
                <tr>
                  <td class="fast-bold">XML</td>
                  <td>Altamente estructurado, autodescriptivo</td>
                  <td>Sintaxis compleja, <i>overhead</i> significativo</td>
                  <td>Intercambio de datos empresariales, configuraciones</td>
                </tr>
                <tr>
                  <td class="fast-bold">TXT</td>
                  <td>Máxima compatibilidad, simple</td>
                  <td>Sin estructura inherente, formato limitado</td>
                  <td><em>Logs</em>, datos no estructurados, texto plano</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_2_2" class="titulo-segundo color-acento-contenido">
        <h2>2.2 Conexión y extracción desde bases de datos</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10">
          <div
            class="bloque-texto-g bloque-texto-g--inverso color-secundario p-3 p-sm-4 p-md-5"
          >
            <div
              class="bloque-texto-g__img"
              :style="{
                'background-image': `url(${require('@/assets/curso/temas/21.png')})`,
              }"
            ></div>
            <div class="bloque-texto-g__texto p-4">
              <p class="mb-0">
                La conexión con bases de datos representa uno de los aspectos
                primarios en la obtención de datos para análisis. Este proceso
                requiere un enfoque sistemático que abarca desde la
                configuración inicial hasta la ejecución de consultas complejas,
                asegurando en todo momento la eficiencia y seguridad en el
                acceso a los datos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-9 my-lg-0 my-3">
          <AccordionRED tipo="a" clase-tarjeta="tarjeta bg7">
            <div titulo="Configuración de conexiones">
              <p>
                El proceso de configuración de conexiones a bases de datos
                comienza con la especificación precisa de los parámetros de
                conexión. Estos incluyen la dirección del servidor, el puerto de
                conexión, el nombre de la base de datos y las credenciales de
                acceso. La construcción de cadenas de conexión debe seguir las
                mejores prácticas de seguridad, evitando la exposición directa
                de credenciales en el código y utilizando variables de entorno o
                sistemas de gestión de secretos para manejar información
                sensible.
              </p>
              <p>
                La implementación de <i>pools</i> de conexiones constituye una
                estrategia fundamental para optimizar el rendimiento y la
                gestión de recursos. Un <i>pool</i> de conexiones mantiene un
                conjunto de conexiones preestablecidas que pueden reutilizarse,
                eliminando la sobrecarga asociada con la creación y destrucción
                frecuente de conexiones. La configuración adecuada del tamaño
                del <i>pool</i> es determinante: un <i>pool</i> demasiado
                pequeño puede crear cuellos de botella, mientras que uno
                excesivamente grande puede desperdiciar recursos del sistema.
              </p>
              <p>
                Los aspectos de seguridad en la configuración de conexiones
                requieren especial atención. La implementación de SSL/TLS para
                el cifrado de comunicaciones, la configuración de
                <i>firewalls</i> y la gestión de certificados digitales son
                elementos esenciales para garantizar una conexión segura.
                Además, la implementación de políticas de <i>timeout</i> y
                <i>retry</i> ayuda a manejar situaciones de conectividad
                intermitente o problemas de red.
              </p>
            </div>
            <div titulo="Consultas básicas y avanzadas">
              <p>
                El dominio de las consultas <i>SQL</i>, desde las más básicas
                hasta las más sofisticadas, resulta fundamental para la
                extracción efectiva de datos. Las consultas básicas constituyen
                el fundamento de la interacción con bases de datos relacionales.
                La sentencia <i>SELECT</i>, pilar de las consultas de
                recuperación, permite especificar exactamente qué datos se
                desean obtener. La cláusula <i>WHERE</i> facilita el filtrado
                preciso de registros, mientras que <i>ORDER BY </i>permite
                controlar la ordenación de los resultados. Las operaciones de
                agregación mediante<i> GROUP BY</i>, combinadas con funciones
                como <i>COUNT, SUM, AVG, MAX y MIN</i>, permiten obtener
                resúmenes estadísticos valiosos de los datos.
              </p>
              <p>
                Las consultas avanzadas expanden significativamente las
                capacidades de extracción y transformación de datos. Los<i>
                  JOINS</i
                >
                representan una herramienta fundamental para combinar datos de
                múltiples tablas. Las uniones pueden ser internas (<i
                  >INNER JOIN</i
                >), externas (<i>LEFT, RIGHT, FULL OUTER JOIN</i>) o cruzadas
                (<i>CROSS JOIN</i>), cada una con sus propios casos de uso y
                consideraciones de rendimiento. La selección del tipo adecuado
                de JOIN es clave para mantener la integridad de los datos y
                optimizar el rendimiento de las consultas.
              </p>
              <p>
                Las subconsultas o consultas anidadas permiten realizar
                operaciones más complejas, facilitando la implementación de
                lógica de negocio sofisticada. Estas pueden aparecer en la
                cláusula <i>SELECT, FROM, o WHERE</i>, y pueden ser
                correlacionadas o no correlacionadas. El uso efectivo de
                subconsultas requiere una comprensión profunda de su impacto en
                el rendimiento y las alternativas disponibles, como las Common
                <i>Table Expressions</i> (CTEs).
              </p>
              <p>
                Las funciones de ventana (<i>WINDOW FUNCTIONS</i>) representan
                una característica avanzada particularmente útil en el análisis
                de datos. Estas funciones permiten realizar cálculos a través de
                conjuntos de filas relacionadas con la fila actual, sin
                necesidad de agrupar los resultados. Funciones como
                <i>ROW_NUMBER(), RANK(), LAG(), y LEAD()</i> facilitan análisis
                sofisticados como el cálculo de diferencias entre filas
                consecutivas o la identificación de patrones en series
                temporales.
              </p>
              <p>
                La optimización de consultas constituye también es altamente
                relevante en el trabajo con bases de datos. Esto implica la
                comprensión y utilización efectiva de índices, la minimización
                de operaciones costosas como los <i>CROSS JOINS</i>, y el uso
                apropiado de hints cuando sea necesario. El análisis de planes
                de ejecución es fundamental para identificar y resolver
                problemas de rendimiento en consultas complejas.
              </p>
              <p>
                Los procedimientos almacenados y las funciones definidas por el
                usuario pueden utilizarse para encapsular lógica de consulta
                compleja y mejorar la reusabilidad del código. Sin embargo, su
                uso debe equilibrarse con la necesidad de mantener la lógica de
                negocio accesible y modificable desde las aplicaciones cliente.
              </p>
            </div>
          </AccordionRED>
        </div>
        <div class="col-lg-3 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/11.png" alt="" />
        </div>
      </div>
      <Separador> </Separador>
      <div id="t_2_3" class="titulo-segundo color-acento-contenido">
        <h2>2.3 Mejores prácticas en la importación</h2>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-5 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/23.png" alt="" />
        </div>
        <div class="col-lg-7 my-lg-0 my-3">
          <p>
            La implementación de mejores prácticas en la importación de datos
            busca garantizar la calidad y eficiencia del proceso de análisis. La
            validación de datos durante la importación constituye una primera
            línea de defensa contra errores y anomalías que podrían afectar
            análisis posteriores.
          </p>
          <p>
            El manejo de errores durante la importación debe ser robusto y
            contemplar diferentes escenarios problemáticos. Esto incluye la
            gestión de formatos incorrectos, valores faltantes, problemas de
            codificación y errores de conexión. La implementación de estrategias
            de manejo de errores adecuadas permite identificar y resolver
            problemas tempranamente en el proceso de análisis.
          </p>
        </div>
      </div>
      <div class="row justify-content-center mb-4">
        <div class="col-lg-8 my-lg-0 my-3">
          <div
            class="row justify-content-center align-items-center bg8 br-d p-4 brad mb-4"
          >
            <div class="col-lg-auto">
              <img
                class="img-a img-t"
                src="@/assets/curso/temas/24.png"
                alt=""
              />
            </div>
            <div class="col pt-lg-0 pt-md-4">
              <p class="mb-0">
                La documentación detallada del proceso de importación resulta
                medular para la reproducibilidad y mantenimiento del análisis.
                Esta documentación debe incluir detalles sobre las fuentes de
                datos, los parámetros de conexión utilizados, las
                transformaciones aplicadas durante la importación y cualquier
                consideración especial que deba tenerse en cuenta.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-2 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/25.png" alt="" />
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-5 my-lg-0 my-3">
          <img class="img-a img-t" src="@/assets/curso/temas/26.png" alt="" />
        </div>
        <div class="col-lg-7 my-lg-0 my-3">
          <p>
            La optimización del rendimiento en la importación de datos requiere
            considerar factores como el tamaño de los lotes de lectura, la
            gestión de la memoria y la paralelización de operaciones cuando sea
            posible. La selección de las estrategias de optimización apropiadas
            depende tanto de las características de los datos como de las
            capacidades del sistema.
          </p>
          <p>
            El control de versiones de los datos importados representa otra
            consideración importante, especialmente en entornos donde los datos
            se actualizan regularmente. La implementación de un sistema de
            control de versiones permite rastrear cambios en los datos y
            mantener la consistencia en los análisis a lo largo del tiempo.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema2',
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
