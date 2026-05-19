export const es = {
  meta: {
    title: 'Andrés Ragot — Firmware & Embedded Software Engineer',
    description:
      'Firmware y embedded software engineer en Madrid. C/C++, ESP32, gráficos en tiempo real y sistemas embebidos. Antes diseñé sistemas de juego; ahora los meto dentro de microcontroladores.',
    ogAlt: 'Andrés Ragot — portfolio de firmware y embedded'
  },
  nav: {
    about: 'Sobre mí',
    now: 'Ahora',
    experience: 'Experiencia',
    skills: 'Skills',
    featured: 'Proyecto destacado',
    work: 'Trabajos',
    blog: 'Blog',
    games: 'Videojuegos',
    demo: 'Demo',
    contact: 'Contacto',
    skipToContent: 'Saltar al contenido',
    menu: 'Menú',
    closeMenu: 'Cerrar menú'
  },
  theme: {
    toggleLight: 'Cambiar a modo claro',
    toggleDark: 'Cambiar a modo oscuro'
  },
  hero: {
    eyebrow: 'Firmware & Embedded Software Engineer',
    title: 'De motores de juegos a renderizar 3D dentro de un microcontrolador.',
    lede:
      'Soy Andrés Ragot. Programo en C/C++ moderno para sistemas embebidos: ESP32, gráficos por software, drivers LCD, FreeRTOS, PSRAM y todo lo que vive entre el silicio y el píxel.',
    ctaWork: 'Ver proyectos',
    ctaContact: 'Contactar',
    location: 'Madrid, España',
    available: 'Embedded SW Engineer @ CipherBit — Grupo Oesía'
  },
  about: {
    heading: 'Sobre mí',
    p1: 'Empecé donde empieza casi todo el mundo que acaba en bajo nivel: queriendo hacer videojuegos. Estudié ingeniería en INSA de Lyon en 2017 y después un grado de Diseño y Desarrollo de Videojuegos en UDIT en Madrid.',
    p2: 'Por el camino me obsesioné con la parte que casi nadie ve: cómo se mueven los bytes, cómo se rasteriza un triángulo, cuánto cuesta una asignación dinámica, por qué un frame tarda 18 ms en vez de 16. Esa obsesión me llevó del motor al firmware.',
    p3: 'Hoy diseño y desarrollo firmware para productos embebidos: arquitectura asíncrona basada en eventos, estrategias de memoria con PSRAM, abstracciones de hardware modulares y decisiones de firmware guiadas por producto. Sigo escribiendo gráficos por software los fines de semana — porque es donde mis dos mundos se tocan.',
    languages: 'Idiomas: español, inglés, francés'
  },
  now: {
    heading: 'Ahora',
    role: 'Embedded Software Engineer',
    company: 'CipherBit — Grupo Oesía',
    when: 'Mayo 2026 — presente',
    desc:
      'Trabajando en sistemas embebidos críticos para comunicaciones seguras. Cualquier detalle público concreto lo iré añadiendo a medida que pueda compartirlo.'
  },
  experience: {
    heading: 'Experiencia',
    items: [
      {
        role: 'Embedded Software Engineer',
        company: 'CipherBit — Grupo Oesía',
        period: 'May 2026 — presente',
        location: 'Madrid, España',
        desc: 'Firmware y embedded software en el grupo Oesía, centrado en comunicaciones y sistemas críticos.'
      },
      {
        role: 'Embedded Firmware Engineer',
        company: 'ORBIS',
        period: 'Feb 2025 — May 2026',
        location: 'Madrid, España',
        desc:
          'I+D de productos embebidos conectados, con foco en arquitectura de firmware, diseño de sistema de bajo nivel y C/C++ moderno. Rediseñé partes críticas de un stack de firmware legacy para superar cuellos de botella de flash, RAM y estabilidad, mejorando la robustez en runtime y habilitando nuevas capacidades de producto sobre hardware con recursos limitados. Arquitectura asíncrona dirigida por eventos, estrategias de memoria con PSRAM, abstracciones modulares de hardware y decisiones de firmware orientadas a fiabilidad y mantenibilidad.'
      },
      {
        role: 'Embedded Software Engineer',
        company: 'SingularThings',
        period: 'Ene 2024 — Feb 2025 (prácticas desde Nov 2023)',
        location: 'Madrid, España',
        desc:
          'Desarrollo de firmware para soluciones embebidas a medida: programación de bajo nivel, integración de sensores y periféricos y sistemas inalámbricos en fase temprana. Implementación de comunicación embebida y responsabilidad técnica creciente en un entorno startup.'
      }
    ],
    education: {
      heading: 'Formación',
      items: [
        {
          title: 'Grado en Diseño y Desarrollo de Videojuegos',
          place: 'UDIT — Madrid',
          period: '2021 — 2025'
        },
        {
          title: 'Ingeniería',
          place: 'INSA de Lyon — Francia',
          period: '2017 — 2021'
        }
      ]
    }
  },
  skills: {
    heading: 'Skills técnicas',
    groups: [
      {
        title: 'Firmware & Embedded',
        items: ['C', 'C++ moderno (17/20)', 'ESP-IDF', 'ESP32 / S2 / S3 / C3 / P4', 'FreeRTOS', 'Drivers (SPI, I²C, MIPI-DSI, RGB)', 'PSRAM / memoria limitada', 'CMake / Kconfig']
      },
      {
        title: 'Graphics & Real-time',
        items: ['Software rasterization', 'Pipeline 3D (transform / clip / project)', 'GLM', 'Painter / culling', 'Double buffering', 'Optimización CPU/memoria']
      },
      {
        title: 'Game Dev background',
        items: ['Unreal Engine 5', 'Unity', 'Gameplay programming', 'Tools & pipeline', 'Sistemas en tiempo real']
      },
      {
        title: 'Tooling',
        items: ['Git', 'Doxygen', 'Xcode', 'VS Code', 'Linux / macOS', 'CI básico']
      }
    ]
  },
  featured: {
    eyebrow: 'Proyecto destacado',
    title: 'esp32_3d_engine',
    subtitle: 'Un motor de renderizado 3D por software para microcontroladores ESP32.',
    summary:
      'Renderiza escenas 3D completas con iluminación directamente en el MCU, sin GPU. Pipeline software completo desde el vértice al framebuffer, scene graph propio, malla por revolución/extrusión, cámara orbital, iluminación direccional, painter\'s algorithm y allocator PSRAM. Publicado como componente en el ESP Component Registry.',
    highlights: [
      'Pipeline software: transform → clipping Sutherland-Hodgman → proyección → rasterización scanline → framebuffer.',
      'Scene graph jerárquico con búsqueda por ID y árbol de componentes (Transform, Mesh, Light).',
      'Generación de mallas por revolución y por extrusión a partir de perfiles 2D.',
      'Iluminación direccional (ambient + diffuse) en RGB565.',
      'Doble buffer, allocator std::allocator personalizado en PSRAM.',
      'Pool de hilos opcional con std::jthread para escena/render en cores distintos.',
      'Drivers LCD intercambiables: EK79007 (MIPI-DSI), ST7262 (RGB), ST7789 (SPI).',
      'Targets soportados: ESP32-P4 y ESP32-S3 (testeo principal), ESP32 / S2 / C3 según driver.',
      'C++ 99% del codebase. Licencia MIT.'
    ],
    perfNote: 'Métricas reales medidas en hardware. Promedio sobre más de 1000 frames por configuración.',
    metricsTitle: 'BENCHMARKS REALES',
    metricsHeader: { device: 'MCU', meshes: 'Mallas', fps: 'FPS', mem: 'Heap libre' },
    metricsFootnote: 'Promedio sobre más de mil frames por configuración. ESP32-P4 240 MHz / ESP32-S3 240 MHz, ambos con PSRAM.',
    metrics: {
      baseline: {
        title: '01 · Baseline',
        desc: 'Pipeline inicial: una sola CPU, rasterizado lineal, sin ordenación de polígonos.'
      },
      'optimized-meshes': {
        title: '02 · Mallas optimizadas',
        desc: 'Mallas reducidas en triángulos y normales precalculadas. Mismo pipeline que baseline.'
      },
      painter: {
        title: '03 · Painter\'s algorithm',
        desc: 'Polígonos ordenados por profundidad. Menos overdraw, sin Z-buffer.'
      },
      parallel: {
        title: '04 · Paralelo + painter',
        desc: 'Escena en un core, render en el otro vía std::jthread. Doble buffer en PSRAM.'
      }
    },
    cta: {
      repo: 'Repositorio en GitHub',
      docs: 'Documentación Doxygen',
      registry: 'ESP Component Registry'
    }
  },
  work: {
    heading: 'Trabajos seleccionados',
    intro: 'Cosas que he construido. Filtra por disciplina.',
    filters: { all: 'Todo', firmware: 'Firmware', graphics: 'Gráficos', games: 'Juegos', tools: 'Tools', web: 'Web' },
    role: 'Rol',
    tech: 'Stack',
    impact: 'Impacto',
    links: 'Enlaces'
  },
  games: {
    heading: 'Background en videojuegos',
    intro:
      'Los videojuegos fueron mi puerta de entrada al código. Estos proyectos siguen siendo importantes porque ahí aprendí lo que hoy aplico al firmware: tiempo real, optimización, pipelines y trabajo en equipo.'
  },
  demo: {
    heading: 'Mini-demo: render por software',
    intro:
      'Un cubo wireframe rasterizado en JavaScript con la misma idea que aplica esp32_3d_engine: transformar vértices, proyectar, dibujar líneas. Sin WebGL, sin librerías.',
    play: 'Cargar demo',
    stop: 'Detener',
    reduceMotion: 'Animación desactivada (prefers-reduced-motion).',
    fps: 'FPS',
    frame: 'Frame',
    note: 'From gameplay systems to embedded graphics: misma obsesión, menos recursos.'
  },
  contact: {
    heading: 'Hablemos',
    intro:
      'Si te interesa lo que hago, escríbeme. Respondo a cosas concretas más rápido que a saludos genéricos.',
    email: 'Email',
    copy: 'Copiar email',
    copied: '¡Copiado!',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    cv: 'Descargar CV (PDF)'
  },
  footer: {
    builtWith: 'Hecho con Astro, vanilla CSS/JS y mucho café.',
    backTop: 'Volver arriba',
    rights: 'Todos los derechos reservados.'
  },
  notFound: {
    title: 'Página no encontrada',
    desc: 'La ruta que buscas no existe — pero el resto del portfolio sí.',
    home: 'Volver al inicio'
  },
  blog: {
    heading: 'Blog',
    intro: 'Notas técnicas sobre firmware, gráficos por software y embebidos.',
    empty: 'Aún no hay entradas publicadas.',
    readMore: 'Leer entrada',
    back: '← Volver al blog',
    updated: 'Actualizado'
  }
};
