<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 2
      h1  Desempeño de los procesos logísticos
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un aspecto fundamental en el establecimiento de la compañía como parte del mercado es la determinación del desempeño íntegro de sus operaciones internas y externas, de tal manera, que se tengan métricas de monitoreo al detalle para proponer estrategias de mejora continua y así, prever fallas en el sistema que bloqueen el componente logístico.
    
    .row.mt-5
      .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="zoom-in") Mediante el diagnóstico de los procesos logísticos se puede conocer la realidad de la cadena logística en el interior de una empresa. Básicamente, es un análisis comparativo entre los objetivos planteados inicialmente y las metas cumplidas al momento de hacer la evaluación.
        .cajon.color-acento-contenido.mt-4.p-4(style="background-color:#DDF8F7;") 
          p.mb-0(data-aos="zoom-in") #[strong Benchmarking logístico:] recolecta información de los diferentes actores del mercado, con el fin de generar una cultura adaptativa de acuerdo con las necesidades de los clientes. Las actividades de benchmarking son desarrolladas con pruebas de evaluación comparativas, útiles para determinar espacios vulnerables y fortalecer las áreas que soportan el sistema logístico.
      .col-lg-3(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/2.svg" data-aos="zoom-in-left")
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/3.png" data-aos="zoom-in-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="zoom-in") Los aspectos que evalúa el benchmarking en la cadena de suministro son los tiempos involucrados en cada proceso, el valor agregado creado y el logro producido según los objetivos planteados.
        .cajon.color-primario.mt-4.p-4(style="background-color:#F2F6FE;") 
          p.mb-0(data-aos="zoom-in") En el siguiente recurso de aprendizaje se presentan las tres clases de benchmarking que se pueden desarrollar de manera aislada o asociada al conjunto de actividades de la cadena logística:
    
    .tarjeta.bg-white.p-4.p-lg-5.cont_slyder1.mt-5
      SlyderA(tipo="b")
        .row(style="position:relative;")
          div(style="position:absolute;width:100%;left:0;z-index:1;top:-60px;")
            span(style="font-size:160px;font-weight:bold;color:#DBDDE0;") 01
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;position:relative;z-index:2;")
            h5 Benchmarking interno
            p.mt-4 Es una comparación interna de la organización, se tiene como parámetro la forma como están desarrollando los diferentes procesos en cada área de la organización. 
            p.mt-4 Los resultados obtenidos son comparados entre dependencias para identificar cuáles son los que favorecen el dinamismo de la compañía e institucionalizarlos dentro de la empresa. 
          .col-lg-4(style="place-self:center;position:relative;z-index:2;")
            figure
              img(src="@/assets/curso/tema2/5.svg")
        .row(style="position:relative;")
          div(style="position:absolute;width:100%;left:0;z-index:1;top:-60px;")
            span(style="font-size:160px;font-weight:bold;color:#DBDDE0;") 02
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;position:relative;z-index:2;")
            h5 Benchmarking externo
            p.mt-4 Esta técnica motiva la superación de los límites y expone a la organización a un variado abanico de alternativas, donde puede extractar lo mejor del mercado y adaptarlo a su propio ecosistema.
          .col-lg-4(style="place-self:center;position:relative;z-index:2;")
            figure
              img(src="@/assets/curso/tema2/6.svg")
        .row(style="position:relative;")
          div(style="position:absolute;width:100%;left:0;z-index:1;top:-60px;")
            span(style="font-size:160px;font-weight:bold;color:#DBDDE0;") 03
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;position:relative;z-index:2;")
            h5 Benchmarking competitivo
            p.mt-4 Es un análisis comparativo desde el interior de la organización, buscando las razones de ineficiencia en los procesos propios de la empresa por medio de entidades especializadas en investigación y consultoría, estas suministrarán resultados sin sesgo o presión por alguna de las unidades operativas del sistema. Adicionalmente, proveerán información acerca de las debilidades y fortalezas presentadas asociadas a los competidores.
          .col-lg-4(style="place-self:center;position:relative;z-index:2;")
            figure
              img(src="@/assets/curso/tema2/7.svg")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_1 2.1 Construcción de indicadores de gestión
    
    figure.mb-4.mb-lg-0
      img(src="@/assets/curso/tema2/8.png" data-aos="flip-up")
    .col-lg-10.m-auto
      .p-4.cont_gradiente1(data-aos="flip-up")
        p.mb-0 Es prudente tener una visión amplia del entorno evaluado, es decir, la perspectiva de negocio debe ser transversal, sobre toda la estructura organizacional, ya que, al término de la implementación del indicador, el flujo de información debe ser bidireccional en todas las áreas.
    
    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.svg" data-aos="zoom-in-right")
      .col-lg-9
        p(data-aos="zoom-in") Adicionalmente, es prioritario definir los siguientes parámetros:
        .row.mt-4
          .col-lg.mb-4.mb-lg-0
            ul.lista-ul--separador
              li
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Objetivo del indicador.
              li
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Definición.
              li
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Fórmula de cálculo.
          .col-lg.mb-4.mb-lg-0
            ul.lista-ul--separador
              li
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Periodicidad de la toma de registros.
              li
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Responsable de la recolección de datos.
              li
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Fuentes de información.
          .col-lg.mb-4.mb-lg-0
            ul.lista-ul--separador
              li
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Fuentes de verificación.
              li
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Componentes del reporte.
    
    .cajon.color-primario.mt-5.p-4(style="background-color:#F2F6FE;") 
      p.mb-0(data-aos="zoom-in") Principalmente, con la información suministrada por cada indicador propio de la organización son comparados con los indicadores presentados en el mercado por los directos competidores, de tal manera que sea visible el estado en el que se encuentra la empresa con respecto a los actores del mercado y tenga conocimientos sólidos para la toma de decisiones.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_2 2.2 Trazabilidad
    
    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/10.svg" data-aos="zoom-in-right")
      .col-lg-9
        p(data-aos="zoom-in") Es la capacidad de tener el control de un producto, materia prima, artículo o servicio mediante una identificación registrada, ubicación e historial del mismo. 
        p.mt-4(data-aos="zoom-in") Es útil para mejorar los procesos de control e incrementar la eficiencia de la organización, de la misma forma reduce costos por fallas de la estructura operativa y los traumatismos que puedan surgir por la pérdida del producto.
    
    .cajon.color-acento-contenido.mt-4.p-4(style="background-color:#DDF8F7;") 
      p.mb-0(data-aos="zoom-in") Actualmente, el campo logístico está siendo afectado positivamente por el desarrollo de nuevas tecnologías, en procesos tales como:
 
    .col-xl-8.m-auto.mt-4.col-lg-10
      .row.m-0.mb-3(style="box-shadow:3px 3px 10px rgba(0,0,0,.15);border-radius:0px 30px 30px 0px;position:relative;" data-aos="zoom-in-up")
        .col-auto.ps-0.pe-0
          .h-100.d-flex.align-items-center.align-content-center.p-3(style="background-color:#91B3FA;")
            span.fw-bold(style="font-size:37px;") 01
        .col.pe-0.ps-0
          div(style="position:absolute;width:5px;background-color:#91B3FA;height:50px;right:0;top:20%;")
          .h-100.d-flex.align-content-center.p-3(style="background-color:#F8F8F8;border-radius:0px 30px 30px 0px;")
            p.mb-0 En el registro e identificación de mercancías con códigos de barras donde puede ser almacenada alta información (GS1 128), códigos matriciales (Datamatrix) o tecnologías NFC.
      .row.m-0.mb-3(style="box-shadow:3px 3px 10px rgba(0,0,0,.15);border-radius:0px 30px 30px 0px;position:relative;" data-aos="zoom-in-up")
        .col-auto.ps-0.pe-0
          .h-100.d-flex.align-items-center.align-content-center.p-3(style="background-color:#57DBD8;")
            span.fw-bold(style="font-size:37px;") 02
        .col.pe-0.ps-0
          div(style="position:absolute;width:5px;background-color:#57DBD8;height:50px;right:0;top:20%;")
          .h-100.d-flex.align-content-center.p-3(style="background-color:#F8F8F8;border-radius:0px 30px 30px 0px;")
            p.mb-0 Dispositivos GPS están tomando mayor participación en la localización geográfica, de tal manera que transmiten información en tiempo real a los centros de operación y clientes. 
      .row.m-0.mb-3(style="box-shadow:3px 3px 10px rgba(0,0,0,.15);border-radius:0px 30px 30px 0px;position:relative;" data-aos="zoom-in-up")
        .col-auto.ps-0.pe-0
          .h-100.d-flex.align-items-center.align-content-center.p-3(style="background-color:#91B3FA;")
            span.fw-bold(style="font-size:37px;") 03
        .col.pe-0.ps-0
          div(style="position:absolute;width:5px;background-color:#91B3FA;height:50px;right:0;top:20%;")
          .h-100.d-flex.align-content-center.p-3(style="background-color:#F8F8F8;border-radius:0px 30px 30px 0px;")
            p.mb-0 Los drones juegan un papel relevante en las nuevas tecnologías usadas en la distribución y rastreo de mercancías, debido a sus características de movilidad.
      .row.m-0.mb-3(style="box-shadow:3px 3px 10px rgba(0,0,0,.15);border-radius:0px 30px 30px 0px;position:relative;" data-aos="zoom-in-up")
        .col-auto.ps-0.pe-0
          .h-100.d-flex.align-items-center.align-content-center.p-3(style="background-color:#57DBD8;")
            span.fw-bold(style="font-size:37px;") 04
        .col.pe-0.ps-0
          div(style="position:absolute;width:5px;background-color:#57DBD8;height:50px;right:0;top:20%;")
          .h-100.d-flex.align-content-center.p-3(style="background-color:#F8F8F8;border-radius:0px 30px 30px 0px;")
            p.mb-0 La automatización de los procesos dentro de los centros de producción y distribución mejoran los flujos internos, lo cual permitirá el cambio de fuerza laboral humana por robots, evitando así los errores y costos prestacionales en la cadena de suministro.
      .row.m-0.mb-3(style="box-shadow:3px 3px 10px rgba(0,0,0,.15);border-radius:0px 30px 30px 0px;position:relative;" data-aos="zoom-in-up")
        .col-auto.ps-0.pe-0
          .h-100.d-flex.align-items-center.align-content-center.p-3(style="background-color:#91B3FA;")
            span.fw-bold(style="font-size:37px;") 05
        .col.pe-0.ps-0
          div(style="position:absolute;width:5px;background-color:#91B3FA;height:50px;right:0;top:20%;")
          .h-100.d-flex.align-content-center.p-3(style="background-color:#F8F8F8;border-radius:0px 30px 30px 0px;")
            p.mb-0 El big data incursiona en el mundo logístico, recolectando información elemental para mejorar la eficiencia de las actividades productivas con la toma de decisiones estratégicas.
    
    p.mt-5(data-aos="zoom-in") La trazabilidad presenta tres tipos, las cuales están supeditadas al tipo de mercancía y proceso productivo:
    
    .col-xl-10.m-auto.mt-5
      .cont_2_1
        .row.justify-content-center.indicador__container(@mouseover="indicadorHover = false")
          .col-lg.col-md-9.mb-4.mb-xl-0
            .crd_hover_txt(data-aos='flip-up')
              .crd_hover_txt--img
                figure
                  img(src='@/assets/curso/tema2/11.png')
              .crd_hover_txt--body(style="background-color:#91B3FA;")
                h5.mb-3.text-center Trazabilidad hacia atrás
                p.mt-3.mb-0.text-small El origen del producto es el principio del seguimiento y control, es decir, el rastreo surge cuando el proveedor emite la orden de salida de la materia prima desde su lugar de despacho. 
          .col-lg.col-md-9.mb-4.mb-xl-0
            .indicador--hover(v-if="indicadorHover")
            .crd_hover_txt(data-aos='flip-up')
              .crd_hover_txt--img
                figure
                  img(src='@/assets/curso/tema2/12.png')
              .crd_hover_txt--body(style="background-color:#57DBD8;")
                h5.mb-3.text-center Trazabilidad interna
                p.mt-3.mb-0.text-small El seguimiento es efectuado en los procesos internos, la materia prima se involucra en el sistema donde toma características propias de la organización.
          .col-lg.col-md-9.mb-4.mb-xl-0
            .crd_hover_txt(data-aos='flip-up')
              .crd_hover_txt--img
                figure
                  img(src='@/assets/curso/tema2/13.png')
              .crd_hover_txt--body(style="background-color:#91B3FA;")
                h5.mb-3.text-center Tazabilidad hacia adelante
                p.mt-3.mb-0.text-small El control se desarrolla en el proceso de emisión de la orden de despacho hasta la entrega final del producto al cliente. La mercancía o servicio debe tener registrado el lugar o planta de origen, lote al cual pertenece, fechas de expedición y recepción del producto, así como la identificación del cliente (lugar, identificación de quien recibe).
    
    p.mt-5(data-aos="zoom-in") En la siguiente tabla se presentan las especificaciones mínimas de las trazabilidades:

    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-botones
        h5 Tabla 2.
        span Especificaciones mínimas de trazabilidad
      .tabla-a.color-primario.mt-4
        table
          thead
            tr(style="background-color:#E9F0FE;")
              th.text-center.p-4 Trazabilidad hacia atrás
              th.text-center.p-4 Trazabilidad interna
              th.text-center.p-4 Trazabilidad hacia adelante
          tbody
            tr.bg-white
              td.p-4
                ul.lista-ul
                  li.d-flex
                    i.lista-ul__vineta
                    | Proveedor.
                  li.d-flex
                    i.lista-ul__vineta
                    | Producto recibido.
                  li.d-flex
                    i.lista-ul__vineta
                    | Fecha de recepción.
                  li.d-flex
                    i.lista-ul__vineta
                    | Destino interno.
              td.p-4
                ul.lista-ul
                  li.d-flex
                    i.lista-ul__vineta
                    | Estado de recepción.
                  li.d-flex
                    i.lista-ul__vineta
                    | Dependencia donde es recibido.
                  li.d-flex
                    i.lista-ul__vineta
                    | Producto final.
                  li.d-flex
                    i.lista-ul__vineta
                    | Fecha final de producción.
              td.p-4
                ul.lista-ul
                  li.d-flex
                    i.lista-ul__vineta
                    | Cliente final.
                  li.d-flex
                    i.lista-ul__vineta
                    | Fecha de venta.
                  li.d-flex 
                    i.lista-ul__vineta
                    | Fecha de salida y entrega del producto final.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_3 2.3 Auditoría a los procesos logísticos
    
    .row
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/14.svg" data-aos="zoom-in-right")
      .col-lg-9(style="place-self:center;")
        p(data-aos="zoom-in") El propósito de la auditoria es suministrar un diagnóstico del estado del arte de la empresa en el área logística y cómo está afrontando los cambios con procesos de mejora continua. 
        .p-3.pt-2.mt-4(style="background: rgb(255,255,255);background: linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(244,244,244,1) 100%);")
          .row
            .col-auto
              figure
                img(src="@/assets/curso/tema1/19.svg" data-aos="zoom-in-right")
            .col(style="place-self:center;")
              p.mb-0.mt-3(data-aos="zoom-in-left") #[strong “Una auditoría es una radiografía de las distintas áreas y procesos involucrados en la cadena de abastecimiento (desde la adquisición de insumos hasta la entrega del producto final, incluyendo también los flujos de retorno)”.]
              p.text-end.mt-3.mb-0(data-aos="zoom-in-left") #[span(style="background-color:#4ADBD1;padding:1px 10px;")] &nbsp;&nbsp;#[strong (Léxico, 2021)]
    
    .row.mt-5
      .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="zoom-in") La auditoría identifica aspectos a mejorar en los procesos logísticos y aporta mediante este ejercicio que se definan estrategias para restablecer el curso de los objetivos planteados, a fin de que la organización los plasme en planes de mejoramiento e indicadores que ayudarán a definir las estrategias a seguir.
        p.mt-4(data-aos="zoom-in") Los siguientes aspectos mínimos componen la ruta de una auditoría:
        ul.lista-ul--separador.mt-4
          li(data-aos="zoom-in")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Los profesionales que componen los cargos directivos deben ser entrevistados para discutir los flujos involucrados en los diferentes procesos.
          li(data-aos="zoom-in")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Seleccionar las métricas que maneja la organización y depurarlas para obtener datos confiables.
          li(data-aos="zoom-in")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Desarrollar cuestionarios orientados en la satisfacción del cliente.
          li(data-aos="zoom-in")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Definir cuáles van a ser los indicadores idóneos para la evaluación objetiva en los procesos involucrados.
      .col-lg-3(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/16.png" data-aos="zoom-in-right")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_4 2.4 Sistema de Gestión Ambiental ISO 14001
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El Sistema de Gestión Ambiental (SGA) es una herramienta o metodología que desarrolla una estructura organizativa, responsabilidades, prácticas, procedimientos, procesos y recursos para determinar y alcanzar una política medioambiental responsable. 
    
    p.mt-5.text-center.fw-bold(data-aos="zoom-in") En la siguiente figura se presentan las etapas de un Sistema de Gestión Ambiental. 

    .col-xl-8.m-auto.mt-5.col-lg-10
      figure
        img(src="@/assets/curso/tema2/18.svg" data-aos="zoom-in-up")
    
    p.mt-5(data-aos="zoom-in") Implementar un Sistema de Gestión Ambiental permite acoger normas internacionales que otorgan varios beneficios para las instituciones, al adoptar los criterios que señala la ISO 14001 se facilita la entrada al mercado de proveedores a nivel mundial. Asimismo, aumentan los ahorros, al disminuir los residuos y se aumenta el uso eficiente de los recursos naturales. 

    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/19.png" data-aos="zoom-in-right")
      .col-lg-9(style="place-self:center;")
        p(data-aos="zoom-in") Las industrias certificadas con la ISO 14001 tienen la posibilidad de disminuir gastos en seguros, atendiendo que pueden mostrar que su gestión del riesgo ha mejorado. De igual manera, se aumenta la imagen y el buen nombre de la organización y supone que traiga cierta ventaja competitiva frente a otras interacciones comerciales.
        p.mt-4(data-aos="zoom-in") Aunado a lo anterior, para emplear la Norma ISO 14001 es indispensable contar con la creación de una cultura organizacional y contar con la participación de todos los trabajadores, generando interacción de todas las áreas y procesos para cumplir con un fin común. 
        .cajon.color-acento-contenido.mt-4.p-4(style="background-color:#DDF8F7;") 
          p.mb-0(data-aos="zoom-in") Es oportuno señalar que otras de las ventajas de la certificación de la Norma ISO 14001 es la posibilidad de alinearse con otras normas como lo son la ISO 9001 o la OHSAS 18001 (futura ISO 45001), lo que le permite a la organización complementarse con otros sistemas de gestión, con el fin de que las organizaciones sean más eficientes, se propenda por la mejora continua y se implementen procesos de evaluación constante de todas las acciones que realiza la organización dentro del Sistema de Gestión Ambiental.
    
    p.mt-4(data-aos="zoom-in") El objetivo principal es prevenir la contaminación y brindar apoyo a la protección ambiental para hallar la estabilidad entre estas, con las necesidades socioeconómicas de la organización. Por lo cual, la mencionada norma es aplicable a cualquier organización que desee avanzar y mostrar su compromiso con el cuidado del medioambiente gracias al Sistema de Gestión Ambiental. 

    p.mt-5.text-center.fw-bold(data-aos="zoom-in") Requisitos:

    .col-xl-10.m-auto.mt-5
      .row
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 01
            figure.text-center
              img(src="@/assets/curso/tema2/20.svg" style="display:inline;max-width:150px;")
            p.mt-4.fw-bold.text-center.mb-0 Política ambiental
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 02
            figure.text-center
              img(src="@/assets/curso/tema2/21.svg" style="display:inline;max-width:150px;")
            p.mt-4.fw-bold.text-center.mb-0 La planificación
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 03
            figure.text-center
              img(src="@/assets/curso/tema2/22.svg" style="display:inline;max-width:150px;")
            p.mt-4.fw-bold.text-center.mb-0 Implantar
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 04
            figure.text-center
              img(src="@/assets/curso/tema2/23.svg" style="display:inline;max-width:150px;")
            p.mt-4.fw-bold.text-center.mb-0 La verificación
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 05
            figure.text-center
              img(src="@/assets/curso/tema2/24.svg" style="display:inline;max-width:150px;")
            p.mt-4.fw-bold.text-center.mb-0 Revisión de la dirección
    
    .cajon.color-primario.mt-5.p-4(style="background-color:#F2F6FE;")
      p.mb-0(data-aos="zoom-in")  Los mencionados requisitos de la ISO 14001 conllevan a generar algunos documentos entre los cuales se encuentran: los objetivos, las metas ambientales y la política, así mismo, se tiene que señalar el alcance del Sistema de Gestión Ambiental al momento de implementarlo. De igual manera, se debe instituir declaraciones con las responsabilidades y las funciones de cada uno de los trabajadores con relación al SGA y a los registros que sean necesarios en aras de asegurar la eficacia de la gestión que se está llevando a cabo.

    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/25.png" data-aos="zoom-in-right")
      .col-lg-9(style="place-self:center;")
        p.fw-bold(data-aos="zoom-in")  Características principales: 
        ul.lista-ul--separador.mt-4
          li(data-aos="zoom-in")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | No es una norma obligatoria.
          li(data-aos="zoom-in")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Es aplicable a cualquier organización que tenga la intención de mejorar y el deseo de mostrar que se encuentra comprometida con el cuidado del medioambiente, con ocasión de la implementación del SGA.
          li(data-aos="zoom-in")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | No está en la capacidad de declarar la máxima permisible de emisión de óxido nitroso de gases de combustión, ni tampoco el máximo de contenido bacteriológico en las aguas residuales.
          li(data-aos="zoom-in")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | La norma se encuentra orientada a que se aplique en todas las organizaciones, sin importar el sector, la situación geográfica, social, cultural y las dimensiones.
          li(data-aos="zoom-in")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Señala de manera concreta y específica los requisitos del Sistema de Gestión Ambiental, que de mantenerse de una forma oportuna y adecuada va a mejorar la actuación ambiental, disminuyendo todos los impactos, entre los cuales se pueden mencionar los afluentes bacteriológicos y las emisiones de óxido nitroso. 
          li(data-aos="zoom-in")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Se abstiene de señalar requisitos de actuaciones ambientales, excluyendo el compromiso de mejora continua y la obligación de cumplir con la legislación vigente en el tema.
    
    p.mt-5(data-aos="zoom-in") Un Sistema de Gestión Ambiental soportado en la ISO 14001 permite a una organización que se facilite el control de todas y cada una de sus actividades, productos y servicios, que puedan generar un impacto sobre el medioambiente, así como ayudar a que se minimicen todos los impactos ambientales que se puedan ocasionar en su operación. 

    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background: rgb(58,180,177);background: linear-gradient(270deg, rgba(58,180,177,1) 0%, rgba(26,15,145,1) 100%);border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema2/26.svg" style="display:inline;max-width:100px;")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4.text-white.fw-bold ISO 14001: Una Gestión Ambiental de calidad
            p.text-small.text-white.mb-0 Se invita a consultar la página web www.nueva-iso-14001.com, donde se brinda información relevante de la ISO 14001 Una gestión ambiental de calidad. Preste atención a las fases, requisitos y composición de la norma.
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://www.nueva-iso-14001.com/2015/06/iso-14001-una-gestion-ambiental-de-calidad/" target="_blank")
              span Ir a página
              i.fas.fa-link
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_5 2.5 Sistema de Gestión de la Calidad ISO 9001
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/27.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Es un conjunto de elementos que se relacionan, bajo procesos de trabajo que están orientados en poder lograr la calidad de un servicio o producto. En este sentido, los elementos que componen el SGC pueden ser los mismos que se han implementado en cualquier sistema de gestión, pero como siempre con miras a obtener la calidad del servicio o producto con el cual trabaje la organización.
    
    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background: rgb(58,180,177);background: linear-gradient(270deg, rgba(58,180,177,1) 0%, rgba(26,15,145,1) 100%);border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema2/28.svg" style="display:inline;max-width:100px;")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4.text-white.fw-bold Sistema de gestión de la calidad
            p.text-small.text-white.mb-0 Se invita a consultar la página web iveconsultores.com, donde se brinda información sobre qué es un sistema de gestión de la calidad. Preste atención a los conceptos del Sistema de Gestión de Calidad en cuanto a las fases, requisitos y composición de la norma.
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://iveconsultores.com/sistema-de-gestion-de-calidad/" target="_blank")
              span Ir a página
              i.fas.fa-link
    
    p.mt-5(data-aos="zoom-in") El sistema de gestión de calidad es una regla que permite estandarizar el sistema de control de calidad de las organizaciones. La ISO (Organización Internacional de Estandarización) es una entidad que congrega a representantes de varios países que tienen como fin desarrollar normas de estandarización en diferentes áreas de actuación (ISO 9001: 2015, 2018). Para implementar un sistema de gestión de calidad se deben considerar las siguientes etapas: 


    
  




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    indicadorHover: true,
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
.slyder-a__bullets__item
  background-color: #C0F2EF
.slyder-a__bullets__item--active
  background-color: #4ADBD1 !important
  border-color: #4ADBD1
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #6F88DA
.cont_slyder1
  background: url(../assets/curso/tema2/4.png)
  background-size: cover
  background-position: center
  border-radius: 20px
.tarjeta.tarjeta--azul.acordion__activo
  background-color: #F6F6F6
.lista-ol--separador li, .lista-ul--separador li
  border-bottom: dotted 2px #b0c0d2
.cont_2_1
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/26.svg)
  background-size: cover
  background-position: center
.crd_hover_txt
  position: relative
  padding: 0 !important
  overflow: hidden !important
  border-radius: 10px
.crd_hover_txt .crd_hover_txt--body
  position: absolute
  padding: 1.5rem
  width: 100%
  bottom: 0
  transition: all .5s ease-in-out
  transform: translateY(calc(100% - 3.85rem))
  background-color: #fff7e6
.crd_hover_txt:hover .crd_hover_txt--body
  transition: all .5s ease-in-out
  transform: translateY(0)
</style>
