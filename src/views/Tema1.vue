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
              img(src="@/assets/curso/tema1/2.svg" style="display:inline;max-width:150px;")
            p.mt-4.fw-bold.text-center.mb-0 Compras
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 02
            figure.text-center
              img(src="@/assets/curso/tema1/3.svg" style="display:inline;max-width:150px;")
            p.mt-4.fw-bold.text-center.mb-0 Servicio al cliente
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 03
            figure.text-center
              img(src="@/assets/curso/tema1/4.svg" style="display:inline;max-width:150px;")
            p.mt-4.fw-bold.text-center.mb-0 Gestión de inventarios
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 04
            figure.text-center
              img(src="@/assets/curso/tema1/5.svg" style="display:inline;max-width:150px;")
            p.mt-4.fw-bold.text-center.mb-0 Almacenamiento
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 05
            figure.text-center
              img(src="@/assets/curso/tema1/6.svg" style="display:inline;max-width:150px;")
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
          p.text-small(numero="4" titulo="Objetivos operativos") Define los objetivos para cada uno de los unidades operacionales o áreas de la organización, supeditados a las estrategias planteadas, con el fin de cumplir las metas planteadas por la organización.
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

    .p-3.pt-2(style="background: rgb(255,255,255);background: linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(244,244,244,1) 100%);")
      .row
        .col-auto
          figure
            img(src="@/assets/curso/tema1/19.svg" data-aos="zoom-in-right")
        .col(style="place-self:center;")
          p.mb-0(data-aos="zoom-in-left") Estos clientes asignan parte de su presupuesto para la adquisición frecuente de las mercancías o servicios creados por la organización, por lo cual, son este tipo de clientes los que determinan el volumen fijo de ventas y la generación de ingresos. Los clientes reales instauran el nivel de rentabilidad asegurada durante los períodos contables. Los clientes reales son clasificados en cinco clases:
    
    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.col-xl-11.m-auto(titulo="Nivel de satisfacción")
        .col-md-6.col-lg-3.mb-4.mb-md-0(style="place-self:center;")
          figure
            img(src='@/assets/curso/tema1/20.png')
        .col-md-6.col-lg-9(style="place-self:center;")
          ul.lista-ul--separador
            li
              i.fas.fa-check-circle(style="color:#4ADBD1;")
              | #[strong Cliente muy satisfecho:] clientes tienen la percepción de que el producto o servicio cumple las expectativas que están buscando, también su sentimiento de comodidad fortalece el vínculo con la organización, lo cual le permite hacer un proceso repetido de compra.
            li
              i.fas.fa-check-circle(style="color:#4ADBD1;")
              | #[strong Cliente satisfecho:] es aquel que se encuentra en una situación inestable de fidelidad con la marca o el producto. Acepta el bien o servicio; sin embargo, si encuentra en el mercado una propuesta con mejor valor podría tener un cambio radical.
            li
              i.fas.fa-check-circle(style="color:#4ADBD1;")
              | #[strong Cliente insatisfecho:] se refiere al cliente que no ha adquirido el producto de acuerdo con sus expectativas de compra. Es un cliente que tiene muchos perjuicios, puesto que se puede cambiar a otro proveedor en el mercado y promulgaría una experiencia negativa de la compra anterior. 
      .row.col-xl-11.m-auto(titulo="Volumen de compra")
        .col-md-6.col-lg-9.mb-4.mb-md-0(style="place-self:center;")
          ul.lista-ul--separador
            li
              i.fas.fa-check-circle(style="color:#4ADBD1;")
              | #[strong Clientes de alto volumen de compra:] estos consumidores están satisfechos con el bien o servicio y tienen compras en cantidades considerables entre el 50 y 80% del total de las ventas, de ellos depende la salud económica del negocio. Hacen las compras al por mayor y se denominan clientes mayoristas.
            li
              i.fas.fa-check-circle(style="color:#4ADBD1;")
              | #[strong Clientes con volumen promedio de compra:] son los clientes que adquieren el producto de forma continua, debido al nivel de conformidad con la marca.
            li
              i.fas.fa-check-circle(style="color:#4ADBD1;")
              | #[strong Clientes de bajo volumen de compra:] gracias a su nivel de ingresos, estos clientes no pueden adquirir el producto, pero su nivel de satisfacción es aceptable. Se denominan clientes minoristas y hacen las compras al por menor.
        .col-md-6.col-lg-3(style="place-self:center;")
          figure
            img(src='@/assets/curso/tema1/21.png')
      .row.col-xl-11.m-auto(titulo="Influencia")
        .col-md-6.col-lg-3.mb-4.mb-md-0(style="place-self:center;")
          figure
            img(src='@/assets/curso/tema1/22.png')
        .col-md-6.col-lg-9(style="place-self:center;")
          ul.lista-ul--separador
            li
              i.fas.fa-check-circle(style="color:#4ADBD1;")
              | #[strong Clientes muy influyentes:] aquellos clientes con capacidad de generar gran impacto en los consumidores para la adquisición de mercancías o servicios. Son usados frecuentemente personajes públicos con manejo alto de las redes sociales.
            li
              i.fas.fa-check-circle(style="color:#4ADBD1;")
              | #[strong Clientes con influencia promedio:] son clientes con grado significativo de conocimiento en un área específica y que, con su opinión, pueden influir en el deseo de los consumidores por acceder al bien o servicio.
            li
              i.fas.fa-check-circle(style="color:#4ADBD1;")
              | #[strong Clientes de influencia familiar:] se trata de aquellos que pueden influir sobre la decisión de compra dentro de los grupos familiares, lo que va creando una lealtad de marca a través de las nuevas generaciones.
      .row.col-xl-11.m-auto(titulo="Frecuencia")
        .col-md-6.col-lg-9.mb-4.mb-md-0(style="place-self:center;")
          ul.lista-ul--separador
            li
              i.fas.fa-check-circle(style="color:#4ADBD1;")
              | #[strong Cliente de compra frecuente:] Compran de forma periódica los productos y marcas, están satisfechos; las empresas intentan fidelizar a estos clientes para que su relación se mantenga por tiempos prolongados. Con ellos la empresa debe mantener un trato personalizado y especial.
            li
              i.fas.fa-check-circle(style="color:#4ADBD1;")
              | #[strong Cliente de compra habitual:] realizan sus adquisiciones con cierto patrón de regularidad si les gusta el producto. Las empresas buscan aumentar la frecuencia de sus compras.
            li
              i.fas.fa-check-circle(style="color:#4ADBD1;")
              | #[strong Cliente de compra ocasional:]  son los que se acercan a demandar los bienes y servicios una sola vez, o de vez en cuando. A estos clientes se les da seguimiento, para pedirles información que pueda servir para tratar de convertirlos en habituales o frecuentes.
        .col-md-6.col-lg-3(style="place-self:center;")
          figure
            img(src='@/assets/curso/tema1/23.png')
      .row.col-xl-11.m-auto(titulo="Vigencia")
        .col-md-6.col-lg-3.mb-4.mb-md-0(style="place-self:center;")
          figure
            img(src='@/assets/curso/tema1/24.png')
        .col-md-6.col-lg-9(style="place-self:center;")
          ul.lista-ul--separador
            li
              i.fas.fa-check-circle(style="color:#4ADBD1;")
              | #[strong Cliente activo:] son los que compran con cierta regularidad en nuestro negocio, se les presta mucha atención porque son los que están formando nuestro nivel de ventas y de ingresos. Se deben buscar los medios para conservarlos y retenerlos. De ellos depende la sobrevivencia de la empresa.
            li
              i.fas.fa-check-circle(style="color:#4ADBD1;")
              | #[strong Cliente inactivo:] Es el que en alguna oportunidad compró con nosotros, pero por alguna razón ya no lo hace. Es necesario ubicarlo para conocer la causa o razón por la  que abandonó la empresa y buscar la forma de recuperarlo.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_5 1.5 Cadena de suministros
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/25.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es la gestión e integración de los productos, servicios e información de los procesos clave del negocio, de los proveedores, productores y distribuidores, que permiten adicionar valor y satisfacer las necesidades de los clientes y los “stakeholders” (Sabriá y De Zan, 2016).
    
    p.mt-5.fw-bold.text-center(data-aos="zoom-in") Con respecto a las funciones de la cadena de suministro se les ha dado un sentido más holístico actualmente:

    .cont_1_1.mt-5
      .col-xl-9.m-auto
        .row
          .col-lg.col-md-6.mb-4.mb-lg-0
            .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
              .text-start
                span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 01
              figure.text-center
                img(src="@/assets/curso/tema1/27.svg" style="display:inline;max-width:150px;")
              p.mt-4.text-center.mb-0 #[strong Optimizar:] de forma independiente las actividades del negocio proporcionan eficiencia en la estructura organizacional. 
          .col-lg.col-md-6.mb-4.mb-lg-0
            .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
              .text-start
                span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 02
              figure.text-center
                img(src="@/assets/curso/tema1/28.svg" style="display:inline;max-width:150px;")
              p.mt-4.text-center.mb-0 #[strong Integrar:] considera la totalidad de las acciones internamente en la compañía.
          .col-lg.col-md-6.mb-4.mb-lg-0
            .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
              .text-start
                span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 03
              figure.text-center
                img(src="@/assets/curso/tema1/29.svg" style="display:inline;max-width:150px;")
              p.mt-4.text-center.mb-0 #[strong Colaborar:] extendiendo el espíritu de colaboración que debe vincular a clientes y proveedores con la misma organización.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_6 1.6 Caracterización de los procesos logísticos
    
    p(data-aos="zoom-in") Es el diagnóstico de los procesos que integran un inicio y un final dentro de toda la cadena de suministro. Estos elementos pueden ser:

    .col-xl-10.m-auto.mt-5
      .row
        .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/30.svg" data-aos="zoom-in-right")
        .col-lg-7(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/31.svg" data-aos="zoom-in-left")
    
    .cajon.color-primario.mt-5.p-4(style="background-color:#F2F6FE;")
      p.mb-0(data-aos="zoom-in") En el desarrollo de la caracterización de procesos también se debe tener en cuenta los siguientes aspectos:

    br
    .col-xl-10.m-auto.mt-5
      .row
        .col-lg.mb-5.mb-lg-0.col-md-6.pe-md-4
          .h-100.p-3(style="background-color:#E8E8E8;border-radius:0px 0px 15px 0px;position:relative;" data-aos="zoom-in-up")
            div(style="position:absolute;top:18px;width:100%;left:-25px;")
              figure
                img(src="@/assets/curso/tema1/32.svg" style="max-height:80px;max-width:40px;")
            div(style="position:absolute;top:-30px;width:100%;right:-15px;")
              figure.text-end
                img(src="@/assets/curso/tema1/33.svg" style="max-width:70px;display:inline;")
            p.text-small.fw-bold Objeto del #[br] proceso
            p.text-small.mb-0 El  por qué de la creación del proceso.
        .col-lg.mb-5.mb-lg-0.col-md-6.ps-md-4.pe-md-4
          .h-100.p-3(style="background-color:#E8E8E8;border-radius:0px 0px 15px 0px;position:relative;" data-aos="zoom-in-up")
            div(style="position:absolute;top:18px;width:100%;left:-25px;")
              figure
                img(src="@/assets/curso/tema1/34.svg" style="max-height:80px;max-width:40px;")
            div(style="position:absolute;top:-30px;width:100%;right:-15px;")
              figure.text-end
                img(src="@/assets/curso/tema1/35.svg" style="max-width:70px;display:inline;")
            p.text-small.fw-bold Responsable
            p.text-small.mb-0 Responsables del proceso.
        .col-lg.mb-5.mb-lg-0.col-md-6.ps-md-4.pe-md-4
          .h-100.p-3(style="background-color:#E8E8E8;border-radius:0px 0px 15px 0px;position:relative;" data-aos="zoom-in-up")
            div(style="position:absolute;top:18px;width:100%;left:-25px;")
              figure
                img(src="@/assets/curso/tema1/36.svg" style="max-height:80px;max-width:40px;")
            div(style="position:absolute;top:-30px;width:100%;right:-15px;")
              figure.text-end
                img(src="@/assets/curso/tema1/37.svg" style="max-width:70px;display:inline;")
            p.text-small.fw-bold Partes interesadas
            p.text-small.mb-0 Las personas que intervienen en el proceso.
        .col-lg.mb-5.mb-lg-0.col-md-6.ps-md-4
          .h-100.p-3(style="background-color:#E8E8E8;border-radius:0px 0px 15px 0px;position:relative;" data-aos="zoom-in-up")
            div(style="position:absolute;top:18px;width:100%;left:-25px;")
              figure
                img(src="@/assets/curso/tema1/38.svg" style="max-height:80px;max-width:40px;")
            div(style="position:absolute;top:-30px;width:100%;right:-15px;")
              figure.text-end
                img(src="@/assets/curso/tema1/39.svg" style="max-width:70px;display:inline;")
            p.text-small.fw-bold Controles
            p.text-small.mb-0 Controles asociados al proceso para asegurar que se lleva a cabo de manera correcta.
      .mt-5.mb-5.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/41.svg")
      .row
        .col-lg.mb-5.mb-lg-0.col-md-6.pe-md-4
          .h-100.p-3(style="background-color:#E8E8E8;border-radius:0px 0px 15px 0px;position:relative;" data-aos="zoom-in-up")
            div(style="position:absolute;top:18px;width:100%;left:-25px;")
              figure
                img(src="@/assets/curso/tema1/40.svg" style="max-height:80px;max-width:40px;")
            div(style="position:absolute;top:-30px;width:100%;right:-15px;")
              figure.text-end
                img(src="@/assets/curso/tema1/43.svg" style="max-width:70px;display:inline;")
            p.text-small.fw-bold Registro
            p.text-small.mb-0 Documentos de registro y control asociados al proceso para asegurar que se lleva a cabo correctamente.
        .col-lg.mb-5.mb-lg-0.col-md-6.pe-md-4
          .h-100.p-3(style="background-color:#E8E8E8;border-radius:0px 0px 15px 0px;position:relative;" data-aos="zoom-in-up")
            div(style="position:absolute;top:18px;width:100%;left:-25px;")
              figure
                img(src="@/assets/curso/tema1/44.svg" style="max-height:80px;max-width:40px;")
            div(style="position:absolute;top:-30px;width:100%;right:-15px;")
              figure.text-end
                img(src="@/assets/curso/tema1/45.svg" style="max-width:70px;display:inline;")
            p.text-small.fw-bold Indicadores
            p.text-small.mb-0 Indicadores de gestión relacionados con el rendimiento y desempeño de los procesos.
        .col-lg.mb-5.mb-lg-0.col-md-6.pe-md-4
          .h-100.p-3(style="background-color:#E8E8E8;border-radius:0px 0px 15px 0px;position:relative;" data-aos="zoom-in-up")
            div(style="position:absolute;top:18px;width:100%;left:-25px;")
              figure
                img(src="@/assets/curso/tema1/46.svg" style="max-height:80px;max-width:40px;")
            div(style="position:absolute;top:-30px;width:100%;right:-15px;")
              figure.text-end
                img(src="@/assets/curso/tema1/47.svg" style="max-width:70px;display:inline;")
            p.text-small.fw-bold Acciones
            p.text-small.mb-0 Acciones sucesivas internas de los procesos.
        .col-lg.col-md-6.pe-md-4
          .h-100.p-3(style="background-color:#E8E8E8;border-radius:0px 0px 15px 0px;position:relative;" data-aos="zoom-in-up")
            div(style="position:absolute;top:18px;width:100%;left:-25px;")
              figure
                img(src="@/assets/curso/tema1/48.svg" style="max-height:80px;max-width:40px;")
            div(style="position:absolute;top:-30px;width:100%;right:-15px;")
              figure.text-end
                img(src="@/assets/curso/tema1/49.svg" style="max-width:70px;display:inline;")
            p.text-small.fw-bold Riesgos
            p.text-small.mb-0 Riesgos inherentes al proceso.
    
    br
    .row.mt-5
      .col-lg.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/50.svg" data-aos="zoom-in-right")
      .col-lg(style="place-self:center;")
        p(data-aos="zoom-in") El propósito de la caracterización de procesos es:
        ul.ps-md-4.lista-ul--separador.mt-4
          li(data-aos="zoom-in")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Diagnosticar el estado del arte de la estructura organizacional.
          li(data-aos="zoom-in")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Proponer procesos sensibles de cambio y de mejora.
          li(data-aos="zoom-in")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Determinar posibles riesgos en los procesos.
          li(data-aos="zoom-in")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Identificar etapas obsoletas que estén produciendo algún traumatismo.
          li(data-aos="zoom-in")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Vincular indicadores, controles y registros a los procesos.
        .cajon.color-primario.mt-4.p-4(style="background-color:#F2F6FE;")
          p.mb-0(data-aos="zoom-in") El desarrollo de una caracterización de procesos puede realizarse por medio de una ficha. En la siguiente figura se presenta un ejemplo de esta, preste atención a cada uno de los elementos que se relacionan:
    
    .col-xl-8.col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        h5 Figura 1.
        span Caracterización de procesos
      figure.mt-4
        img(src="@/assets/curso/tema1/51.svg" data-aos="zoom-in-up")
      figcaption.fw-normal.p-3.mt-4(style="background-color:#F6F6F6;") #[strong Nota.] Torres (2021). 

    Separador.mt-5

    .titulo-segundo
      h2#t_1_7 1.7 Flujo, procesos y procedimientos de la cadena de suministros
    
    p(data-aos="zoom-in") La cadena de suministro está compuesta principalmente por tres flujos:

    .cont_1_1.mt-5
      .col-xl-9.m-auto
        .row
          .col-lg.col-md-6.mb-4.mb-lg-0
            .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
              .text-start
                span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 01
              figure.text-center
                img(src="@/assets/curso/tema1/52.svg" style="display:inline;max-width:150px;")
              p.mt-4.text-center.mb-0 #[strong Flujo de productos:] consta de la dinámica de productos desde los proveedores hacia los clientes y viceversa por concepto de devoluciones.  
          .col-lg.col-md-6.mb-4.mb-lg-0
            .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
              .text-start
                span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 02
              figure.text-center
                img(src="@/assets/curso/tema1/53.svg" style="display:inline;max-width:150px;")
              p.mt-4.text-center.mb-0 #[strong Flujo de información:] representa la gestión de datos asociados a los pedidos y sus estados en la entrega. 
          .col-lg.col-md-6.mb-4.mb-lg-0
            .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
              .text-start
                span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 03
              figure.text-center
                img(src="@/assets/curso/tema1/54.svg" style="display:inline;max-width:150px;")
              p.mt-4.text-center.mb-0 #[strong Flujo financiero:] está conformado por los créditos, fechas de pago y manejo de caja menor.
    
    p.mt-5(data-aos="zoom-in") Preste atención a la siguiente figura, en esta se relacionan los actores y elementos relevantes del flujo de la cadena de suministro: 

    .col-xl-8.col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        h5 Figura 2.
        span Actores y elementos del flujo de la cadena de suministro
      figure.mt-4
        img(src="@/assets/curso/tema1/55.svg" data-aos="zoom-in-up")
      figcaption.fw-normal.p-3.mt-4(style="background-color:#F6F6F6;") #[strong Nota.] TechTarget SearchData Center (2021). 
    
    .p-3.pt-2.mt-5(style="background: rgb(255,255,255);background: linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(244,244,244,1) 100%);")
      .row
        .col-auto
          figure
            img(src="@/assets/curso/tema1/56.svg" data-aos="zoom-in-right")
        .col(style="place-self:center;")
          p.mb-0(data-aos="zoom-in-left") Los procedimientos dentro de un contexto global abarcan la planificación y ejecución integrada de los procesos necesarios para gestionar el movimiento de materiales, información y capital financiero en actividades que incluyen, en general, la planificación de la demanda (TechTarget, 2021) y para esto se requiere:
    
    .row.mt-5
      .col-lg.col-md-6.mb-4.mb-lg-0
        .tarjeta-numerada.color-primario.p-5.h-100(data-aos="zoom-in" style="box-shadow:0px 0px 15px rgba(0,0,0,.15);")
          .tarjeta-numerada__numero
            .h2 1
          p.mb-0.fw-bold Planeación de la relación demanda – oferta, con el fin de suplir las necesidades del consumidor.
      .col-lg.col-md-6.mb-4.mb-lg-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100(data-aos="zoom-in" style="box-shadow:0px 0px 15px rgba(0,0,0,.15);")
          .tarjeta-numerada__numero
            .h2 2
          p.mb-0.fw-bold Abastecimiento por medio de programas y asociaciones con aliados estratégicos que reduzcan los costos operativos.
      .col-lg.col-md-6.mb-4.mb-lg-0
        .tarjeta-numerada.color-primario.p-5.h-100(data-aos="zoom-in" style="box-shadow:0px 0px 15px rgba(0,0,0,.15);")
          .tarjeta-numerada__numero
            .h2 3
          p.mb-0.fw-bold Celeridad en el proceso manufacturero, con el fin de ser competitivos y ajustarse a la dinámica del mercado.
      .col-lg.col-md-6.mb-4.mb-lg-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100(data-aos="zoom-in" style="box-shadow:0px 0px 15px rgba(0,0,0,.15);")
          .tarjeta-numerada__numero
            .h2 4
          p.mb-0.fw-bold Despachos eficientes desde los centros de envío a los clientes finales.
    
    .cajon.color-primario.mt-5.p-4(style="background-color:#F2F6FE;")
      p.mb-0(data-aos="zoom-in") Los integrantes del equipo de control de procesos en la cadena de suministros deben tener como norma el conocimiento de los procesos significativos, los cuales están involucrados en el desarrollo y cumplimiento de los objetivos empresariales. 
    
    p.mt-5(data-aos="zoom-in") En los procesos logísticos se debe gestionar diferentes aspectos; en el siguiente recurso de aprendizaje se presentan los más relevantes:

    .cont_1_2.mt-5.p-4.p-lg-5
      .row
        .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/58.png")
        .col-lg-6(style="place-self:center;")
          .tarjeta.bg-white.p-4.p-lg-5
            SlyderA(tipo="b")
              .row.text-center
                p.fw-bold Gestión de las relaciones con el cliente (CRM, Customer Relationship Management)
                p.mt-4 Los procesos de la cadena de suministro están orientados a la satisfacción del cliente, por esto, la gestión de las relaciones con el cliente entabla contacto directo y experiencia al adquirir un producto.
              .row.text-center
                p.fw-bold Gestión del servicio al cliente (Customer Service Management) 
                p.mt-4 Cuando se tiene una estrecha relación cliente-organización, el flujo bidireccional de información permite mantener las características acordadas inicialmente sobre la disponibilidad y ubicación actual del producto, desde la división de producción hasta el departamento de distribución.
              .row.text-center
                p.fw-bold Gestión de la demanda  (Demand Management)
                p.mt-4 La información suministrada por los puntos de venta y datos de los clientes ayuda a disminuir la incertidumbre en cuanto el balance de la demanda y las necesidades de producción. Los sistemas de planificación coordinan actividades de aprovisionamiento, con el objetivo de disminuir costos y tiempos de almacenamiento. 
              .row.text-center
                p.fw-bold Cumplimiento de los pedidos (Order fulfillment)
                p.mt-4 Una visión holística debe tenerse en cuenta para el desarrollo de los sistemas de adquisición, elaboración, transporte y distribución, así las cosas, el cliente será el directo beneficiado al establecer una relación de valor con la organización.
              .row.text-center
                p.fw-bold Gestión de la producción (Manufacturing Flow Management)
                p.mt-4 El cliente decreta condiciones de fabricación, conforme a sus necesidades, y la organización que ofrece el producto flexibiliza sus procesos productivos para mantenerse vigente en la dinámica comercial. Los sistemas “just in time” generan tiempos de ciclo reducidos y mejor servicio al cliente con disminución en los tiempos de entrega.
              .row.text-center
                p.fw-bold Gestión del proceso de aprovisionamiento o compras 
                p.mt-4 Este proceso establece planes y estrategias con los proveedores, con el objeto de soportar la adquisición de materias primas que promuevan productos innovadores. 
              .row.text-center
                p.fw-bold  Desarrollo y comercialización de productos (Product Development and Merchandising) 
                p.mt-4 El área de servicio al cliente, en conjunto con el encargado de comercializar, deberán laborar los resultados productivos con la finalidad de crear una articulación en toda la cadena productiva con el mercado.
              .row.text-center
                p.fw-bold Gestión de las devoluciones (returns) 
                p.mt-4 El manejo de las devoluciones o producto no  conforme, tiene aspectos positivos como la identificación de falencias en la cadena productiva, para corregirlas y mejorarlas, convirtiéndose en una fortaleza hacia la competencia del mercado.
      
    Separador.mt-5

    .titulo-segundo
      h2#t_1_8 1.8 Cadena logística de valor
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/59.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se define como la unión de acciones y labores concatenadas que son realizadas dentro de la estructura de la organización, enfocadas en el desarrollo del producto o productos que motivan la creación de la empresa.
    
    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="zoom-in") El objetivo de toda cadena logística de valor es incrementar el potencial de la empresa y a su vez, reducir los costos operativos con la optimización de los recursos.
        .cajon.color-primario.mt-4.p-4(style="background-color:#F2F6FE;")
          p.mb-0(data-aos="zoom-in") A continuación, se presenta una figura que representa la cadena de valor propuesta por Michael Porter:
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/60.png" data-aos="zoom-in-left")
    
    .col-xl-8.col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        h5 Figura 3.
        span Cadena de valor
      figure.mt-4
        img(src="@/assets/curso/tema1/61.svg" data-aos="zoom-in-up")
    




    

    
  


      
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
<style lang="sass">
.tarjeta.tarjeta--azul.acordion__activo
  background-color: #F6F6F6
.lista-ol--separador li, .lista-ul--separador li
  border-bottom: dotted 2px #b0c0d2
.cont_1_1
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/26.svg)
  background-size: cover
  background-position: center
.cont_1_2
  background: url(../assets/curso/tema1/57.png)
  background-size: cover
  background-position: center
  border-radius: 20px
.slyder-a__bullets__item
  background-color: #C0F2EF
.slyder-a__bullets__item--active
  background-color: #4ADBD1 !important
  border-color: #4ADBD1
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #6F88DA
</style>
