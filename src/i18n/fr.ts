import type { es } from './es';

export const fr: typeof es = {
  meta: {
    title: 'Andrés Ragot — Ingénieur Firmware & Logiciel Embarqué',
    description:
      'Ingénieur firmware et logiciel embarqué à Madrid. C/C++, ESP32, graphismes temps réel et systèmes embarqués. Hier je concevais des systèmes de jeu ; aujourd\'hui je les fais tenir dans un microcontrôleur.',
    ogAlt: 'Andrés Ragot — portfolio firmware et embarqué'
  },
  nav: {
    about: 'À propos',
    now: 'Maintenant',
    experience: 'Expérience',
    skills: 'Compétences',
    featured: 'Projet phare',
    work: 'Travaux',
    games: 'Jeux',
    demo: 'Démo',
    contact: 'Contact',
    skipToContent: 'Aller au contenu',
    menu: 'Menu',
    closeMenu: 'Fermer le menu'
  },
  theme: {
    toggleLight: 'Passer en mode clair',
    toggleDark: 'Passer en mode sombre'
  },
  hero: {
    eyebrow: 'Ingénieur Firmware & Logiciel Embarqué',
    title: 'Des moteurs de jeu au rendu 3D à l\'intérieur d\'un microcontrôleur.',
    lede:
      'Je suis Andrés Ragot. J\'écris du C/C++ moderne pour des systèmes embarqués : ESP32, graphismes logiciels, drivers LCD, FreeRTOS, PSRAM et tout ce qui vit entre le silicium et le pixel.',
    ctaWork: 'Voir les projets',
    ctaContact: 'Me contacter',
    location: 'Madrid, Espagne',
    available: 'Embedded SW Engineer @ CipherBit — Grupo Oesía'
  },
  about: {
    heading: 'À propos',
    p1: 'J\'ai commencé là où beaucoup de gens qui finissent dans le bas niveau commencent : en voulant faire des jeux vidéo. J\'ai étudié l\'ingénierie à l\'INSA de Lyon en 2017, puis une licence en Game Design & Development à l\'UDIT à Madrid.',
    p2: 'En chemin, je me suis obsédé par ce que personne ne voit : comment les octets bougent, comment on rastérise un triangle, ce que coûte une allocation dynamique, pourquoi une frame prend 18 ms au lieu de 16. Cette obsession m\'a fait glisser du moteur vers le firmware.',
    p3: 'Aujourd\'hui je conçois et développe du firmware pour produits embarqués connectés : architecture asynchrone événementielle, stratégies mémoire avec PSRAM, abstractions matérielles modulaires et décisions firmware guidées par le produit. J\'écris encore des graphismes logiciels le week-end — c\'est là que mes deux mondes se rejoignent.',
    languages: 'Langues : espagnol, anglais, français'
  },
  now: {
    heading: 'Maintenant',
    role: 'Ingénieur Logiciel Embarqué',
    company: 'CipherBit — Grupo Oesía',
    when: 'Mai 2026 — aujourd\'hui',
    desc:
      'Je travaille sur des systèmes embarqués critiques pour les communications sécurisées. J\'ajouterai des détails publics dès que je pourrai les partager.'
  },
  experience: {
    heading: 'Expérience',
    items: [
      {
        role: 'Ingénieur Logiciel Embarqué',
        company: 'CipherBit — Grupo Oesía',
        period: 'Mai 2026 — aujourd\'hui',
        location: 'Madrid, Espagne',
        desc: 'Firmware et logiciel embarqué au sein du groupe Oesía, sur communications et systèmes critiques.'
      },
      {
        role: 'Ingénieur Firmware Embarqué',
        company: 'ORBIS',
        period: 'Fév 2025 — Mai 2026',
        location: 'Madrid, Espagne',
        desc:
          'R&D sur produits embarqués connectés, avec un focus sur l\'architecture firmware, le design système bas niveau et le C/C++ moderne. J\'ai redessiné des parties critiques d\'un stack firmware legacy pour dépasser les limites de flash, RAM et stabilité, améliorant la robustesse runtime et permettant de nouvelles capacités produit sur hardware contraint. Architecture asynchrone événementielle, stratégies mémoire PSRAM, abstractions matérielles modulaires et décisions firmware orientées fiabilité et maintenabilité.'
      },
      {
        role: 'Ingénieur Logiciel Embarqué',
        company: 'SingularThings',
        period: 'Jan 2024 — Fév 2025 (stage à partir de Nov 2023)',
        location: 'Madrid, Espagne',
        desc:
          'Développement firmware pour solutions embarquées sur mesure : programmation bas niveau, intégration de capteurs et périphériques, systèmes sans fil en phase initiale. Implémentation de fonctionnalités de communication embarquée et responsabilité technique croissante dans un environnement startup rapide.'
      }
    ],
    education: {
      heading: 'Formation',
      items: [
        {
          title: 'Licence Game Design & Development',
          place: 'UDIT — Madrid',
          period: '2021 — 2025'
        },
        {
          title: 'Études d\'ingénieur',
          place: 'INSA de Lyon — France',
          period: '2017 — 2021'
        }
      ]
    }
  },
  skills: {
    heading: 'Compétences techniques',
    groups: [
      {
        title: 'Firmware & Embarqué',
        items: ['C', 'C++ moderne (17/20)', 'ESP-IDF', 'ESP32 / S2 / S3 / C3 / P4', 'FreeRTOS', 'Drivers (SPI, I²C, MIPI-DSI, RGB)', 'PSRAM / mémoire contrainte', 'CMake / Kconfig']
      },
      {
        title: 'Graphismes & Temps réel',
        items: ['Rastérisation logicielle', 'Pipeline 3D (transform / clip / project)', 'GLM', 'Painter / culling', 'Double buffering', 'Optimisation CPU/mémoire']
      },
      {
        title: 'Background jeu vidéo',
        items: ['Unreal Engine 5', 'Unity', 'Programmation gameplay', 'Tools & pipeline', 'Systèmes temps réel']
      },
      {
        title: 'Outils',
        items: ['Git', 'Doxygen', 'Xcode', 'VS Code', 'Linux / macOS', 'CI basique']
      }
    ]
  },
  featured: {
    eyebrow: 'Projet phare',
    title: 'esp32_3d_engine',
    subtitle: 'Un moteur de rendu 3D logiciel pour microcontrôleurs ESP32.',
    summary:
      'Rend des scènes 3D complètes avec éclairage directement sur le MCU — sans GPU. Pipeline logiciel complet du sommet au framebuffer, scene graph maison, génération de mesh par révolution/extrusion, caméra orbitale, lumière directionnelle, algorithme du peintre et allocateur PSRAM. Publié comme composant sur l\'ESP Component Registry.',
    highlights: [
      'Pipeline logiciel : transform → clipping Sutherland-Hodgman → projection → rastérisation scanline → framebuffer.',
      'Scene graph hiérarchique avec recherche par ID et arbre de composants (Transform, Mesh, Light).',
      'Génération de mesh par révolution et par extrusion à partir de profils 2D.',
      'Éclairage directionnel (ambient + diffuse) en RGB565.',
      'Double buffering, std::allocator personnalisé plaçant les gros buffers en PSRAM.',
      'Thread pool optionnel avec std::jthread pour scène/render sur cœurs séparés.',
      'Drivers LCD interchangeables : EK79007 (MIPI-DSI), ST7262 (RGB), ST7789 (SPI).',
      'Cibles supportées : ESP32-P4 et ESP32-S3 (tests principaux), ESP32 / S2 / C3 via drivers.',
      'C++ sur 99 % du code. Licence MIT.'
    ],
    perfNote: 'Mesures réelles sur matériel. Moyenne sur plus de 1000 images par configuration.',
    metricsTitle: 'BENCHMARKS RÉELS',
    metricsHeader: { device: 'MCU', meshes: 'Maillages', fps: 'FPS', mem: 'Tas libre' },
    metricsFootnote: 'Moyenne sur plus de mille images par configuration. ESP32-P4 240 MHz / ESP32-S3 240 MHz, les deux avec PSRAM.',
    metrics: {
      baseline: {
        title: '01 · Baseline',
        desc: 'Pipeline initial : un seul CPU, rastérisation linéaire, sans tri des polygones.'
      },
      'optimized-meshes': {
        title: '02 · Maillages optimisés',
        desc: 'Maillages réduits, normales pré-calculées. Même pipeline que baseline.'
      },
      painter: {
        title: '03 · Algorithme du peintre',
        desc: 'Polygones triés par profondeur. Moins d’overdraw, sans Z-buffer.'
      },
      parallel: {
        title: '04 · Parallèle + peintre',
        desc: 'Scène sur un cœur, rendu sur l’autre via std::jthread. Double buffer en PSRAM.'
      }
    },
    cta: {
      repo: 'Dépôt GitHub',
      docs: 'Doc Doxygen',
      registry: 'ESP Component Registry'
    }
  },
  work: {
    heading: 'Travaux sélectionnés',
    intro: 'Ce que j\'ai construit. Filtrer par discipline.',
    filters: { all: 'Tout', firmware: 'Firmware', graphics: 'Graphismes', games: 'Jeux', tools: 'Outils', web: 'Web' },
    role: 'Rôle',
    tech: 'Stack',
    impact: 'Impact',
    links: 'Liens'
  },
  games: {
    heading: 'Background jeu vidéo',
    intro:
      'Les jeux ont été ma porte d\'entrée vers le code. Ces projets comptent encore parce que c\'est là que j\'ai appris ce que j\'applique aujourd\'hui au firmware : temps réel, optimisation, pipelines et travail d\'équipe.'
  },
  demo: {
    heading: 'Mini-démo : rendu logiciel',
    intro:
      'Un cube wireframe rastérisé en JavaScript avec la même idée qu\'esp32_3d_engine : transformer les sommets, projeter, dessiner des lignes. Sans WebGL, sans librairies.',
    play: 'Charger la démo',
    stop: 'Arrêter',
    reduceMotion: 'Animation désactivée (prefers-reduced-motion).',
    fps: 'FPS',
    frame: 'Frame',
    note: 'From gameplay systems to embedded graphics: même obsession, moins de ressources.'
  },
  contact: {
    heading: 'Parlons-en',
    intro:
      'Si ce que je fais t\'intéresse, écris-moi. Je réponds plus vite à du concret qu\'aux intros génériques.',
    email: 'Email',
    copy: 'Copier l\'email',
    copied: 'Copié !',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    cv: 'Télécharger le CV (PDF)'
  },
  footer: {
    builtWith: 'Fait avec Astro, du CSS/JS vanilla et beaucoup de café.',
    backTop: 'Retour en haut',
    rights: 'Tous droits réservés.'
  },
  notFound: {
    title: 'Page introuvable',
    desc: 'La route que tu cherches n\'existe pas — mais le reste du portfolio, si.',
    home: 'Retour à l\'accueil'
  }
};
