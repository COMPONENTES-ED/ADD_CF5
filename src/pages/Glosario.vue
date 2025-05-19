<template>
  <div class="curso-main-container glosario">
    <BannerInterno icono="fas fa-atlas" titulo="Glosario"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div
        v-for="letra in orderedData"
        :key="'letra-' + letra.letra"
        class="glosario__letra-item mb-2"
      >
        <div class="glosario__letra-item__letra me-4">
          <div class="glosario__letra-item__letra__icono">
            <span>{{ letra.letra }}</span>
          </div>
        </div>
        <div class="glosario__letra-item__texto">
          <p
            v-for="termino in letra.terminos"
            :key="termino.termino"
            class="mb-3"
          >
            <strong><i class="lista-ul__vineta"></i></strong
            ><strong v-html="termino.terminoHtml || termino.termino"> </strong
            ><strong>: </strong><span v-html="termino.significado"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plantillaMixins from '@/js/plantillaMixins'
export default {
  name: 'Glosario',
  mixins: [plantillaMixins],
  data() {
    return {
      glosarioData: [
        {
          termino: 'Análisis exploratorio',
          significado:
            'Proceso inicial de investigación de datos para descubrir patrones, detectar anomalías y verificar suposiciones mediante estadísticas resumidas y representaciones gráficas.',
        },
        {
          termino: '<i>Data Frame</i>',
          significado:
            'Estructura de datos bidimensional que organiza los datos en filas y columnas, similar a una hoja de cálculo o tabla de base de datos. Es fundamental en lenguajes como R y Python para el análisis de datos.',
        },
        {
          termino: 'ETL  (<i>Extract, Transform, Load</i>)',
          significado:
            'Proceso que involucra la extracción de datos de diversas fuentes, su transformación para satisfacer necesidades operativas y la carga en un destino final.',
        },
        {
          termino: '<i>Firewall</i>',
          significado:
            'Sistema de seguridad que monitorea y controla el tráfico de red entrante y saliente basado en reglas de seguridad predeterminadas. Es crucial en la protección de conexiones a bases de datos.',
        },
        {
          termino: '<i>Framework</i>',
          significado:
            'Marco de trabajo que proporciona una estructura estandarizada y mejores prácticas para el desarrollo de soluciones. Incluye herramientas, bibliotecas y convenciones predefinidas.',
        },
        {
          termino: '<i>Logging</i>',
          significado:
            'Proceso de registro y almacenamiento de eventos, errores y actividades del sistema, crucial para el monitoreo, depuración y auditoría de procesos de transformación de datos.',
        },
        {
          termino: '<i>Parsing</i>',
          significado:
            'Proceso de analizar una secuencia de símbolos o texto para determinar su estructura gramatical con respecto a una gramática formal. Fundamental en la lectura y procesamiento de archivos.',
        },
        {
          termino: '<i>Pipeline</i>',
          significado:
            'Secuencia de procesos conectados donde la salida de uno es la entrada del siguiente. En transformación de datos, representa un flujo de trabajo automatizado de procesamiento.',
        },
        {
          termino: '<i>Pool de conexiones</i>',
          significado:
            'Caché de conexiones a bases de datos que se mantienen disponibles para reutilización, mejorando el rendimiento y la gestión de recursos en aplicaciones.',
        },
        {
          termino: '<i>Scripts</i>',
          significado:
            'Programas generalmente simples que automatizan la ejecución de tareas que podrían realizarse paso a paso manualmente.',
        },
        {
          termino: '<i>Timestamp</i>',
          significado:
            'Marca temporal que indica la fecha y hora en que ocurrió un evento particular, fundamental en el seguimiento y ordenamiento de datos temporales.',
        },
        {
          termino: 'Validación cruzada',
          significado:
            'Técnica para evaluar la calidad y robustez de un modelo estadístico, dividiendo los datos en subconjuntos para prueba y entrenamiento.',
        },
        {
          termino: '<i>Winsorización</i>',
          significado:
            'Técnica estadística para tratar valores atípicos, donde los valores extremos se reemplazan por valores menos extremos en un determinado percentil.',
        },
        {
          termino: '<i>Workflow</i>',
          significado:
            'Flujo de trabajo que representa la secuencia de procesos o pasos necesarios para completar una tarea específica en el procesamiento de datos.',
        },
      ],
    }
  },
  computed: {
    orderedData() {
      const newGlosarioData = [...this.glosarioData]
      newGlosarioData.forEach(element => {
        element.significado =
          element.significado.charAt(0).toLowerCase() +
          element.significado.slice(1)
      })

      const sortedData = [...newGlosarioData].reduce((r, e) => {
        const letra = this.quitarAcentos(e.termino.toLowerCase())[0]
        if (!r[letra]) r[letra] = { letra, terminos: [e] }
        else r[letra].terminos.push(e)
        return r
      }, {})

      const soloLetras = Object.keys(sortedData).sort()
      const newSortedData = []

      soloLetras.forEach(element => {
        const letraObj = sortedData[element]
        let terminos = letraObj.terminos

        if (terminos.length > 1) {
          const terminosOrdenados = []
          const soloTerminos = letraObj.terminos
            .map(termObj => termObj.termino)
            .sort((a, b) => {
              const an = this.quitarAcentos(a).toLowerCase()
              const bn = this.quitarAcentos(b).toLowerCase()
              if (an < bn) return -1
              if (bn < an) return 1
              return 0
            })
          soloTerminos.forEach(term => {
            terminosOrdenados.push(
              terminos.find(termino => termino.termino === term),
            )
          })
          terminos = terminosOrdenados
        }
        newSortedData.push({
          letra: letraObj.letra.toUpperCase(),
          terminos: terminos,
        })
      })
      return newSortedData
    },
  },
}
</script>

<style lang="sass">
.glosario
  &__letra-item
    display: flex
    &__texto
      padding-top: 5px
    &__letra
      &__icono
        width: 32px
        height: 32px
        position: relative
        line-height: 1em
        border-radius: 50%
        background-color: $color-sistema-d

        span
          position: absolute
          left: 50%
          top: 50%
          transform: translate(-50%,-50%)
          font-size: 1.1em
          font-weight: $base-black-font-weight
</style>
