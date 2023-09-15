<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    figure.mb-4.mb-lg-0
      img(src="@/assets/curso/intro1.png" data-aos="flip-up" alt="Imagen decorativa")
    
    .col-lg-10.m-auto
      .p-4.cont_gradiente1(data-aos="flip-up")
        p.mb-0 Bienvenido al presente componente formativo en el que se va a trabajar la revisión y supervisión de los procesos de negocio, y su importancia que se relata en el siguiente recurso:

    .cont_intro1.mt-5
      .col-xl-10.m-auto
        figure(data-aos="fade-right")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cont_intro1
  position: relative
.cont_intro1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/intro2.png)
  background-size: cover
  background-position: center
</style>
