<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="zoom-in") La supervisión de procesos logísticos implica implementar acciones como compras, servicio al cliente, gestión de inventarios, almacenamiento y transporte. El desempeño se evalúa mediante el diagnóstico, #[em Benchmarking] logístico y sistemas de gestión de calidad. La norma ISO 9001 y OHSAS 18000 se utilizan para garantizar la calidad y seguridad laboral. La trazabilidad en la cadena alimentaria se rige por la norma ISO 22005. Se enfatiza la importancia de estudiar los sistemas de archivo, establecer registros necesarios y evaluar y mejorar los procesos logísticos mediante el uso de herramientas como el Balance ScoreCard, medición de la satisfacción del cliente, planes de mejora y uso de indicadores de gestión logística. A continuación, se presenta un esquema que aborda estos aspectos.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Muestra mapa conceptual de supervisión de procesos de negocio que permite los procesos logístico, desempeño de procesos y evaluación y mejora de procesos con cada una de sus partes. Se enfatiza la importancia de estudiar los sistemas de archivo, establecer registros necesarios y evaluar y mejorar los procesos logísticos mediante el uso de herramientas como el Balance ScoreCard, medición de la satisfacción del cliente, planes de mejora y uso de indicadores de gestión logística." data-aos="zoom-in-up")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
