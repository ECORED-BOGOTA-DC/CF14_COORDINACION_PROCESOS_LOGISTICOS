export default {
  global: {
    componenteFormativo: 'Supervisión de procesos de negocio',
    descripcionCurso:
      'La cadena de suministro incorpora dentro de su estructura fundamental los procesos logísticos como elemento dinámico en el cumplimiento de sus objetivos; para tal fin, dichos procesos son controlados y evaluados por indicadores (KPI) que miden el desempeño transversal, partiendo de la consecución de las materias primas y finalizando con la entrega del producto final al cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Los procesos logísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Planeación estratégica',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Plan de operación logística',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Promesa de valor',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Clientes',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Cadena de suministros',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Caracterización de los procesos logísticos',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo:
              'Flujo, procesos y procedimientos de la cadena de suministro',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Cadena logística de valor',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Desempeño de los procesos logísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Construcción de indicadores de gestión',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Trazabilidad',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Auditoría a los procesos logístico',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Sistema de Gestión Ambiental ISO 14001',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Sistema de Gestión de la Calidad ISO 9001',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Sistemas de Seguridad y Salud en el Trabajo OSHAS 18000',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Trazabilidad en la cadena de alimentos: ISO 22005',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Evaluación y mejora de los procesos logísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Planes de mejora a los procesos logísticos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'ProIndicadores de Gestión Logística KPI (Key Performance Indicator)ducción',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Evaluación del desempeño según metodología',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Cadena logística de valor',
      referencia:
        'Quintero, J. & Sánchez, J. (2006). La cadena de valor: una herramienta del pensamiento estratégico. Telos, 8(3), p. 377-389',
      tipo: 'Artículo',
      link: 'https://www.redalyc.org/articulo.oa?id=99318788001',
    },
    {
      tema: 'Desempeño de los procesos logísticos',
      referencia:
        'Servera, D. (2010). Concepto y evolución de la función logística. <em>INNOVAR. Revista de Ciencias Administrativas y Sociales</em>, 20(38), p. 217-234.',
      tipo: 'Artículo',
      link: 'https://www.redalyc.org/articulo.oa?id=81819024018',
    },
    {
      tema: 'Los procesos logísticos',
      referencia:
        'Fontalvo, T., De la Hoz, E. & Mendoza-Mendoza, A. (2021). Los procesos logísticos y la administración de la cadena de suministro. Saber, Ciencia y Libertad, 14 (2), p. 102–112',
      tipo: 'Artículo',
      link:
        'https://revistas.unilibre.edu.co/index.php/saber/article/view/5880/5458',
    },
    {
      tema: 'Planeación estratégica',
      referencia:
        'ISIV. (2019). Planeación estratégica - pasos de la planeación estratégica [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=95Y0-5DO3sw',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría',
      significado:
        'inspección o verificación de la contabilidad de una empresa o una entidad realizada por un auditor, con el fin de comprobar si sus cuentas reflejan el patrimonio, la situación financiera y los resultados obtenidos por dicha empresa o entidad en un determinado ejercicio (Léxico, 2021).',
    },
    {
      termino: 'Cadena de suministro',
      significado:
        'es el conjunto de actividades, instalaciones y medios de distribución necesarios para llevar a cabo el proceso de venta de un producto en su totalidad, desde la búsqueda de materias primas, su posterior transformación y hasta la fabricación, transporte y entrega al consumidor final (Roldán, 2021).',
    },
    {
      termino: 'Caracterización',
      significado:
        'análisis profundo de los procesos, teniendo en cuenta los elementos que originan que estos procesos tengan un principio y un final (Torres, 2021).',
    },
    {
      termino: 'Indicadores logísticos',
      significado:
        'son medidas de rendimiento cuantificables aplicadas a la gestión logística que permiten evaluar el desempeño y el resultado en cada proceso operativo que se realiza en la cadena de trabajo (Iglesias, 2014).',
    },
    {
      termino: 'Logística',
      significado:
        'conjunto de medios y métodos necesarios para llevar a cabo la organización de una empresa o de un servicio, especialmente de distribución (Maldonado, 2016).',
    },
    {
      termino: 'Metodología',
      significado:
        'conjunto de métodos que se siguen en una investigación científica o en una exposición doctrinal (Sdelsol, 2021).',
    },
    {
      termino: 'Planeación estratégic',
      significado:
        'es una herramienta de gestión que permite establecer el quehacer y el camino que deben recorrer las organizaciones para alcanzar las metas previstas, teniendo en cuenta los cambios y demandas que impone su entorno (Roncancio, 2018).',
    },
    {
      termino: 'Proceso logístico',
      significado:
        'son todas aquellas actividades que aseguran la correcta coordinación del transporte y distribución de mercancías, así como la producción de los productos (Riesco, 2021).',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'posibilidad de identificar el origen y las diferentes etapas de un proceso de producción y distribución de bienes de consumo (Lödige, 2019).',
    },
    {
      termino: 'Sistemas de gestión',
      significado:
        'es una herramienta que permite controlar, planificar, organizar y automatizar las tareas administrativas de una organización (Evaluandoerp, 2021).',
    },
  ],
  referencias: [
    {
      referencia:
        'Codina, J. (2011). Deficiencias en el uso del FODA causas y sugerencias. <em>Revista Ciencias Estratégicas</em>, 19(25), p. 89-100.',
      link: 'https://www.redalyc.org/articulo.oa?id=151322413006',
    },
    {
      referencia:
        'Evaluandoerp. (2021). <em>Sistema de gestión, ¿qué es?, ¿cuántos tipos hay?</em> Evaluandoerp.com.',
      link: '',
    },
    {
      referencia:
        'Iglesias, A. (2014). <em>Indicadores de desempeño logístico (KPI)</em>. Conexiónesan.',
      link:
        'https://www.esan.edu.pe/conexion/actualidad/2014/10/31/indicadores-desempeno-logistico-kpi',
    },
    {
      referencia:
        'IsoTools. (2021). <em>Principales requisitos para obtener un certificado de calidad ISO 9001</em>. IsoTools.',
      link:
        'https://www.isotools.org/2015/10/19/principales-requisitos-para-obtener-un-certificado-de-calidad-iso-9001',
    },
    {
      referencia:
        'Léxico. (2021). <em>Significado de auditoría en español</em>. Léxico.com.',
      link: 'https://www.lexico.com/es/definicion/auditoria',
    },
    {
      referencia:
        'Lödige, M. (2019). <em>¿Qué es la trazabilidad?</em> Foodunfolded.com.',
      link:
        'https://www.foodunfolded.com/es/articulo/rastrea-un-alimento-desde-su-origen-hasta-la-tienda',
    },
    {
      referencia: 'Maldonado, E. (2016). <em>Logística</em>. SlidePlayer.',
      link:
        'https://slideplayer.es/slide/9921470/#:~:text=Registro%20%C2%BF-,Log%C3%ADstica%20el%20conjunto%20de%20medios%20y%20m%C3%A9todos%20necesarios%20para%20llevar,un%20servicio%2C%20especialmente%20de%20distribuci%C3%B3n',
    },
    {
      referencia:
        'Nueva-ISO-45001. (2021). OHSAS 18001: <em>Resumen sobre el Sistema de Gestión de Seguridad y Salud en el Trabajo</em>.',
      link:
        'https://www.nueva-iso-45001.com/2017/03/ohsas-18001-resumen-seguridad-salud',
    },
    {
      referencia:
        'Nueva-ISO-9001-2015. (2021). <em>¿Cuáles son los beneficios de implementar un Sistema de Gestión de Calidad?</em>',
      link:
        'https://www.nueva-iso-9001-2015.com/2018/03/beneficios-sistema-de-gestion-de-calidad',
    },
    {
      referencia:
        'Riesco, J. (2021). <em>¿Qué es un proceso logístico?</em> Enviame.io',
      link: 'https://enviame.io/blog/que-es-un-proceso-logistico',
    },
    {
      referencia:
        'Roldán, P. (2021). <em>Cadena de suministro</em>. Economipedia.com.',
      link: 'https://economipedia.com/definiciones/cadena-de-suministro.html',
    },
    {
      referencia:
        'Roncancio, G. (2018). <em>¿Qué es la planeación estratégica y para qué sirve?</em> Gestionpensemos.com.',
      link:
        'https://gestion.pensemos.com/que-es-la-planeacion-estrategica-y-para-que-sirve#:~:text=La%20Planeaci%C3%B3n%20Estrat%C3%A9gica%20es%20una,demandas%20que%20impone%20su%20entorno',
    },
    {
      referencia:
        'Sabriá, F. y De Zan, A. (2016). <em>La cadena de suministro</em>. 3ᵃ Edición. Universidad de Navarra. Centro Internacional de Investigación Logística.',
      link: '',
    },
    {
      referencia:
        'Softwaredelson. (2021). <em>Metodología</em>. Softwaredelson',
      link: 'http://sdelsol.com/glosario/metodología',
    },
    {
      referencia:
        'TechTarget. (2021). <em>Gestión de la cadena de suministro</em>.',
      link:
        'https://searchdatacenter.techtarget.com/es/definicion/Gestion-de-la-cadena-de-suministro-SCM',
    },
    {
      referencia:
        'Torres, I. (2021). <em>Cómo hacer una caracterización de procesos paso a paso</em>. Iveconsultores.com.',
      link: 'https://iveconsultores.com/caracterizacion-de-procesos',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Guadrón',
          cargo: 'Responsable Línea de Producción Distrito Capital',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuador Instruccional',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: 'Fabio Andrés Salazar Reyes',
          cargo: 'Experto temático',
          centro:
            'Regional Huila – Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Giovanna Escobar',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador instruccional',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor metodológico y pedagógico',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Diseñadora y evaluadora instruccional',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información',
        },
        {
          nombre: '',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: '',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
