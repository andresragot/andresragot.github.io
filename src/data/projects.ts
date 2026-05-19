import type { Locale } from '../i18n/config';

export type Category = 'firmware' | 'graphics' | 'games' | 'tools' | 'web';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectI18n {
  title: string;
  tagline: string;
  description: string;
  role: string;
  impact?: string;
}

export interface Project {
  id: string;
  year: string;
  categories: Category[];
  featured?: boolean;
  image?: string;
  imageAlt?: Record<Locale, string>;
  video?: string;
  tech: string[];
  links: ProjectLink[];
  i18n: Record<Locale, ProjectI18n>;
}

export const projects: Project[] = [
  {
    id: 'esp32-3d-engine',
    year: '2024 — 2026',
    categories: ['firmware', 'graphics'],
    featured: true,
    tech: ['C++17/20', 'ESP-IDF', 'ESP32-P4/S3', 'GLM', 'CMake', 'Kconfig', 'PSRAM', 'std::jthread'],
    links: [
      { label: 'GitHub', href: 'https://github.com/andresragot/esp32_3d_engine' },
      { label: 'Doxygen', href: 'https://andresragot.github.io/esp32-p4-library/' },
      { label: 'ESP Component Registry', href: 'https://components.espressif.com/components/andresragot/esp32_3d_engine' }
    ],
    i18n: {
      es: {
        title: 'esp32_3d_engine',
        tagline: 'Motor 3D por software para microcontroladores ESP32.',
        description:
          'Renderiza escenas 3D completas con iluminación directamente en el MCU, sin GPU. Pipeline software completo, scene graph, mallas por revolución/extrusión, drivers LCD intercambiables y allocator PSRAM. Publicado como componente en el ESP Component Registry.',
        role: 'Autor y mantenedor',
        impact: 'Demostración pública de mis capacidades en bajo nivel, gráficos y arquitectura C++ embebida.'
      },
      en: {
        title: 'esp32_3d_engine',
        tagline: 'Software 3D engine for ESP32 microcontrollers.',
        description:
          'Renders full 3D scenes with lighting directly on the MCU — no GPU. Full software pipeline, scene graph, revolution/extrusion meshes, pluggable LCD drivers and PSRAM allocator. Published in the ESP Component Registry.',
        role: 'Author & maintainer',
        impact: 'Public showcase of my low-level, graphics and embedded C++ architecture skills.'
      },
      fr: {
        title: 'esp32_3d_engine',
        tagline: 'Moteur 3D logiciel pour microcontrôleurs ESP32.',
        description:
          'Rend des scènes 3D complètes avec éclairage directement sur le MCU, sans GPU. Pipeline logiciel complet, scene graph, mesh par révolution/extrusion, drivers LCD interchangeables et allocateur PSRAM. Publié sur l\'ESP Component Registry.',
        role: 'Auteur et mainteneur',
        impact: 'Vitrine publique de mes compétences bas niveau, graphismes et architecture C++ embarquée.'
      }
    }
  },
  {
    id: 'tailless',
    year: '2024',
    categories: ['games'],
    image: '/images/thumb_Tailless_.png',
    video: 'https://www.youtube.com/embed/zHOngU8RXQE',
    tech: ['Unreal Engine 5.4', 'C++', 'Gameplay framework'],
    links: [
      { label: 'Itch.io', href: 'https://int2games.itch.io/tailless' },
      { label: 'Team site', href: 'https://int2games.github.io/' }
    ],
    i18n: {
      es: {
        title: 'Tailless',
        tagline: 'Roguelike 3D en Unreal con un ajolote como protagonista.',
        description:
          'Roguelike desarrollado por un equipo de seis. Diseñé e implementé las mecánicas core de gameplay y elementos artísticos integrados en motor.',
        role: 'Lead programmer / Gameplay',
        impact: 'Presentado en Cyl Game Show, Madrid Otaku, Match in Games y Play Generations.'
      },
      en: {
        title: 'Tailless',
        tagline: '3D roguelike in Unreal starring an axolotl.',
        description:
          'Roguelike built by a team of six. I designed and implemented the core gameplay mechanics and integrated art assets in-engine.',
        role: 'Lead programmer / Gameplay',
        impact: 'Showcased at Cyl Game Show, Madrid Otaku, Match in Games and Play Generations.'
      },
      fr: {
        title: 'Tailless',
        tagline: 'Roguelike 3D dans Unreal avec un axolotl pour héros.',
        description:
          'Roguelike développé par une équipe de six. J\'ai conçu et implémenté les mécaniques de gameplay et intégré les assets artistiques dans le moteur.',
        role: 'Lead programmer / Gameplay',
        impact: 'Présenté à Cyl Game Show, Madrid Otaku, Match in Games et Play Generations.'
      }
    }
  },
  {
    id: 'ranas-insanas',
    year: '2023',
    categories: ['games'],
    image: '/images/thumb_ssq.jpg',
    video: 'https://www.youtube.com/embed/uAJR3ygpGbg',
    tech: ['Unity', 'C#', 'Gameplay'],
    links: [{ label: 'Itch.io', href: 'https://atrevetestudios.itch.io/ranas-insanas' }],
    i18n: {
      es: {
        title: 'Ranas Insanas / Insane Lake',
        tagline: 'Fighting reinterpretado: ranas esquivando troncos.',
        description:
          'Juego realizado en menos de dos semanas por un equipo de cinco. Único responsable de toda la programación y de la integración de arte.',
        role: 'Lead programmer / Producer'
      },
      en: {
        title: 'Insane Lake (Ranas Insanas)',
        tagline: 'Fighting genre flipped: frogs dodging falling logs.',
        description:
          'Built in under two weeks by a team of five. I was the sole programmer and integrated all art into the game.',
        role: 'Lead programmer / Producer'
      },
      fr: {
        title: 'Insane Lake (Ranas Insanas)',
        tagline: 'Le combat revisité : des grenouilles esquivant des troncs.',
        description:
          'Construit en moins de deux semaines par une équipe de cinq. Seul programmeur, j\'ai intégré tous les assets dans le jeu.',
        role: 'Lead programmer / Producer'
      }
    }
  },
  {
    id: 'hidalgo',
    year: '2023',
    categories: ['games'],
    image: '/images/thumb_hidalgo.png',
    tech: ['Unreal Engine 5.2', 'C++ / Blueprints'],
    links: [{ label: 'Build (Drive)', href: 'https://drive.google.com/file/d/1wUc20Z2aXeIIXLcRNA0FYKNmlYIzRuss/view?usp=drive_link' }],
    i18n: {
      es: {
        title: 'Hidalgo',
        tagline: 'Hackathon hispano-belga de videojuegos para educación, cultura y turismo.',
        description:
          'Desarrollado en 3 meses en el primer hackathon hispano-belga aplicado a tecnologías de videojuegos y animación.',
        role: 'Game programmer',
        impact: 'Mejor proyecto del hackathon.'
      },
      en: {
        title: 'Hidalgo',
        tagline: 'Spanish-Belgian hackathon: games for education, culture and tourism.',
        description:
          'Built in 3 months during the first Spanish-Belgian hackathon applying games and animation tech to education, culture and tourism.',
        role: 'Game programmer',
        impact: 'Best project award.'
      },
      fr: {
        title: 'Hidalgo',
        tagline: 'Hackathon hispano-belge : jeux pour l\'éducation, la culture et le tourisme.',
        description:
          'Développé en 3 mois lors du premier hackathon hispano-belge appliquant le jeu vidéo à l\'éducation, la culture et le tourisme.',
        role: 'Game programmer',
        impact: 'Prix du meilleur projet.'
      }
    }
  },
  {
    id: 'misran-fighters',
    year: '2023',
    categories: ['games'],
    image: '/images/thumb_geo.jpg',
    video: 'https://www.youtube.com/embed/t8FNo8t7nOQ',
    tech: ['Unity', 'C#', 'Beat \'em up'],
    links: [{ label: 'Itch.io', href: 'https://hard-punky-studios.itch.io/misran-fighters' }],
    i18n: {
      es: {
        title: 'Misran Fighters',
        tagline: 'Beat \'em up centrado en game feel.',
        description:
          'Equipo de cinco, ~300 horas. Programé enemigos, jugador y un encuentro final, priorizando el game feel.',
        role: 'Lead programmer / Producer'
      },
      en: {
        title: 'Misran Fighters',
        tagline: 'Beat \'em up obsessed with game feel.',
        description:
          'Team of five, ~300 hours. I programmed enemies, player and a boss encounter, prioritizing game feel.',
        role: 'Lead programmer / Producer'
      },
      fr: {
        title: 'Misran Fighters',
        tagline: 'Beat \'em up obsédé par le game feel.',
        description:
          'Équipe de cinq, ~300 heures. J\'ai programmé les ennemis, le joueur et un boss, en priorisant le game feel.',
        role: 'Lead programmer / Producer'
      }
    }
  },
  {
    id: 'unwritten-alliances',
    year: '2022',
    categories: ['games'],
    image: '/images/thumb_ka.jpg',
    video: 'https://www.youtube.com/embed/h4CSi4WdJok',
    tech: ['Unity', 'C#', 'Tower defense'],
    links: [{ label: 'Itch.io', href: 'https://yucapastudios.itch.io/unwritten-alliances' }],
    i18n: {
      es: {
        title: 'Unwritten Alliances',
        tagline: 'Tower defense en 10 semanas, mi primer Unity serio.',
        description:
          'Equipo de tres, 10 semanas. Toda la programación a mi cargo. Premio "Best Game of the Year" en clase.',
        role: 'Lead programmer / Producer'
      },
      en: {
        title: 'Unwritten Alliances',
        tagline: 'Tower defense in 10 weeks — my first serious Unity project.',
        description:
          'Team of three, 10 weeks. I owned all the programming. "Best Game of the Year" award in class.',
        role: 'Lead programmer / Producer'
      },
      fr: {
        title: 'Unwritten Alliances',
        tagline: 'Tower defense en 10 semaines, mon premier vrai projet Unity.',
        description:
          'Équipe de trois, 10 semaines. Toute la programmation à ma charge. Prix « Best Game of the Year » en classe.',
        role: 'Lead programmer / Producer'
      }
    }
  },
  {
    id: 'jumping-yayo',
    year: '2023',
    categories: ['games'],
    image: '/images/thumb_stagerush.jpg',
    tech: ['Unity', 'C#'],
    links: [{ label: 'Itch.io', href: 'https://atrevetestudios.itch.io/jumping-yayo' }],
    i18n: {
      es: {
        title: 'Jumping Yayo',
        tagline: 'Dos semanas, tres personas, una sola regla: provocar emoción.',
        description:
          'Reto creativo: humor o estrés. Salió algo distinto. Toda la programación a mi cargo.',
        role: 'Lead programmer / Producer'
      },
      en: {
        title: 'Jumping Yayo',
        tagline: 'Two weeks, three people, one rule: trigger an emotion.',
        description:
          'Creative constraint: funny or stressful. We landed on weird. I handled all the programming.',
        role: 'Lead programmer / Producer'
      },
      fr: {
        title: 'Jumping Yayo',
        tagline: 'Deux semaines, trois personnes, une règle : déclencher une émotion.',
        description:
          'Contrainte créative : drôle ou stressant. Toute la programmation à ma charge.',
        role: 'Lead programmer / Producer'
      }
    }
  },
  {
    id: 'no-eyes-to-see',
    year: '2021',
    categories: ['games'],
    image: '/images/thumb_goe.jpg',
    video: 'https://www.youtube.com/embed/D39MYsjLWRM',
    tech: ['Construct'],
    links: [{ label: 'Itch.io', href: 'https://team-blind.itch.io/no-eyes-to-see' }],
    i18n: {
      es: {
        title: 'No Eyes To See',
        tagline: 'Mi primer juego oficial: roguelike inspirado en The Binding of Isaac.',
        description: 'Punto de entrada al desarrollo formal de videojuegos. Rol de producer.',
        role: 'Producer'
      },
      en: {
        title: 'No Eyes To See',
        tagline: 'My first official game: a roguelike inspired by The Binding of Isaac.',
        description: 'Entry point to formal game development. Producer role.',
        role: 'Producer'
      },
      fr: {
        title: 'No Eyes To See',
        tagline: 'Mon premier jeu officiel : roguelike inspiré par The Binding of Isaac.',
        description: 'Porte d\'entrée vers le développement formel de jeux. Rôle de producer.',
        role: 'Producer'
      }
    }
  }
];
