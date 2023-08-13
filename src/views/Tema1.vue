<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 1
      h1 Los procesos logísticos

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para el cumplimiento de los objetivos planteados en las empresas se hace necesario implementar 5 acciones o procesos asociados, que dan como resultado la prestación óptima de un servicio o la entrega de un producto en las condiciones contractuales estipuladas entre el cliente y la empresa productora del bien. Dichos procesos son los siguientes:
    
    .col-xl-10.m-auto.mt-5
      .row
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 01
            figure.text-center
              img(src="@/assets/curso/tema1/2.svg" style="display:inline;max-width:200px;")
            p.mt-4.fw-bold.text-center.mb-0 Compras
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 02
            figure.text-center
              img(src="@/assets/curso/tema1/3.svg" style="display:inline;max-width:200px;")
            p.mt-4.fw-bold.text-center.mb-0 Servicio al cliente
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 03
            figure.text-center
              img(src="@/assets/curso/tema1/4.svg" style="display:inline;max-width:200px;")
            p.mt-4.fw-bold.text-center.mb-0 Gestión de inventarios
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 04
            figure.text-center
              img(src="@/assets/curso/tema1/5.svg" style="display:inline;max-width:200px;")
            p.mt-4.fw-bold.text-center.mb-0 Almacenamiento
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 05
            figure.text-center
              img(src="@/assets/curso/tema1/6.svg" style="display:inline;max-width:200px;")
            p.mt-4.fw-bold.text-center.mb-0 Transporte
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_1 1.1 Planeación estratégica
    
    .row
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/7.png" data-aos="zoom-in-right")
      .col-lg-9(style="place-self:center;")
        p(data-aos="zoom-in-left") La empresa o corporación dentro de su programa de diseño orgánico establece metas y objetivos basados en las proyecciones supeditadas a la capacidad de producción y condiciones del mercado. De tal manera, son creados los planes estratégicos como herramientas que contengan un horizonte específico (corto, mediano y largo plazo), responsables de ejecución, recursos a utilizar y las acciones a tomar en determinadas circunstancias del mercado.
        .cajon.color-primario.mt-4.p-4(style="background-color:#F2F6FE;")
          p.mb-0(data-aos="zoom-in") Los elementos a tener en cuenta en el desarrollo de un plan estratégico de la empresa son los siguientes:
    
    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Visión") Es el objetivo final de la empresa, indica las condiciones donde se desea llegar a futuro (2, 5 y 10 años). La visión se construye con la proyección de un nuevo lugar de acción donde se verá la empresa a corto, mediano y largo plazo.
          p.text-small(numero="2" titulo="Misión") Es el motivo por el cual ha sido creada la empresa, detalla el fin comercial y las características específicas del desempeño operativo.
          p.text-small(numero="3" titulo="Objetivos estratégicos") Comprenden las líneas principales por las cuales la empresa aborda el mercado, los productos que ofrece, las áreas objetivo y los clientes tipo, sensibles de ser cuantificables y medibles.
          p.text-small(numero="4" titulo="Objetivos operativos") Comprenden las líneas principales por las cuales la empresa aborda el mercado, los productos que ofrece, las áreas objetivo y los clientes tipo, sensibles de ser cuantificables y medibles.
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/8.svg" data-aos="zoom-in-left")
    
    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/9.svg" data-aos="zoom-in-left")
      .col-lg-7(style="place-self:center;")
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Plan de acciones") Determina los objetivos asignados a cada área y persona responsable de las actividades comprometidas en las líneas estratégicas, para que tomen acciones necesarias en la asignación de recursos y en el control de los resultados.
          p.text-small(numero="2" titulo="Estrategias") Es el plan de acción que muestra el curso y el uso total de las herramientas dispuestas para el cumplimiento de los objetivos establecidos.
          p.text-small(numero="3" titulo="Programas") Describe la totalidad de acciones, ejecutores y horizonte requeridos para llevar a la práctica los planes del negocio
          p.text-small(numero="4" titulo="Presupuestos") Es la etapa fundamental del plan estratégico, debido a que se asignan los recursos necesarios para implementar las estrategias, la cual es útil como herramienta en el control de resultados por medio del cumplimiento del presupuesto.
    
    .mt-5.p-3.ps-4.pe-4.mb-4(style="max-width:fit-content;background-color:#57DBD8;border-radius:0px 30px 0px 30px;" data-aos="zoom-in-right")
      h4.mb-0 Matriz FODA
    
    .row
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/10.png" data-aos="zoom-in-right")
      .col-lg-9(style="place-self:center;")
        p(data-aos="zoom-in-left") Es una herramienta analítica que permite trabajar la información de la organización sobre sus fortalezas, oportunidades, debilidades (ambiente interno) y amenazas (ambiente externo), convirtiéndose en un mecanismo de control para identificar oportunidades de mejora y fortalecer las ventajas en el área logística.
        .cajon.color-primario.mt-4.p-4(style="background-color:#F2F6FE;")
          p.mb-0(data-aos="zoom-in") Esta metodología es aplicable a las diferentes áreas, dependencias, productos, funciones específicas o a toda la empresa, con el fin de conocer el estado y aspectos relevantes de análisis interno y externo, a fin de identificar estrategias para minimizar las amenazas - debilidades y potencializar las fortalezas – oportunidades.
    
    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .h-100(style="background-color:#91B3FA;position:relative;" data-aos="zoom-in-up")
          div.d-none.d-md-block(style="position:absolute;width:100%;right:20px;top:37%;")
            figure.text-end
              img(src="@/assets/curso/tema1/13.svg" style="max-width:100px;display:inline;")
          figure
            img(src="@/assets/curso/tema1/11.png")
          .p-4
            h5 Oportunidades y amenazas
            p El análisis de la matriz FODA inicia con la recopilación de información externa, es decir, los aspectos que no son manipulados por la empresa, como la competencia directa o su entorno operativo; condiciones de tráfico con la flota de transporte, actualidad económica y política de la región donde esté operando la empresa.
      .col-lg
        .h-100(style="background-color:#57DBD8;position:relative;" data-aos="zoom-in-up")
          div.d-none.d-md-block(style="position:absolute;width:100%;right:20px;top:37%;")
            figure.text-end
              img(src="@/assets/curso/tema1/13.svg" style="max-width:100px;display:inline;")
          figure
            img(src="@/assets/curso/tema1/11.png")
          .p-4
            h5 Debilidades y fortalezas
            p Es el diagnóstico interno con base en las debilidades y fortalezas de la organización, desde el punto de vista operativo, administrativo, orgánico y presupuestal de la estructura empresarial. Las fortalezas son los atributos o factores positivos útiles para crear oportunidades y poseer una ventaja competitiva. Mientras que las debilidades son los aspectos internos perjudiciales que obstaculizan la ejecución del objetivo, así las cosas, es necesario reconocerlas con el fin de elaborar estrategias que solucionen los problemas operativos y organizacionales. 
    
    p.mt-5(data-aos="zoom-in") La siguiente tabla es un ejemplo de cómo organizar los elementos identificados en el análisis.

    .col-xl-8.col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        h5 Tabla 1.
        span Matriz FODA
      .tabla-a.color-primario.mt-4
        table
          caption.fw-normal.p-3.mt-4(style="background-color:#F6F6F6;") #[strong Nota.] Codina (2011). 
          tbody
            tr(style="border-top:6px #91B3FA solid;")
              th.text-center.bg-white(rowspan="2") Matriz #[br] FODA
              th.text-center.p-4(style="background-color:#E9F0FE;" colspan="2") Análisis del entorno
            tr.bg-white
              td.text-center.p-4.fw-bold Oportunidades
              td.text-center.p-4.fw-bold Amenazas
            tr(style="background-color:#F9FBFF;")
              td.text-center.p-4.fw-bold Análisis interno
              td.text-center.p-4 
              td.text-center.p-4 
            tr(style="background-color:#fff;")
              td.text-center.p-4 Fortalezas
              td.text-center.p-4 Estrategias ofensivas
              td.text-center.p-4 Estrategias de defensa
            tr(style="background-color:#F9FBFF;")
              td.text-center.p-4 Debilidades
              td.text-center.p-4 Estrategias de adaptación
              td.text-center.p-4 Estartegias de supervivencia
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_2 1.2 Plan de operación logística
    
    .row
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/14.svg" data-aos="zoom-in-right")
      .col-lg-9(style="place-self:center;")
        p(data-aos="zoom-in-left") El plan de operación logística analiza la totalidad de las acciones involucradas en los procesos productivos de la organización, a partir del abastecimiento de los productos básicos para la elaboración de los productos comercializados hasta la entrega del producto final al cliente. Dichas acciones se encuentran concatenadas y dirigidas hacia un objetivo en común, el cual es satisfacer al cliente con la obtención de la mercancía adquirida, de conformidad a los requerimientos inicialmente pactados entre las partes.
        .cajon.color-primario.mt-4.p-4(style="background-color:#F2F6FE;")
          p.mb-0(data-aos="zoom-in") Generalmente, el plan de operación logística establece y diseña las metodologías de distribución, adicionando a la red terceros que soportan las actividades en la cadena de suministro. Una visión holística del Plan de Operación Logístico (POL) integra las actividades de aprovisionamiento, producción y distribución física a su estructura sinérgica, cuyo objetivo es cumplir con los ciclos internos de operación. A continuación, se describen estos procesos:
    
    .row.mt-5
      .col-lg.mb-4.mb-lg-0.pe-lg-0
        .h-100.p-4(style="background-color:#C4F2F1;border-radius:20px 0px 0px 20px;")
          figure.text-center
            img(src="@/assets/curso/tema1/15.svg" data-aos="zoom-in" style="display:inline;max-width:150px;")
          h5.mt-4(data-aos="zoom-in") Aprovisionamiento
          p.mt-3(data-aos="zoom-in") Es el proceso de adquisición de materias primas requeridas en el proceso de producción.
      .col-lg.mb-4.mb-lg-0.pe-lg-0.ps-lg-0
        .h-100.p-4(style="background-color:#D8E4FD;")
          figure.text-center
            img(src="@/assets/curso/tema1/16.svg" data-aos="zoom-in" style="display:inline;max-width:150px;")
          h5.mt-4(data-aos="zoom-in") Producción
          p.mt-3(data-aos="zoom-in") Establece y gestiona las metodologías, programas y acciones requeridas en la obtención de un producto (servicio o bien), de conformidad con un nivel óptimo de calidad, potenciando recursos para desarrollar el producto final en los tiempos establecidos por la organización.
      .col-lg.mb-4.mb-lg-0.ps-lg-0
        .h-100.p-4(style="background-color:#C4F2F1;border-radius:0px 20px 20px 0px;")
          figure.text-center
            img(src="@/assets/curso/tema1/17.svg" data-aos="zoom-in" style="display:inline;max-width:150px;")
          h5.mt-4(data-aos="zoom-in") Distribución física
          p.mt-3(data-aos="zoom-in") Tiene como ocupación las acciones asociadas a la planificación, desarrollo y control del flujo físico de las mercancías desde el lugar de producción hasta el sitio de consumo final.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_3 1.3 Promesa de valor
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Comprende los aspectos cuantitativos y cualitativos asociados al elemento ofrecido por la compañía. Lo cuantitativo hace referencia a la disminución de costos operativos y al incremento de los beneficios monetarios generados por la actividad económica. El factor cualitativo consta de la experiencia del cliente al momento de adquirir el producto. 
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_4 1.4 Clientes
    
    p(data-aos="zoom-in") Según el diccionario de la lengua española, cliente es definido como la persona que compra en una tienda o que utiliza con asiduidad los servicios de un profesional o una empresa. También es el principal foco de atención de cualquier empresa, debido a que todos los planes y estrategias de marketing son enfocados, desarrollados e implementados en función del cliente. Los clientes pueden ser:
    
    .mt-5.p-3.ps-4.pe-4.mb-4(style="max-width:fit-content;background-color:#57DBD8;border-radius:0px 30px 0px 30px;" data-aos="zoom-in-right")
      h4.mb-0 Clientes reales
    
   
    
  


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
