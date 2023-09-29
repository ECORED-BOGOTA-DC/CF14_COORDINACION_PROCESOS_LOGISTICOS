<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-up")
      .titulo-principal__numero
        span 2
      h1  Desempeño de los procesos logísticos
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Un aspecto fundamental en el establecimiento de la compañía como parte del mercado es la determinación del desempeño íntegro de sus operaciones internas y externas, de tal manera, que se tengan métricas de monitoreo al detalle para proponer estrategias de mejora continua y así, prever fallas en el sistema que bloqueen el componente logístico.
    
    .row.mt-5
      .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="zoom-in") Mediante el diagnóstico de los procesos logísticos se puede conocer la realidad de la cadena logística en el interior de una empresa. Básicamente, es un análisis comparativo entre los objetivos planteados inicialmente y las metas cumplidas al momento de hacer la evaluación.
        .cajon.color-acento-contenido.mt-4.p-4(style="background-color:#DDF8F7;" data-aos="fade-right") 
          p.mb-0 #[strong #[em Benchmarking] logístico:] recolecta información de los diferentes actores del mercado, con el fin de generar una cultura adaptativa de acuerdo con las necesidades de los clientes. Las actividades de #[em benchmarking] son desarrolladas con pruebas de evaluación comparativas, útiles para determinar espacios vulnerables y fortalecer las áreas que soportan el sistema logístico.
      .col-lg-3(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/2.svg" data-aos="zoom-in-left" alt="Imagen decorativa")
    
    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/3.png" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-8(style="place-self:center;")
        p(data-aos="zoom-in") Los aspectos que evalúa el #[em benchmarking] en la cadena de suministro son los tiempos involucrados en cada proceso, el valor agregado creado y el logro producido según los objetivos planteados.
        .cajon.color-primario.mt-4.p-4(style="background-color:#F2F6FE;") 
          p.mb-0(data-aos="zoom-in") En el siguiente recurso de aprendizaje se presentan las tres clases de #[em benchmarking] que se pueden desarrollar de manera aislada o asociada al conjunto de actividades de la cadena logística:
    
    .tarjeta.bg-white.p-4.p-lg-5.cont_slyder1.mt-5
      SlyderA(tipo="b" data-aos="zoom-in")
        .row(style="position:relative;")
          div(style="position:absolute;width:100%;left:0;z-index:1;top:-60px;")
            span(style="font-size:160px;font-weight:bold;color:#DBDDE0;") 01
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;position:relative;z-index:2;")
            h5 #[em Benchmarking] interno
            p.mt-4 Es una comparación interna de la organización, se tiene como parámetro la forma como están desarrollando los diferentes procesos en cada área de la organización. 
            p.mt-4 Los resultados obtenidos son comparados entre dependencias para identificar cuáles son los que favorecen el dinamismo de la compañía e institucionalizarlos dentro de la empresa. 
          .col-lg-4(style="place-self:center;position:relative;z-index:2;")
            figure
              img(src="@/assets/curso/tema2/5.svg" alt="Imagen decorativa")
        .row(style="position:relative;")
          div(style="position:absolute;width:100%;left:0;z-index:1;top:-60px;")
            span(style="font-size:160px;font-weight:bold;color:#DBDDE0;") 02
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;position:relative;z-index:2;")
            h5 #[em Benchmarking] externo
            p.mt-4 Esta técnica motiva la superación de los límites y expone a la organización a un variado abanico de alternativas, donde puede extractar lo mejor del mercado y adaptarlo a su propio ecosistema.
          .col-lg-4(style="place-self:center;position:relative;z-index:2;")
            figure
              img(src="@/assets/curso/tema2/6.svg" alt="Imagen decorativa")
        .row(style="position:relative;")
          div(style="position:absolute;width:100%;left:0;z-index:1;top:-60px;")
            span(style="font-size:160px;font-weight:bold;color:#DBDDE0;") 03
          .col-lg-8.mb-4.mb-lg-0(style="place-self:center;position:relative;z-index:2;")
            h5 #[em Benchmarking] competitivo
            p.mt-4 Es un análisis comparativo desde el interior de la organización, buscando las razones de ineficiencia en los procesos propios de la empresa por medio de entidades especializadas en investigación y consultoría, estas suministrarán resultados sin sesgo o presión por alguna de las unidades operativas del sistema. Adicionalmente, proveerán información acerca de las debilidades y fortalezas presentadas asociadas a los competidores.
          .col-lg-4(style="place-self:center;position:relative;z-index:2;")
            figure
              img(src="@/assets/curso/tema2/7.svg" alt="Imagen decorativa")
    
    Separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_2_1 2.1 Construcción de indicadores de gestión
    
    figure.mb-4.mb-lg-0
      img(src="@/assets/curso/tema2/8.png" data-aos="flip-up" alt="Imagen decorativa")
    .col-lg-10.m-auto
      .p-4.cont_gradiente1(data-aos="flip-up")
        p.mb-0 Es prudente tener una visión amplia del entorno evaluado, es decir, la perspectiva de negocio debe ser transversal, sobre toda la estructura organizacional, ya que, al término de la implementación del indicador, el flujo de información debe ser bidireccional en todas las áreas.
    
    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.svg" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-9
        p(data-aos="zoom-in") Adicionalmente, es prioritario definir los siguientes parámetros:
        .row.mt-4
          .col-lg.mb-4.mb-lg-0
            ul.lista-ul--separador
              li(data-aos="fade-right")
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Objetivo del indicador.
              li(data-aos="fade-right")
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Definición.
              li(data-aos="fade-right")
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Fórmula de cálculo.
          .col-lg.mb-4.mb-lg-0
            ul.lista-ul--separador
              li(data-aos="flip-up")
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Periodicidad de la toma de registros.
              li(data-aos="flip-up")
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Responsable de la recolección de datos.
              li(data-aos="flip-up")
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Fuentes de información.
          .col-lg.mb-4.mb-lg-0
            ul.lista-ul--separador
              li(data-aos="fade-left")
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Fuentes de verificación.
              li(data-aos="fade-left")
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Componentes del reporte.
    
    .cajon.color-primario.mt-5.p-4(style="background-color:#F2F6FE;") 
      p.mb-0(data-aos="zoom-in") Principalmente, con la información suministrada por cada indicador propio de la organización son comparados con los indicadores presentados en el mercado por los directos competidores, de tal manera que sea visible el estado en el que se encuentra la empresa con respecto a los actores del mercado y tenga conocimientos sólidos para la toma de decisiones.
    
    Separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_2_2 2.2 Trazabilidad
    
    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/10.svg" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-9
        p(data-aos="zoom-in") Es la capacidad de tener el control de un producto, materia prima, artículo o servicio mediante una identificación registrada, ubicación e historial del mismo. 
        p.mt-4(data-aos="zoom-in") Es útil para mejorar los procesos de control e incrementar la eficiencia de la organización, de la misma forma reduce costos por fallas de la estructura operativa y los traumatismos que puedan surgir por la pérdida del producto.
    
    .cajon.color-acento-contenido.mt-4.p-4(style="background-color:#DDF8F7;" data-aos="fade-right") 
      p.mb-0 Actualmente, el campo logístico está siendo afectado positivamente por el desarrollo de nuevas tecnologías, en procesos tales como:
 
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
            p.mb-0 Los #[em drones] juegan un papel relevante en las nuevas tecnologías usadas en la distribución y rastreo de mercancías, debido a sus características de movilidad.
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
            p.mb-0 El #[em big data] incursiona en el mundo logístico, recolectando información elemental para mejorar la eficiencia de las actividades productivas con la toma de decisiones estratégicas.
    
    p.mt-5(data-aos="fade-right") La trazabilidad presenta tres tipos, las cuales están supeditadas al tipo de mercancía y proceso productivo:
    
    .col-xl-10.m-auto.mt-5
      .cont_2_1
        .row.justify-content-center.indicador__container(@mouseover="indicadorHover = false")
          .col-lg.col-md-9.mb-4.mb-xl-0
            .crd_hover_txt(data-aos='flip-right')
              .crd_hover_txt--img
                figure
                  img(src='@/assets/curso/tema2/11.png' alt="Imagen decorativa")
              .crd_hover_txt--body(style="background-color:#91B3FA;")
                h5.mb-3.text-center Trazabilidad hacia atrás
                p.mt-3.mb-0.text-small El origen del producto es el principio del seguimiento y control, es decir, el rastreo surge cuando el proveedor emite la orden de salida de la materia prima desde su lugar de despacho. 
          .col-lg.col-md-9.mb-4.mb-xl-0
            .indicador--hover(v-if="indicadorHover")
            .crd_hover_txt(data-aos='flip-up')
              .crd_hover_txt--img
                figure
                  img(src='@/assets/curso/tema2/12.png' alt="Imagen decorativa")
              .crd_hover_txt--body(style="background-color:#57DBD8;")
                h5.mb-3.text-center Trazabilidad interna
                p.mt-3.mb-0.text-small El seguimiento es efectuado en los procesos internos, la materia prima se involucra en el sistema donde toma características propias de la organización.
          .col-lg.col-md-9.mb-4.mb-xl-0
            .crd_hover_txt(data-aos='flip-left')
              .crd_hover_txt--img
                figure
                  img(src='@/assets/curso/tema2/13.png' alt="Imagen decorativa")
              .crd_hover_txt--body(style="background-color:#91B3FA;")
                h5.mb-3.text-center Tazabilidad hacia adelante
                p.mt-3.mb-0.text-small El control se desarrolla en el proceso de emisión de la orden de despacho hasta la entrega final del producto al cliente. La mercancía o servicio debe tener registrado el lugar o planta de origen, lote al cual pertenece, fechas de expedición y recepción del producto, así como la identificación del cliente (lugar, identificación de quien recibe).
    
    p.mt-5(data-aos="fade-right") En la siguiente tabla se presentan las especificaciones mínimas de las trazabilidades:

    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Tabla 2.
        span Especificaciones mínimas de trazabilidad
      .tabla-a.color-primario.mt-4
        table
          thead
            tr(style="background-color:#E9F0FE;" data-aos="fade-right")
              th.text-center.p-4 Trazabilidad hacia atrás
              th.text-center.p-4 Trazabilidad interna
              th.text-center.p-4 Trazabilidad hacia adelante
          tbody
            tr.bg-white(data-aos="fade-right")
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
    
    Separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_2_3 2.3 Auditoría a los procesos logísticos
    
    .row
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/14.svg" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-9(style="place-self:center;")
        p(data-aos="zoom-in") El propósito de la auditoria es suministrar un diagnóstico del estado del arte de la empresa en el área logística y cómo está afrontando los cambios con procesos de mejora continua. 
        .p-3.pt-2.mt-4(style="background: rgb(255,255,255);background: linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(244,244,244,1) 100%);")
          .row
            .col-lg-auto.col-5.mb-lg-0.mb-4
              figure
                img(src="@/assets/curso/tema1/19.svg" data-aos="zoom-in-right" alt="Imagen decorativa")
            .col-lg.col-12(style="place-self:center;")
              p.mb-0.mt-3(data-aos="zoom-in-left") #[strong “Una auditoría es una radiografía de las distintas áreas y procesos involucrados en la cadena de abastecimiento (desde la adquisición de insumos hasta la entrega del producto final, incluyendo también los flujos de retorno)”.]
              p.text-end.mt-3.mb-0(data-aos="zoom-in-left") #[span(style="background-color:#4ADBD1;padding:1px 10px;")] &nbsp;&nbsp;#[strong (Léxico, 2021)]
    
    .row.mt-5
      .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-right") La auditoría identifica aspectos a mejorar en los procesos logísticos y aporta mediante este ejercicio que se definan estrategias para restablecer el curso de los objetivos planteados, a fin de que la organización los plasme en planes de mejoramiento e indicadores que ayudarán a definir las estrategias a seguir.
        p.mt-4(data-aos="fade-right") Los siguientes aspectos mínimos componen la ruta de una auditoría:
        ul.lista-ul--separador.mt-4
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Los profesionales que componen los cargos directivos deben ser entrevistados para discutir los flujos involucrados en los diferentes procesos.
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Seleccionar las métricas que maneja la organización y depurarlas para obtener datos confiables.
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Desarrollar cuestionarios orientados en la satisfacción del cliente.
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Definir cuáles van a ser los indicadores idóneos para la evaluación objetiva en los procesos involucrados.
      .col-lg-3(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/16.png" data-aos="fade-left" alt="Imagen decorativa")
    
    Separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_2_4 2.4 Sistema de Gestión Ambiental ISO 14001
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/17.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El Sistema de Gestión Ambiental (SGA) es una herramienta o metodología que desarrolla una estructura organizativa, responsabilidades, prácticas, procedimientos, procesos y recursos para determinar y alcanzar una política medioambiental responsable. 
    
    p.mt-5.text-jusify(data-aos="fade-right") En la siguiente figura se presentan las etapas de un Sistema de Gestión Ambiental. 

    .col-xl-8.m-auto.mt-5.col-lg-10
      .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 4.
          span Etapas de un sistema de gestión ambiental
      figure
        img(src="@/assets/curso/tema2/18.svg" data-aos="zoom-in-up" alt="Muestra grafico de etapas de un sistema de gestión ambiental con el siguiente texto: 1. Etapa de planteamiento: los mecanismos a aplicar, duración y forma de conseguir lo propuesto por la organización.  2. Etapa de implementación: Se lleva a cabo un plan, una preparación con vistas al punto mencionado 3. Etapa de verificación: Se hace una comparación entre la implementación realizada con la que se planificó inicialmente. 4. Etapa de mejora: Se definen las gestiones que se requieren para remediar las problemáticas generadas de desviaciones registradas en el sistema de gestión ambiental.")
    
    p.mt-5(data-aos="fade-right") Implementar un Sistema de Gestión Ambiental permite acoger normas internacionales que otorgan varios beneficios para las instituciones, al adoptar los criterios que señala la ISO 14001 se facilita la entrada al mercado de proveedores a nivel mundial. Asimismo, aumentan los ahorros, al disminuir los residuos y se aumenta el uso eficiente de los recursos naturales. 

    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/19.png" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-9(style="place-self:center;")
        p(data-aos="fade-left") Las industrias certificadas con la ISO 14001 tienen la posibilidad de disminuir gastos en seguros, atendiendo que pueden mostrar que su gestión del riesgo ha mejorado. De igual manera, se aumenta la imagen y el buen nombre de la organización y supone que traiga cierta ventaja competitiva frente a otras interacciones comerciales.
        p.mt-4(data-aos="fade-left") Aunado a lo anterior, para emplear la Norma ISO 14001 es indispensable contar con la creación de una cultura organizacional y contar con la participación de todos los trabajadores, generando interacción de todas las áreas y procesos para cumplir con un fin común. 
        .cajon.color-acento-contenido.mt-4.p-4(style="background-color:#DDF8F7;") 
          p.mb-0(data-aos="fade-left") Es oportuno señalar que otras de las ventajas de la certificación de la Norma ISO 14001 es la posibilidad de alinearse con otras normas como lo son la ISO 9001 o la OHSAS 18001 (futura ISO 45001), lo que le permite a la organización complementarse con otros sistemas de gestión, con el fin de que las organizaciones sean más eficientes, se propenda por la mejora continua y se implementen procesos de evaluación constante de todas las acciones que realiza la organización dentro del Sistema de Gestión Ambiental.
    
    p.mt-4(data-aos="fade-right") El objetivo principal es prevenir la contaminación y brindar apoyo a la protección ambiental para hallar la estabilidad entre estas, con las necesidades socioeconómicas de la organización. Por lo cual, la mencionada norma es aplicable a cualquier organización que desee avanzar y mostrar su compromiso con el cuidado del medioambiente gracias al Sistema de Gestión Ambiental. 

    p.mt-5.text-center.fw-bold(data-aos="fade-right") Requisitos:

    .col-xl-10.m-auto.mt-5
      .row
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 01
            figure.text-center
              img(src="@/assets/curso/tema2/20.svg" style="display:inline;max-width:150px;" alt="Imagen decorativa")
            p.mt-4.fw-bold.text-center.mb-0 Política ambiental
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 02
            figure.text-center
              img(src="@/assets/curso/tema2/21.svg" style="display:inline;max-width:150px;" alt="Imagen decorativa")
            p.mt-4.fw-bold.text-center.mb-0 La planificación
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 03
            figure.text-center
              img(src="@/assets/curso/tema2/22.svg" style="display:inline;max-width:150px;" alt="Imagen decorativa")
            p.mt-4.fw-bold.text-center.mb-0 Implantar
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 04
            figure.text-center
              img(src="@/assets/curso/tema2/23.svg" style="display:inline;max-width:150px;" alt="Imagen decorativa")
            p.mt-4.fw-bold.text-center.mb-0 La verificación
        .col-lg.col-md-6.mb-4.mb-lg-0
          .h-100.p-4.pt-2(style="background-color:#F6F6F6;position:relative;border-radius:10px;box-shadow:0px 4px 5px rgba(0,0,0,.15);" data-aos="zoom-in-up")
            .text-end
              span(style="color:#D7DADD;font-weight:bold;font-size:20px;") 05
            figure.text-center
              img(src="@/assets/curso/tema2/24.svg" style="display:inline;max-width:150px;" alt="Imagen decorativa")
            p.mt-4.fw-bold.text-center.mb-0 Revisión de la dirección
    
    .cajon.color-primario.mt-5.p-4(style="background-color:#F2F6FE;" data-aos="fade-right")
      p.mb-0 Los mencionados requisitos de la ISO 14001 conllevan a generar algunos documentos entre los cuales se encuentran: los objetivos, las metas ambientales y la política, así mismo, se tiene que señalar el alcance del Sistema de Gestión Ambiental al momento de implementarlo. De igual manera, se debe instituir declaraciones con las responsabilidades y las funciones de cada uno de los trabajadores con relación al SGA y a los registros que sean necesarios en aras de asegurar la eficacia de la gestión que se está llevando a cabo.

    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/25.png" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-9(style="place-self:center;")
        p.fw-bold(data-aos="fade-left")  Características principales: 
        ul.lista-ul--separador.mt-4
          li(data-aos="fade-left")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | No es una norma obligatoria.
          li(data-aos="fade-left")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Es aplicable a cualquier organización que tenga la intención de mejorar y el deseo de mostrar que se encuentra comprometida con el cuidado del medioambiente, con ocasión de la implementación del SGA.
          li(data-aos="fade-left")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | No está en la capacidad de declarar la máxima permisible de emisión de óxido nitroso de gases de combustión, ni tampoco el máximo de contenido bacteriológico en las aguas residuales.
          li(data-aos="fade-left")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | La norma se encuentra orientada a que se aplique en todas las organizaciones, sin importar el sector, la situación geográfica, social, cultural y las dimensiones.
          li(data-aos="fade-left")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Señala de manera concreta y específica los requisitos del Sistema de Gestión Ambiental, que de mantenerse de una forma oportuna y adecuada va a mejorar la actuación ambiental, disminuyendo todos los impactos, entre los cuales se pueden mencionar los afluentes bacteriológicos y las emisiones de óxido nitroso. 
          li(data-aos="fade-left")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            | Se abstiene de señalar requisitos de actuaciones ambientales, excluyendo el compromiso de mejora continua y la obligación de cumplir con la legislación vigente en el tema.
    
    p.mt-5(data-aos="fade-right") Un Sistema de Gestión Ambiental soportado en la ISO 14001 permite a una organización que se facilite el control de todas y cada una de sus actividades, productos y servicios, que puedan generar un impacto sobre el medioambiente, así como ayudar a que se minimicen todos los impactos ambientales que se puedan ocasionar en su operación. 
    p.mt-4(data-aos="fade-right") Por lo anterior, está encaminado en la gestión de “causa y efecto”, en el entendido de que todos los servicios, actividades y productos que se ofrezcan por parte de la organización son la causa y los efectos que resultan del impacto que los mismos generan sobre el medioambiente. Conforme a lo anterior, los impactos que se pueden presentar son aumento de la tasa de individuos con enfermedades respiratorias dentro de la población que se encuentra cerca de la empresa, la contaminación que se produzca en un terreno colindante a la organización con ocasión a filtraciones o los cambios de temperatura del agua de un arroyo cercano, entre otros.

    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background: rgb(58,180,177);background: linear-gradient(270deg, rgba(58,180,177,1) 0%, rgba(26,15,145,1) 100%);border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema2/26.svg" style="display:inline;max-width:100px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4.text-white.fw-bold ISO 14001: Una Gestión Ambiental de calidad
            p.text-small.text-white.mb-0 Se invita a consultar la página web www.nueva-iso-14001.com, donde se brinda información relevante de la ISO 14001 Una gestión ambiental de calidad. Preste atención a las fases, requisitos y composición de la norma.
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://www.nueva-iso-14001.com/2015/06/iso-14001-una-gestion-ambiental-de-calidad/" target="_blank")
              span Ir a página
              i.fas.fa-link
    
    Separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_2_5 2.5 Sistema de Gestión de la Calidad ISO 9001
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/27.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Es un conjunto de elementos que se relacionan, bajo procesos de trabajo que están orientados en poder lograr la calidad de un servicio o producto. En este sentido, los elementos que componen el SGC pueden ser los mismos que se han implementado en cualquier sistema de gestión, pero como siempre con miras a obtener la calidad del servicio o producto con el cual trabaje la organización.
    
    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background: rgb(58,180,177);background: linear-gradient(270deg, rgba(58,180,177,1) 0%, rgba(26,15,145,1) 100%);border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema2/28.svg" style="display:inline;max-width:100px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4.text-white.fw-bold Sistema de gestión de la calidad
            p.text-small.text-white.mb-0 Se invita a consultar la página web iveconsultores.com, donde se brinda información sobre qué es un sistema de gestión de la calidad. Preste atención a los conceptos del Sistema de Gestión de Calidad en cuanto a las fases, requisitos y composición de la norma.
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://iveconsultores.com/sistema-de-gestion-de-calidad/" target="_blank")
              span Ir a página
              i.fas.fa-link
    
    p.mt-5(data-aos="fade-right") El sistema de gestión de calidad es una regla que permite estandarizar el sistema de control de calidad de las organizaciones. La ISO (Organización Internacional de Estandarización) es una entidad que congrega a representantes de varios países que tienen como fin desarrollar normas de estandarización en diferentes áreas de actuación (ISO 9001: 2015, 2018). Para implementar un sistema de gestión de calidad se deben considerar las siguientes etapas: 

    .col-xl-10.m-auto.mt-5
      figure
        img(src="@/assets/curso/tema2/29.svg" data-aos="zoom-in-up" alt="Muestra etapas para implementar sistemas de gestión de calidad 1. Establecer la situación actual de la organización  2. . Definir los objetivos 3. Estimación de plazos- tiempos 4.Definición de recursos y personal 5. Estimar la productividad actual 6. Aplicar cambios que permitan obtener mejoras")
    
    p.mt-5(data-aos="fade-left") Reconozca los beneficios de implementar un sistema de gestión de calidad, propuestos por la nueva-ISO-9001-2015 (2021):
    
    .cont_2_2.mt-5.pt-5.pb-5
      .col-xl-10.m-auto
        PasosA.color-acento-contenido(tipo="n")
          .row(data-aos="fade-left")
            .col-lg-8.order-lg-1.order-2(style="place-self:center;")
              h5 Mejora los procesos de la organización
              p.mb-0 Los procesos que se llevan a cabo en la actividad productiva de la organización tienen y siguen unos estándares que aseguran que se está cumpliendo con las normas que permiten que sea un proceso optimizado. 
            .col-lg-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4(style="place-self:center;")
              figure.text-center
                img(src='@/assets/curso/tema2/30.svg' style="display:inline;max-width:200px;" alt="Imagen decorativa")
          .row(data-aos="fade-right")
            .col-lg-4.col-6.mb-4.mb-md-0(style="place-self:center;")
              figure.text-center
                img(src='@/assets/curso/tema2/31.svg' style="display:inline;max-width:200px;" alt="Imagen decorativa")
            .col-lg-8.text-start(style="place-self:center;")
              h5 Sobresalir frente a la competencia
              p.mb-0 Las organizaciones que implementen y cuenten con el Certificado de la Norma ISO 9001 van a destacarse de la competencia, porque contar con un sistema de gestión de calidad que se encuentre certificado genera una imagen muy positiva sobre los potenciales clientes, haciendo que una organización prevalezca frente a otras.
          .row(data-aos="fade-left")
            .col-lg-8.order-lg-1.order-2(style="place-self:center;")
              h5 Disminución de costos sin que se vea afectada la calidad
              p.mb-0 Se debe mejorar la calidad de los servicios o productos, sin que esto conlleve a que la calidad de los mismos se vea afectada. El fin es optimizar el proceso y eliminar los costos superfluos de tiempo o recursos.
            .col-lg-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4(style="place-self:center;")
              figure.text-center
                img(src='@/assets/curso/tema2/32.svg' style="display:inline;max-width:200px;" alt="Imagen decorativa")
          .row(data-aos="fade-right")
            .col-lg-4.col-6.mb-4.mb-md-0(style="place-self:center;")
              figure.text-center
                img(src='@/assets/curso/tema2/33.svg' style="display:inline;max-width:200px;" alt="Imagen decorativa")
            .col-lg-8.text-start(style="place-self:center;")
              h5 Satisfacer al cliente
              p.mb-0 La finalidad principal que se desea obtener de la implementación de un sistema de gestión de calidad es poder cumplir con todas las expectativas que el cliente establezca. El objetivo en todo el proceso se encuentra orientado a satisfacer siempre al cliente. 
          .row(data-aos="fade-left")
            .col-lg-8.order-lg-1.order-2(style="place-self:center;")
              h5 Obtener nuevos cliente
              p.mb-0 Al cumplir los estándares que establece un sistema de gestión de calidad la organización ofrece seguridad ante los clientes potenciales. El poder obtener nuevos clientes se logra al tener una excelente imagen que se proyecta con el hecho de que una organización ofrezca bienes y servicios de calidad, lo cual se produce cuando se adopta un sistema de gestión de calidad que permita avalar los procedimientos que se llevan a cabo como resultado del proceso productivo. Por lo cual, al tener una certificación en la Norma ISO 9001 se permite asegurar una atención optima al cliente, que ayuda a la captación de estos. 
            .col-lg-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4(style="place-self:center;")
              figure.text-center
                img(src='@/assets/curso/tema2/34.svg' style="display:inline;max-width:200px;" alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-right") El principal objetivo o fin que tiene la Norma ISO 9001 es acrecentar la satisfacción de los clientes, gracias a los procesos de mejora continua. 

    p.mt-5.text-center.fw-bold(data-aos="zoom-in") Los principales requisitos para la Certificación de la Norma ISO 9001, de acuerdo con isotools.org (2021) son:

    .row.justify-content-center.indicador__container(@mouseover="indicadorHover2 = false")
      .col-lg.col-md-9.mb-4.mb-xl-0
        .crd_hover_txt(data-aos='flip-right')
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/tema2/35.png' alt="Imagen decorativa")
          .crd_hover_txt--body(style="background-color:#91B3FA;")
            h5.mb-3.text-center El cumplimiento de los requisitos legales
            p.mt-3.mb-0.text-small El tener la certificación de calidad de la Norma ISO 9001 no solo implica acogerse a las reglas o pautas de ISO en esta materia; del mismo modo, es indispensable que las empresas u organizaciones acojan las diferentes legislaciones relacionadas con el tema, como lo es la Ley de protección de datos, las licencias adaptadas para la actividad comercial, las leyes laborales y de riesgos profesionales, además de todas las normas, continentales, nacionales, regionales y locales sobre los procesos de calidad. 
      .col-lg.col-md-9.mb-4.mb-xl-0
        .indicador--hover(v-if="indicadorHover2")
        .crd_hover_txt(data-aos='flip-up')
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/tema2/36.png' alt="Imagen decorativa")
          .crd_hover_txt--body(style="background-color:#57DBD8;")
            h5.mb-3.text-center Formación del personal
            p.mt-3.mb-0.text-small Es necesario para la implementación del proceso de un sistema de gestión de calidad la formación adecuada y óptima de todos los individuos que hacen parte de las empresas, por ser ellos quienes finalmente ejecutarán las labores o tareas previas a la aplicación del modelo de calidad. Es importante mencionar que esta formación se puede dar por la misma empresa o si es necesario, delegarse en una consultora especializada. 
      .col-lg.col-md-9.mb-4.mb-xl-0
        .crd_hover_txt(data-aos='flip-left')
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/tema2/37.png' alt="Imagen decorativa")
          .crd_hover_txt--body(style="background-color:#91B3FA;")
            h5.mb-3.text-center Desembolso económico
            p.mt-3.mb-0.text-small El proceso de gestión de calidad que esté avalado por la ISO 9001 permite tener una ventaja desde el aspecto de la competitividad con otras empresas que dará sus óptimos resultados a largo plazo; sin embargo, implica en la fase de implementación de una cierta inversión económica, sobre todo si se obtienen los servicios de una consultora especializada. 
    
    p.mt-5.text-center.fw-bold(data-aos="fade-right") La estructura de los sistemas de gestión de calidad se ilustra en la siguiente figura, que muestra los diferentes elementos involucrados.

    .cont_2_3.mt-5
      .col-xl-4.col-lg-6.m-auto
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 5.
          span Organización estructural de los sistemas de gestión de la calidad.
        figure
          img(src="@/assets/curso/tema2/38.svg" data-aos="zoom-in-up" alt="Muestra organización estructural de los sistemas de gestión de calidad: 1. objetivo o alcance 2. Normatividad 3. Definiciones y términos 4. Marco de la organización 5. Liderazgo  6. La planificación 7. Soporte")
    
    Separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_2_6 2.6	Sistema de Seguridad y Salud en el Trabajo OSHAS 18000 
    
    figure.mb-4.mb-lg-0
      img(src="@/assets/curso/tema2/39.png" data-aos="flip-up" alt="Imagen decorativa")
    .col-lg-10.m-auto
      .p-4.cont_gradiente1(data-aos="flip-up")
        p.mb-0 La Norma OHSAS 18001 es un estándar voluntario que se relaciona con la salud en el trabajo y con la seguridad en el trabajo. En el desarrollo de esta se obtuvo la participación de distintas empresas certificadoras alrededor del mismo, reuniendo más de 15 países de Asia, Europa y América. 
    
    .cajon.color-primario.mt-5.p-4(style="background-color:#F2F6FE;" data-aos="fade-right") 
      p.mb-0El El objetivo de las Normas OHSAS 18001:2007 es el mejoramiento de la seguridad y la salud en todos los lugares de trabajo, mediante una gestión estructurada y sistemática, que es complementaria y compatible con los sistemas de gestión de calidad y medio ambiente. 
    
    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/40.png" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-9(style="place-self:center;")
        p(data-aos="zoom-in") Las características de la norma son: 
        ul.lista-ul--separador.mt-4
          li(data-aos="fade-left")
            i.fas.fa-check-circle(style="color:#4ADBD1;") 
            | No exige requisito para su aplicación.
          li(data-aos="fade-left")
            i.fas.fa-check-circle(style="color:#4ADBD1;") 
            | Está diseñada para que se aplique por cualquier organización, independientemente de su tipo, tamaño, origen geográfico, cultural o social.
          li(data-aos="fade-left")
            i.fas.fa-check-circle(style="color:#4ADBD1;")
            |  Es una norma genérica al igual que toda la serie ISO, por lo cual es aplicable a cualquier tipo de empresa que lo desee: 
        ul.lista-ul.mt-3.ps-md-4
          li(style="display: flex" data-aos="fade-left")
            i.fas.fa-check
            | Poner en marcha, mantener y mejorar la gestión de seguridad y salud ocupacional.
          li(style="display: flex" data-aos="fade-left")
            i.fas.fa-check
            | Conformidad con la política de seguridad y salud ocupacional.
          li(style="display: flex" data-aos="fade-left")
            i.fas.fa-check
            | Búsqueda de la certificación/registro de un sistema de seguridad y salud ocupacional por una organización externa.
          li(style="display: flex" data-aos="fade-left")
            i.fas.fa-check
            | Eliminar o disminuir los riesgos a los que puedan verse afectados o expuestos.
    
    .row.mt-5
      .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-right") Los beneficios al implementar la norma de acuerdo con la nueva-ISO-45001 (2021):
        ul.lista-ul--separador.mt-4
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color:#4ADBD1;") 
            | Minimiza el riesgo de que se produzca un accidente de gran magnitud.
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color:#4ADBD1;") 
            | Permite la unificación de un sistema de gestión que tiene o incluye medioambiente, salud, calidad y seguridad.
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color:#4ADBD1;") 
            | Se reduce el número de individuos que se accidentan en la empresa. 
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color:#4ADBD1;") 
            | Se disminuye el material perdido con ocasión de todos los accidentes o por las interrupciones de producción no deseada. 
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color:#4ADBD1;") 
            | Asegura que se cumpla la legislación específica. 
          li(data-aos="fade-right")
            i.fas.fa-check-circle(style="color:#4ADBD1;") 
            | Permite tener una fuerza de trabajo que se caracterice por estar bien calificada, esté motivada a través de la satisfacción de las expectativas de empleo. 
      .col-lg-3(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/41.png" data-aos="zoom-in-left" alt="Imagen decorativa")
    
    Separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_2_7 2.7 Trazabilidad en la cadena de alimentos: ISO 22005

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/42.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 La ISO 22005 es una guía de requisitos que determina o marca las pautas lógicas para la implementación de un sistema de trazabilidad en una empresa del sector agroalimentario que lo necesite. 
    
    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/43.svg" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-9(style="place-self:center;")
        p(data-aos="zoom-in") Si un operador conoce o tiene la sospecha que un alimento no está cumpliendo con los requisitos mínimos y necesarios de seguridad alimentaria, la legislación vigente lo obliga a que identifique y retire el mismo en el menor tiempo posible, con el fin de que se proteja la salud de todos los consumidores. 
        .cajon.color-acento-contenido.mt-4.p-4(style="background-color:#DDF8F7;") 
          p.mb-0(data-aos="zoom-in") Es importante y clave la capacidad de identificar y retirar un producto que esté contaminado para el mantenimiento de la inocuidad del mercado alimentario, siendo una cuestión de salud pública; sin embargo, en la práctica la identificación de manera fehaciente de un producto que esté contaminado puede llevar horas o incluso días, en la mayoría de los sistemas de trazabilidad tradicionales. 
    
    .col-xl-10.m-auto.mt-5
      .p-4(data-aos="flip-up" style="background: rgb(58,180,177);background: linear-gradient(270deg, rgba(58,180,177,1) 0%, rgba(26,15,145,1) 100%);border-radius:15px;")
        .row.m-0
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema2/44.svg" style="display:inline;max-width:100px;" alt="Imagen decorativa")
          .col-lg-7.col-md-6.mb-4.mb-md-0(style="place-self:center;")
            h4.text-white.fw-bold Trazabilidad de alimentos, definición y normativas:
            p.text-small.text-white.mb-0 Consulte la página web trazable.io donde se brinda información  sobre la trazabilidad de alimentos, definición y normativas. Preste atención a la utilidad, los requisitos, los estándares reconocidos y a la importancia del aseguramiento de la cadena alimentaria.
          .col-lg-3.col-md-3.text-center(style="place-self:center;")
            a.boton.color-acento-botones(href="https://trazable.io/trazabilidad-alimentaria/" target="_blank")
              span Ir a página
              i.fas.fa-link
    
    p.mt-5(data-aos="fade-right") Esta norma señala los principios y establece los requisitos mínimos o básicos para el diseño y la ejecución de un sistema de trazabilidad de toda la cadena alimentaria. En este sentido, puede aplicarse por una institución u organización que actúe en cualquier etapa de la mencionada cadena. 

    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/45.png" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-9(style="place-self:center;")
        p(data-aos="fade-left") Así las cosas, está diseñada para que sea lo suficientemente flexible como para consentir que las organizaciones alimentarias alcancen sus objetivos identificados, tanto para animales como para el consumo humano. 
        .cajon.color-primario.mt-4.p-4(style="background-color:#F2F6FE;" data-aos="fade-left") 
          p.mb-0 Para la definición del sistema de trazabilidad se presentan las siguientes definiciones en el recurso de aprendizaje:
    
    .cont_2_4.mt-5.p-4.p-lg-5
      .row
        .col-lg-6.mb-4.mb-lg-0(style="place-self:center;" data-aos="fade-right")
          .tarjeta.bg-white.p-4.p-lg-5
            SlyderA(tipo="b")
              .row.text-center
                p.fw-bold Definiciones de sistema de trazabilidad
                p.mt-4 Es la facultad para dar seguimiento al movimiento de un alimento por intermedio de los pasos concretos o específicos de la producción, transformación y distribución (Codex Alimentaruis). 
              .row.text-center
                figure
                  img(src="@/assets/curso/tema2/48.svg" alt="Imagen decorativa")
                p.mt-4 Es la capacidad de rehacer los eventos, uso o la localización de un producto a través de identificaciones registradas (ISO 8402). 
              .row.text-center
                p.mt-4 Es la posibilidad de hallar y seguirle el rastro por intermedio de cada una de las etapas de producción y distribución a un alimento, una sustancia destinada a ser incorporada en alimentos o con probabilidad de serlo o un animal que tiene como fin la producción de alimentos (Artículo 178/2002 del Parlamento de la UE). 
        .col-lg-6(style="place-self:center;" data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema2/47.png" alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-right") Los aspectos en torno a lo que se construye como trazabilidad en general son el registro histórico de los datos relativos a un artículo o un lote específico y una identificación codificada para un producto. 

    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/49.png" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-9(style="place-self:center;")
        p(data-aos="zoom-in") La trazabilidad se fundamenta en cada una de las unidades que se producen en una instalación y que estén identificadas de forma inequívoca y así mismo, que sea posible determinar las características principales que están asociadas a su producción, esto es:
        .row.mt-4
          .col-lg.mb-4.mb-lg-0(data-aos="fade-left")
            .tarjeta-numerada.color-primario.p-5.pb-4.pt-4.h-100(style="box-shadow:0px 0px 15px rgba(0,0,0,.2);")
              .tarjeta-numerada__numero
                .h2 1
              p.text-center.mb-0 La materia prima utilizada.
          .col-lg.mb-4.mb-lg-0(data-aos="fade-left")
            .tarjeta-numerada.color-acento-contenido.p-5.pb-4.pt-4.h-100(style="box-shadow:0px 0px 15px rgba(0,0,0,.2);")
              .tarjeta-numerada__numero
                .h2 2
              p.text-center.mb-0 El proceso al que se somete. 
          .col-lg.mb-4.mb-lg-0(data-aos="fade-left")
            .tarjeta-numerada.color-primario.p-5.pb-4.pt-4.h-100(style="box-shadow:0px 0px 15px rgba(0,0,0,.2);")
              .tarjeta-numerada__numero
                .h2 3
              p.text-center.mb-0 La finalidad que se le ha dado. 
        .cajon.color-primario.mt-4.p-4(style="background-color:#F2F6FE;") 
          p.mb-0(data-aos="zoom-in") De tal manera que el código o la identificación asignada a una unidad o lote esté relacionado con el histórico de ese producto en específico.
     
    p.mt-5(data-aos="fade-right") En la siguiente figura se presentan las fases para la aplicación de un sistema de trazabilidad:

    .titulo-sexto.color-acento-botones.mt-5(data-aos="fade-right")
      h5 Figura 6.
      span Fases para la aplicación de un sistema de trazabilidad
    figure
      img(src="@/assets/curso/tema2/50.svg" data-aos="zoom-in-up" alt="Imagen que muestra fases para la aplicación de un sistema de trazabilidad y se describen en la parte inferior.")
    
    br
    .mt-5.p-3.ps-4.pe-4.mb-4(style="max-width:fit-content;background-color:#57DBD8;border-radius:0px 30px 0px 30px;" data-aos="zoom-in-right")
      h4.mb-0 Estudiar los sistemas de archivo propios
    
    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/51.png" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-9(style="place-self:center;")
        p(data-aos="zoom-in") En primer lugar, la empresa deberá estudiar detenidamente los procedimientos, tanto en su contenido como en su forma de archivo que está utilizando y evaluar si con ellos se cumple el objetivo de trazabilidad. En algunos casos las empresas pueden encontrarse con que ya se está haciendo todo lo necesario para conseguir la trazabilidad; en otros en cambio podría ser necesario generar nuevos archivos o adaptar los procedimientos existentes. Es importante destacar que un sistema de trazabilidad no tiene por qué ser complicado. 
        .cajon.color-primario.mt-4.p-4(style="background-color:#F2F6FE;" data-aos="fade-left") 
          p.mb-0 El mejor sistema de trazabilidad para una empresa es aquel que encuadre con sus actividades de trabajo habituales y permita registrar información necesaria a la que luego se pueda acceder de forma rápida y fácil. Estudiar detenidamente el sistema de trazabilidad de la empresa puede permitirle sacar beneficio de la información que el mismo sistema genera. Debe tenerse en cuenta que la trazabilidad no es más que una herramienta para la empresa, con la cual se mejora notablemente el manejo de esta.
    
    .mt-5.p-3.ps-4.pe-4.mb-4(style="max-width:fit-content;background-color:#57DBD8;border-radius:0px 30px 0px 30px;" data-aos="zoom-in-right")
      h4.mb-0 Consultar a proveedores y clientes
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/52.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Previamente a la implantación de un sistema de trazabilidad y luego de analizar los sistemas de archivo propios existentes es recomendable consultar a proveedores y clientes respecto a la disponibilidad de información con la que cuentan y con la que desearían contar, sus implicancias, obstáculos y posibilidad de mejora, solicitando registros existentes de proveedores y clientes. Así también podrá ser útil pedir consejo a otras partes implicadas, como otras empresas, consultoras, autoridades de control, etc. Informarse si existen recomendaciones o guías de trazabilidad para empresas del sector.
    
    .mt-5.p-3.ps-4.pe-4.mb-4(style="max-width:fit-content;background-color:#57DBD8;border-radius:0px 30px 0px 30px;" data-aos="zoom-in-right")
      h4.mb-0 Definir del ámbito de aplicación
    
    p(data-aos="fade-right") Con relación al sistema de trazabilidad que se implemente en una empresa desde la etapa anterior hasta la posterior debe ayudar a sostener la trazabilidad en toda la cadena alimentaria. Así las cosas, dependiendo del tipo de actividad dentro de la mencionada cadena, el sistema puede requerir:

    .col-xl-7.m-auto.col-lg-10.mt-5
      ImagenInfografica.color-secundario(data-aos="zoom-in")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema2/53.svg' alt="Imagen de tipos de trazabilidad - Trazabilidad hacia atrás - Trazabilidad hacia adelante - Trazabilidad del proceso o interna")
        .tarjeta.color-acento-botones.p-4(x="74%" y="70%" numero="+" style="background-color:#12263F;")
          p.text-white.mb-0 Es la trazabilidad de los productos que se reciben de proveedores, dejando detalle de qué, cuándo, cuántos, quién e información clave que dé cuenta del origen del producto. Desde cualquier etapa se debería poder contar este tipo de trazabilidad, pues la cadena de registro puede romperse si no se tiene el rastro detallado de cada producto. 
        .tarjeta.color-acento-botones.p-4(x="44%" y="10%" numero="+" style="background-color:#12263F;")
          p.text-white.mb-0 Es la trazabilidad de los productos que se encuentran  dentro de la empresa.  De esto se debe dejar registro cuando son procesados, transformados, cambiados, mezclados o divididos, dejando trazabilidad de lo que se crea, a partir de qué se crean, cómo, cuándo, cuánto queda y se debe cumplir con el principio FIFO (primero entra, primero sale), etc. 
        .tarjeta.color-acento-botones.p-4(x="15%" y="70%" numero="+" style="background-color:#12263F;")
          p.text-white.mb-0 Es la trazabilidad de los productos que salen de la empresa, se debe dejar registro de a quién se entrega, qué se entrega o qué se ha vendido, cuándo, cuántos, si los intermediarios cumplen con las condiciones de conservación de los productos para dar cumplimiento a las fechas de vencimiento, entre otros. Es necesario contar con la información detallada que surja desde “el campo al plato” a lo largo de cada etapa. 
    
    .cont_2_4.mt-5.p-4.p-lg-5
      .row
        .col-lg-6.mb-4.mb-lg-0(style="place-self:center;" data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/54.png" alt="Imagen decorativa")
        .col-lg-6(style="place-self:center;" data-aos="fade-left")
          .tarjeta.bg-white.p-4.p-lg-5
            SlyderA(tipo="b")
              .row.text-center
                p.fw-bold La información que es oportuna registrar es:
                p.mt-4 De quién o quiénes se reciben los productos, es decir, el origen de estos, los pormenores de los proveedores, contrato, entre otros. 
              .row.text-center
                p Qué se recibe,  las condiciones del producto, su estado (según corresponda: fresco, congelado, etc.), el tipo de producto, número de lote y/o el número de identificación de cada uno de los productos, fecha de envasado, elaboración y vencimiento, controles de calidad, factura de compra, y cualquier otro dato que dé cuenta de la identidad del producto. 
              .row.text-center
                p Momento en que se deberá registrar, cuándo se recibió los productos. 
              .row.text-center
                p Cantidad del producto recibido: se debe llevar el registro de la cantidad de productos que se aceptaron o admitieron, según corresponda en litros, bultos, kilogramos, etc. 
              .row.text-center
                p Qué se realizó o se hizo con los productos: almacenarlos en el almacén, si están mezclados con los productos del proveedor X, etc.
    
    .cajon.color-primario.mt-5.p-4(style="background-color:#F2F6FE;" data-aos="fade-right") 
      p.mb-0 En el área de trazabilidad de proceso (interna) se trata de relacionar los productos que se han recibido en la empresa con los procesos que estos han seguido, esto es, equipos, cámaras, división, mezclado, entre otros. En los acuerdos que establecen entre empresas con sus proveedores están solicitando garantías relacionadas con la implementación o aplicación de un mecanismo de trazabilidad interna, esto aporta al proceso interno, contribuyendo a la gestión del riesgo y siendo beneficioso para los proveedores y para las empresas. En cuanto a la información que es conveniente registrar se tiene: 

    .cont_2_3.mt-5
      SlyderF(columnas="col-lg-6 col-xl-4" style="position:relative;" data-aos="zoom-in")
        .tarjeta.bg-white.p-4(style="box-shadow:0px 0px 10px rgba(0,0,0,.1);border-radius:0px;")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema2/55.svg')
          p.mt-4 Cuando se presenta un tipo de modificación en los productos es necesario dejar registro en qué etapa del proceso cambian su estado, o se mezclan o se dividen. Por lo anterior, dependiendo de la actividad varía el número de puntos en los que se necesite hacer registros.  
        .tarjeta.bg-white.p-4(style="box-shadow:0px 0px 10px rgba(0,0,0,.1);border-radius:0px;")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema2/56.svg')
          p.mt-4 Es importante registrar la identificación de cada uno de los productos intermedios, asignando un código único de identificación y el número del lote. Al momento de la entrega se debe acompañar el producto con este código. 
        .tarjeta.bg-white.p-4(style="box-shadow:0px 0px 10px rgba(0,0,0,.1);border-radius:0px;")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema2/57.svg')
          p.mt-4 Se debe tener registro de ingredientes, aditivos, los alimentos, especias, todo producto que se incorpore, con la opción de utilizar el registro de control de #[em stock].
        .tarjeta.bg-white.p-4(style="box-shadow:0px 0px 10px rgba(0,0,0,.1);border-radius:0px;")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema2/58.svg')
          p.mt-4 Se debe controlar la cantidad de producto en cada una de las etapas del proceso, con miras de poder calcular los rendimientos.  Asimismo, tener claridad de la cantidad de producto que se encuentra almacenado si es el caso, de cada etapa.
        .tarjeta.bg-white.p-4(style="box-shadow:0px 0px 10px rgba(0,0,0,.1);border-radius:0px;")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema2/59.svg')
          p.mt-4 Se debe registrar datos de elaboración, división, almacenaje o cambios a los que han sido sometidos los productos, generan datos de diferentes tipos.
        .tarjeta.bg-white.p-4(style="box-shadow:0px 0px 10px rgba(0,0,0,.1);border-radius:0px;")
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema2/60.svg')
          p.mt-4 En general, es necesario relacionar esta información con los datos de control del procesado, tales como: registro de humedad, tratamiento, de temperatura entre otros, pudiendo identificar las causas de los problemas que se presenten. 
    
    .mt-5.p-3.ps-4.pe-4.mb-4(style="max-width:fit-content;background-color:#57DBD8;border-radius:0px 30px 0px 30px;" data-aos="zoom-in-right")
      h4.mb-0 Definir los criterios para la agrupación de productos en relación con la trazabilidad
    
    p(data-aos="fade-right") Es necesario que cada empresa agrupe el registro de productos conforme lo establezca el conjunto de unidades que produce, hace, envasa o maneja en general. Se debe dejar registro detallado de dicha agrupación, la cual se denomina normalmente “partida” o “lote”. 

    .row.mt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/61.png" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-8(style="place-self:center;")
        p(data-aos="zoom-in") Para el caso de las empresas del sector primario es oportuno asociar cada partida con los productos empleados para su consecución: raciones, alimentos para animales, medicamentos veterinarios, forma de captura y deben identificarla. La empresa transformadora debe asociar, las materias primas con los ingredientes que se han utilizado. 
        .cajon.color-primario.mt-4.p-4(style="background-color:#F2F6FE;") 
          p.mb-0(data-aos="zoom-in") Asimismo, en las empresas en las cuales se llevan a cabo nuevos procesos con los productos aportados por otras es de esperarse que se creen nuevos números de lote, quienes deben garantizar que de forma efectiva se realice la rastreabilidad de las materias primas.
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="zoom-in") Conforme lo anterior, para agrupar e identificar los productos la empresa del sector primario, así como la transformadora o elaboradora tienen la capacidad de configurar sus agrupaciones atendiendo variados criterios, entre los cuales se puede señalar la línea de producción, el horario, el tipo de documento, lugar y fecha, establecimiento, parcela, granja, etc.
        .cajon.color-acento-contenido.mt-4.p-4(style="background-color:#DDF8F7;") 
          p.mb-0(data-aos="zoom-in") De igual manera se forman nuevas agrupaciones cuando se llevan a cabo operaciones de elaboración, almacenamiento y distribución como resultado de la mixtura de distintos productos, los cuales se deben identificar con su código de agrupación propio.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/62.png" data-aos="zoom-in-left" alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-right") Con relación a la identificación de los productos hay una variedad amplia de posibles sistemas que van desde etiquetas que se escriben a mano como códigos de barras, entre otros. 

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/63.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Con el uso de identificadores que se encuentran estandarizados, como lo son los códigos de barras que facilitan la circulación de los datos de la cadena alimentaria; sin embargo, es preciso tener claro que ningún sistema de identificación es adecuado en todas las circunstancias; por lo cual es oportuno utilizar diferentes tipos de identificación en una misma empresa. 
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="zoom-in") Con relación al tamaño de la agrupación o del lote, la empresa es responsable de definir el grado de precisión, así como el sistema de identificación que se va a implementar. En este sentido, la precisión con que se forma una agrupación establecerá el tamaño de esta. 
        .cajon.color-primario.mt-4.p-4(style="background-color:#F2F6FE;") 
          p.mb-0(data-aos="zoom-in") Habitualmente, cuánto más delimitada sea una agrupación menor será la cantidad de producto que se debe retirar o inmovilizar en caso de inconvenientes de seguridad alimentaria, lo cual se denomina “<i>recall</i>”, por lo cual en la experiencia: 
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/64.png" data-aos="zoom-in-left" alt="Imagen decorativa")
    
    .col-xl-8.m-auto.mt-5.col-lg-10
      .row.m-0.mb-3(style="box-shadow:3px 3px 10px rgba(0,0,0,.15);border-radius:0px 30px 30px 0px;position:relative;" data-aos="zoom-in-up")
        .col-auto.ps-0.pe-0
          .h-100.d-flex.align-items-center.align-content-center.p-3(style="background-color:#91B3FA;")
            span.fw-bold(style="font-size:37px;") 01
        .col.pe-0.ps-0
          div(style="position:absolute;width:5px;background-color:#91B3FA;height:50px;right:0;top:20%;")
          .h-100.d-flex.align-content-center.p-3(style="background-color:#F8F8F8;border-radius:0px 30px 30px 0px;")
            p.mb-0 En caso de que una empresa seleccionada, la fecha de elaboración como sistema de identificación del lote, la totalidad de los productos que tengan esta fecha se deben localizar y retirar en caso de que ocurra un incidente de seguridad alimentaria. 
      .row.m-0.mb-3(style="box-shadow:3px 3px 10px rgba(0,0,0,.15);border-radius:0px 30px 30px 0px;position:relative;" data-aos="zoom-in-up")
        .col-auto.ps-0.pe-0
          .h-100.d-flex.align-items-center.align-content-center.p-3(style="background-color:#57DBD8;")
            span.fw-bold(style="font-size:37px;") 02
        .col.pe-0.ps-0
          div(style="position:absolute;width:5px;background-color:#57DBD8;height:50px;right:0;top:20%;")
          .h-100.d-flex.align-content-center.p-3(style="background-color:#F8F8F8;border-radius:0px 30px 30px 0px;")
            p.mb-0 En caso de que se seleccione la fecha de fabricación, solo la producción de esta hora, fecha y máquina debe ser identificada, localizada o retirada en cada incidente de seguridad alimentaria.  

    .mt-5.p-3.ps-4.pe-4.mb-4(style="max-width:fit-content;background-color:#57DBD8;border-radius:0px 30px 0px 30px;" data-aos="zoom-in-right")
      h4.mb-0 Establecer registros y documentación necesaria
    
    p(data-aos="zoom-in") Es oportuno que la documentación necesaria del sistema de trazabilidad en una empresa contenga: 
        
    .row.mt-5
      .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta-numerada.color-primario.p-5.pb-4.pt-4.h-100(style="box-shadow:0px 0px 15px rgba(0,0,0,.2);")
          .tarjeta-numerada__numero
            .h2 1
          p.text-center.mb-0 Un ámbito de aplicación del sistema.
      .col-lg.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta-numerada.color-acento-contenido.p-5.pb-4.pt-4.h-100(style="box-shadow:0px 0px 15px rgba(0,0,0,.2);")
          .tarjeta-numerada__numero
            .h2 2
          p.text-center.mb-0 Características y descripción.
      .col-lg.mb-4.mb-lg-0(data-aos="flip-right")
        .tarjeta-numerada.color-primario.p-5.pb-4.pt-4.h-100(style="box-shadow:0px 0px 15px rgba(0,0,0,.2);")
          .tarjeta-numerada__numero
            .h2 3
          p.text-center.mb-0 Inventario de las operaciones que se realicen.
    .row.mt-lg-4
      .col-lg.mb-4.mb-lg-0(data-aos="flip-left")
        .tarjeta-numerada.color-primario.p-5.pb-5.pt-5.h-100(style="box-shadow:0px 0px 15px rgba(0,0,0,.2);")
          .tarjeta-numerada__numero
            .h2 4
          p.text-center.mb-0 Simulacro de trazabilidad y rastreo.
      .col-lg.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-numerada.color-acento-contenido.p-5.pb-5.pt-5.h-100(style="box-shadow:0px 0px 15px rgba(0,0,0,.2);")
          .tarjeta-numerada__numero
            .h2 5
          p.text-center.mb-0 Revisión y actualización. 
      .col-lg.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-numerada.color-primario.p-5.pb-5.pt-5.h-100(style="box-shadow:0px 0px 15px rgba(0,0,0,.2);")
          .tarjeta-numerada__numero
            .h2 6
          p.text-center.mb-0 Identificación de responsables. 

    p.mt-5(data-aos="fade-right") Si las empresas tienen un sistema de registro y autocontrol oportuno pueden ser considerados como una herramienta fundamental de gestión de los riesgos alimentarios, que podrá ayudar al montaje del sistema de trazabilidad. 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/65.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La información del producto es útil para la trazabilidad, puede registrarse en hojas de datos sobre papel o digitalmente mediante tecnologías informáticas, que tienen gran capacidad de archivo en menor espacio y que además, pueden incluir la recogida automática de datos y equipamiento, tal como impresoras de etiquetas y lectores de códigos de barras, que llevan consigo otras eficiencias operacionales. 
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="zoom-in") En cuanto al plazo de conservación de los registros, más allá de lo exigido por la normativa o sistema de certificación que se trate, el periodo de conservación de estos dependerá en gran medida del destino final de la mercadería.  
        .cajon.color-primario.mt-4.p-4(style="background-color:#F2F6FE;") 
          p.mb-0(data-aos="zoom-in") El periodo de conservación de los registros será como mínimo el periodo de vida útil del producto, más un periodo adicional de 6 meses; sin embargo, en muchos casos, resulta casi imposible conocer el proceso completo que va a sufrir todo el producto desde su producción primaria hasta su consumo final. Esto es debido a que existe un gran número de productos susceptibles de ser sometidos a uno o varios sistemas de conservación (congelación o ultracongelación) y/o transformación (esterilización, secado) que prolongan la vida útil de los mismos.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/66.png" data-aos="zoom-in-left" alt="Imagen decorativa")
    
    .mt-5.p-3.ps-4.pe-4.mb-4(style="max-width:fit-content;background-color:#57DBD8;border-radius:0px 30px 0px 30px;" data-aos="zoom-in-right")
      h4.mb-0 Establecer mecanismos de validación y verificación por parte de la empresa
    
    p(data-aos="zoom-in") Para determinar si la trazabilidad es fiable se deben establecer mecanismos de verificación y validación, por lo cual es recomendable realizar eventualmente revisiones y comprobar el funcionamiento y veracidad de los registros, el sistema debe evaluarse teniendo en cuenta: 

    figure.mt-4
      img(src="@/assets/curso/tema2/67.svg" data-aos="zoom-in-up" alt="Imagen decorativa")
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/68.png')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Estas revisiones periódicas son importantes y puede ser realizadas por inspectores, clientes, autocontroles y/o terceros contratados para este fin, pueden participar y sugerir casos prácticos para comprobar que la información puede recogerse de forma fiable y rápida. 
    
    .col-xl-10.m-auto.mt-5
      .tarjeta-avatar-b(data-aos="flip-up")
        .tarjeta-avatar-b__img
          img(src='@/assets/curso/tema2/69.svg')
        .tarjeta(style="background-color:#F6F6F6;box-shadow:0px 0px 10px rgba(0,0,0,.15);")
          .p-4.row.m-0
            .col(style="place-self:center;")
              p.mb-0 Por ejemplo, para realizar esta validación se tomará un producto y se hará seguimiento de los registros que se tienen de trazabilidad y se comprobará si se puede conocer el origen de las materias primas y de los procesos tecnológicos sufridos. Otro caso ejemplo podría ser validar si a partir de una documentación de una materia prima se puede conocer el producto del que ha formado parte y su distribución.
            .col-auto(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/70.svg" alt="Imagen decorativa")
    
    .mt-5.p-3.ps-4.pe-4.mb-4(style="max-width:fit-content;background-color:#57DBD8;border-radius:0px 30px 0px 30px;" data-aos="zoom-in-right")
      h4.mb-0 Establecer mecanismos de comunicación entre empresas
    
    .row.mt-5
      .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="zoom-in") La efectividad en un sistema de trazabilidad concibe y compromete toda la cadena, esto es, a todos los eslabones de producción. Cada uno es responsable de evitar que se destroce la trazabilidad en la parte que representa, pues de ocurrir se pueden ver perjudicados los operadores que están llevando a cabo de manera suficiente el desarrollo del sistema de trazabilidad en su establecimiento. 
        .cajon.color-primario.mt-4.p-4(style="background-color:#F2F6FE;") 
          p.mb-0(data-aos="zoom-in") En varias empresas se solicita a sus proveedores que socialicen o compartan la información sobre la trazabilidad, establecen mecanismos y protocolos afines sobre cómo compartir la información y la identificación. 
      .col-lg-3(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/71.png" data-aos="zoom-in-left" alt="Imagen decorativa")
    
    .mt-5.p-3.ps-4.pe-4.mb-4(style="max-width:fit-content;background-color:#57DBD8;border-radius:0px 30px 0px 30px;" data-aos="zoom-in-right")
      h4.mb-0 Establecer procedimientos para la localización, inmovilización y/o retiro de productos (<i>recall</i>)

    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/72.png" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-9(style="place-self:center;")
        p(data-aos="zoom-in") Las empresas en general tienen el deber legal de distribuir en el mercado productos seguros, que cumplan todos los requisitos legales; sin embargo, en ocasiones se producen incidentes. Cuando estos incidentes ocurren, las empresas deben determinar la naturaleza del evento y poder tomar las medidas correctivas pertinentes, con el fin de implementar medidas de control que garanticen la salud de los consumidores y la reputación de la empresa, eliminado la causa raíz que generó el evento y evitar que se vuelva a producir.
        p.mt-4(data-aos="zoom-in") Cuando esto ocurre, las empresas deben considerar las siguientes actuaciones:
        .row.mt-4
          .col-lg
            ul.lista-ul--separador
              li(data-aos="fade-right")
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Avisar a las autoridades competentes.
              li(data-aos="fade-right")
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Establecer la naturaleza del incidente o evento.
              li(data-aos="fade-right")
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Identificar el producto que fue afectado.
              li(data-aos="fade-right")
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Acoger las respectivas medidas correctivas.
          .col-lg
            ul.lista-ul--separador
              li(data-aos="fade-left")
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Informar a los demás operadores que se vean involucrados.
              li(data-aos="fade-left")
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Hacer informes posteriores al incidente y sacar conclusiones.
              li(data-aos="fade-left")
                i.fas.fa-check-circle(style="color:#4ADBD1;")
                | Volver pública la información por intermedio de varios medios de comunicación y de difusión que se requieran.
        
</template>

<script>
import SlyderF from '@/components/SlyderF.vue'
export default {
  name: 'Tema2',
  components: { SlyderF },
  data: () => ({
    indicadorHover: true,
    indicadorHover2: true,
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
.cont_2_2
  position: relative
.cont_2_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background-color: #FAFAFA
.pasos-a.color-acento-contenido .pasos-a__linea .hor-line
  border-top-color: #91B3FA
.pasos-a.color-acento-contenido .pasos-a__numero::after
  border-left-color: #91B3FA
.pasos-a.color-acento-contenido .pasos-a__linea__esquina__linea
  border-color: #91B3FA
  border-radius: 0px
.cont_2_3
  position: relative
.cont_2_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/26.svg)
  background-size: cover
  background-position: center
.cont_2_4
  background: url(../assets/curso/tema2/46.png)
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
.slyder-f__btn i
  font-size: 2rem
  background-color: #FE7062
  padding: 0.6rem 1rem
  border-radius: 50%
.slyder-f__slyde
  padding: 10px
.tarjeta-numerada
  display: flex
  align-content: center
  flex-wrap: wrap
.tarjeta-avatar-b__img img
  max-width: 150px
.tarjeta-avatar-b .tarjeta
  padding-left: 6%
.tarjeta-avatar-b__img
  min-width: 17%
  max-width: 13%
</style>
