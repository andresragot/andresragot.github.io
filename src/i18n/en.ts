import type { es } from './es';

export const en: typeof es = {
  meta: {
    title: 'Andrés Ragot — Firmware & Embedded Software Engineer',
    description:
      'Firmware and embedded software engineer based in Madrid. C/C++, ESP32, real-time graphics and embedded systems. I used to design game systems; now I fit them inside microcontrollers.',
    ogAlt: 'Andrés Ragot — firmware and embedded portfolio'
  },
  nav: {
    about: 'About',
    now: 'Now',
    experience: 'Experience',
    skills: 'Skills',
    featured: 'Featured',
    work: 'Work',
    blog: 'Blog',
    games: 'Games',
    demo: 'Demo',
    contact: 'Contact',
    skipToContent: 'Skip to content',
    menu: 'Menu',
    closeMenu: 'Close menu'
  },
  theme: {
    toggleLight: 'Switch to light theme',
    toggleDark: 'Switch to dark theme'
  },
  hero: {
    eyebrow: 'Firmware & Embedded Software Engineer',
    title: 'From game engines to rendering 3D inside a microcontroller.',
    lede:
      'I\'m Andrés Ragot. I write modern C/C++ for embedded systems: ESP32, software graphics, LCD drivers, FreeRTOS, PSRAM and everything that lives between silicon and pixel.',
    ctaWork: 'See projects',
    ctaContact: 'Get in touch',
    location: 'Madrid, Spain',
    available: 'Embedded SW Engineer @ CipherBit — Grupo Oesía'
  },
  about: {
    heading: 'About',
    p1: 'I started where most people who end up doing low-level work start: wanting to make video games. I studied engineering at INSA de Lyon in 2017 and then a Bachelor in Game Design & Development at UDIT in Madrid.',
    p2: 'Along the way I got obsessed with the parts nobody sees: how bytes move, how a triangle gets rasterized, how much a dynamic allocation costs, why a frame takes 18 ms instead of 16. That obsession pushed me from the engine into the firmware.',
    p3: 'Today I design and build firmware for connected embedded products: asynchronous event-driven architecture, PSRAM-aware memory strategies, modular hardware abstractions and product-driven firmware decisions. I still write software graphics on weekends — that\'s where both worlds meet.',
    languages: 'Languages: Spanish, English, French',
    photoAlt: 'Portrait of Andrés Ragot'
  },
  now: {
    heading: 'Now',
    role: 'Embedded Software Engineer',
    company: 'CipherBit — Grupo Oesía',
    when: 'May 2026 — present',
    desc:
      'Working on critical embedded systems for secure communications. I\'ll add concrete public details as soon as I can share them.'
  },
  experience: {
    heading: 'Experience',
    items: [
      {
        role: 'Embedded Software Engineer',
        company: 'CipherBit — Grupo Oesía',
        period: 'May 2026 — present',
        location: 'Madrid, Spain',
        desc: 'Firmware and embedded software inside the Oesía group, focused on communications and mission-critical systems.'
      },
      {
        role: 'Embedded Firmware Engineer',
        company: 'ORBIS',
        period: 'Feb 2025 — May 2026',
        location: 'Madrid, Spain',
        desc:
          'R&D on connected embedded products with focus on firmware architecture, low-level system design and modern C/C++. Redesigned critical parts of a legacy firmware stack to overcome flash, RAM and stability bottlenecks — improving runtime robustness and enabling richer product capabilities on constrained hardware. Async event-driven architecture, PSRAM-aware memory strategies, modular hardware abstractions and product-driven firmware decisions for reliability and maintainability.'
      },
      {
        role: 'Embedded Software Engineer',
        company: 'SingularThings',
        period: 'Jan 2024 — Feb 2025 (intern from Nov 2023)',
        location: 'Madrid, Spain',
        desc:
          'Firmware development for custom embedded solutions: low-level programming, sensor and peripheral integration, early-stage wireless systems. Implemented embedded communication features and quickly took on increasing technical responsibility in a fast-moving startup environment.'
      }
    ],
    education: {
      heading: 'Education',
      items: [
        {
          title: 'BSc Game Design & Development',
          place: 'UDIT — Madrid',
          period: '2021 — 2025'
        },
        {
          title: 'Engineering studies',
          place: 'INSA de Lyon — France',
          period: '2017 — 2021'
        }
      ]
    }
  },
  skills: {
    heading: 'Technical skills',
    groups: [
      {
        title: 'Firmware & Embedded',
        items: ['C', 'Modern C++ (17/20)', 'ESP-IDF', 'ESP32 / S2 / S3 / C3 / P4', 'FreeRTOS', 'Drivers (SPI, I²C, MIPI-DSI, RGB)', 'PSRAM / constrained memory', 'CMake / Kconfig']
      },
      {
        title: 'Graphics & Real-time',
        items: ['Software rasterization', '3D pipeline (transform / clip / project)', 'GLM', 'OpenGL', 'Vulkan (learning)', 'Painter / culling', 'Double buffering', 'CPU/memory optimization']
      },
      {
        title: 'Game Dev background',
        items: ['Unreal Engine 5', 'Unity', 'Gameplay programming', 'Tools & pipeline', 'Real-time systems']
      },
      {
        title: 'Tooling',
        items: ['Git', 'Doxygen', 'Xcode', 'VS Code', 'Linux / macOS', 'Basic CI']
      }
    ]
  },
  featured: {
    eyebrow: 'Featured project',
    title: 'esp32_3d_engine',
    subtitle: 'A software 3D rendering engine for ESP32 microcontrollers.',
    summary:
      'Renders full 3D scenes with lighting directly on the MCU — no GPU. Full software pipeline from vertex to framebuffer, custom scene graph, revolution/extrusion mesh generation, orbital camera, directional lighting, painter\'s algorithm and PSRAM allocator. Published as a component in the ESP Component Registry.',
    highlights: [
      'Software pipeline: transform → Sutherland-Hodgman clipping → projection → scanline rasterization → framebuffer.',
      'Hierarchical scene graph with ID lookup and component tree (Transform, Mesh, Light).',
      'Mesh generation by revolution and extrusion from 2D profiles.',
      'Directional lighting (ambient + diffuse) in RGB565.',
      'Double buffering, custom std::allocator placing large buffers in PSRAM.',
      'Optional thread pool with std::jthread running scene/render on separate cores.',
      'Pluggable LCD drivers: EK79007 (MIPI-DSI), ST7262 (RGB), ST7789 (SPI).',
      'Supported targets: ESP32-P4 and ESP32-S3 (main testing), ESP32 / S2 / C3 via drivers.',
      'C++ for 99% of the codebase. MIT license.'
    ],
    perfNote: 'Real metrics measured on hardware. Average over 1000+ frames per configuration.',
    metricsTitle: 'REAL BENCHMARKS',
    metricsHeader: { device: 'MCU', meshes: 'Meshes', fps: 'FPS', mem: 'Free heap' },
    metricsFootnote: 'Average over 1000+ frames per configuration. ESP32-P4 240 MHz / ESP32-S3 240 MHz, both with PSRAM.',
    metrics: {
      baseline: {
        title: '01 · Baseline',
        desc: 'Initial pipeline: single CPU, linear rasterization, no polygon sorting.'
      },
      'optimized-meshes': {
        title: '02 · Optimized meshes',
        desc: 'Reduced triangle count, precomputed normals. Same pipeline as baseline.'
      },
      painter: {
        title: '03 · Painter\'s algorithm',
        desc: 'Polygons sorted by depth. Less overdraw, no Z-buffer.'
      },
      parallel: {
        title: '04 · Parallel + painter',
        desc: 'Scene on one core, render on the other via std::jthread. Double buffer in PSRAM.'
      }
    },
    cta: {
      repo: 'GitHub repo',
      docs: 'Doxygen docs',
      registry: 'ESP Component Registry'
    }
  },
  work: {
    heading: 'Selected work',
    intro: 'Things I\'ve built. Filter by discipline.',
    filters: { all: 'All', firmware: 'Firmware', graphics: 'Graphics', games: 'Games', tools: 'Tools', web: 'Web' },
    role: 'Role',
    tech: 'Stack',
    impact: 'Impact',
    links: 'Links'
  },
  games: {
    heading: 'Game development background',
    intro:
      'Games were my door into code. These projects still matter because that\'s where I learned what I apply to firmware today: real-time, optimization, pipelines and teamwork.'
  },
  demo: {
    heading: 'Mini-demo: software render',
    intro:
      'A wireframe cube rasterized in JavaScript with the same idea esp32_3d_engine uses: transform vertices, project, draw lines. No WebGL, no libraries.',
    play: 'Load demo',
    stop: 'Stop',
    reduceMotion: 'Motion disabled (prefers-reduced-motion).',
    fps: 'FPS',
    frame: 'Frame',
    note: 'From gameplay systems to embedded graphics: same obsession, fewer resources.'
  },
  contact: {
    heading: 'Let\'s talk',
    intro:
      'If what I do is interesting to you, drop me a line. I reply to concrete things faster than to generic intros.',
    email: 'Email',
    copy: 'Copy email',
    copied: 'Copied!',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    cv: 'Download CV (PDF)'
  },
  footer: {
    builtWith: 'Built with Astro, vanilla CSS/JS and a lot of coffee.',
    backTop: 'Back to top',
    rights: 'All rights reserved.'
  },
  notFound: {
    title: 'Page not found',
    desc: 'The route you\'re looking for doesn\'t exist — but the rest of the portfolio does.',
    home: 'Back to home'
  },
  blog: {
    heading: 'Blog',
    intro: 'Technical notes on firmware, software graphics and embedded systems.',
    empty: 'No posts published yet.',
    readMore: 'Read post',
    back: '← Back to blog',
    updated: 'Updated'
  }
};
