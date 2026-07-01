# Portfolio — Diego Trigo Iglesias

[![Deploy](https://github.com/Diego-Trigo-Iglesias/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Diego-Trigo-Iglesias/portfolio/actions/workflows/deploy.yml)

Personal portfolio of **Diego Trigo Iglesias**, Full-Stack Developer from Moana, Galicia.  
Available in Spanish and English.

**Web**: https://diego-trigo-iglesias.github.io/portfolio/

---

## Stack

| Technology | Usage |
|------------|-------|
| **Vue 3** + Composition API | Frontend framework |
| **TypeScript** | Static typing (strict mode) |
| **Vite** | Build tool |
| **Three.js** | 3D scene (DT logo) |
| **GSAP** + **Lenis** | Animations and smooth scroll |
| **SCSS** | Styles with mixins |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server on port 3000 |
| `npm run build` | Type check + build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run typecheck` | Type check only |

## Project Structure

```
src/
├── components/       # Reusable UI components
├── features/         # Feature modules (home, projects)
│   ├── home/         # Homepage sections
│   └── projects/     # Individual project view
├── animations/       # Animation and transition system
├── three/            # 3D scene (core, objects, utils)
├── i18n/             # Internationalization (ES/EN)
├── content/          # Project data and CV content
├── composables/      # Shared composable logic
└── assets/           # Global styles and images
```

## Projects

10 showcase projects across diverse tech stacks:

- **Motor-RPG.net** — Text-based RPG engine (Java, Spring Boot, .NET)
- **Coin Finder** — Cryptocurrency tracker (React, Firebase, TypeScript)
- **Task Manager** — Task management app (Vue 3, Pinia, IndexedDB)
- **IoT Sensor Simulator** — Industrial IoT simulation (Node-RED, MQTT)
- **React + K8s Demo** — Kubernetes-deployed React app (Docker, Minikube)
- **Mi Chatbot** — AI-powered chatbot (Java Spring Boot, Vue, OpenAI)
- **Star Wars App** — SWAPI consumer (React, REST API)
- **Fake Netflix** — Netflix UI clone (Angular 19, Signals)
- **CR Chapela Web** — Rowing club website (React, Firebase)
- **Vue Slot Machine** — Slot machine game (Vue 3, CSS animations)

## Key Features

- Internationalization (ES/EN) with lazy-loaded namespaces
- 3D interactive scene with Three.js (DT monogram logo)
- Route-based code splitting (three.js, gsap, vue split into separate chunks)
- Full TypeScript strict mode with zero errors
- Accessibility: skip-to-content link, focus-visible styles, WCAG-compliant contrast
- Smooth page transitions with GSAP and Lenis
- CV sections with experience timeline, education, and certifications

## Attribution

This project is inspired by the portfolio of **David Heckhoff** ([david-hckh.com](https://david-hckh.com)),  
whose original code served as the architectural foundation.  
A substantial transformation has been made: branding, content, 3D scene, projects, and over 80% of the codebase.

Original concept by [David Heckhoff](https://david-hckh.com)

## License

Private project. Original code (c) David Heckhoff.  
Transformations and original content (c) Diego Trigo Iglesias.  
Personal and educational use.
