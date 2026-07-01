# Portfolio — Diego Trigo Iglesias

[![Deploy](https://github.com/Diego-Trigo-Iglesias/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Diego-Trigo-Iglesias/portfolio/actions/workflows/deploy.yml)

Portfolio personal de **Diego Trigo Iglesias**, desarrollador Full-Stack de Moaña, Galicia.  
Disponible en español e inglés.

🌐 **Web**: https://diegotrigoiglesias.github.io/portfolio/

---

## Stack

| Tecnología | Uso |
|------------|-----|
| **Vue 3** + Composition API | Framework principal |
| **TypeScript** | Tipado estático |
| **Vite** | Build tool |
| **Three.js** | Escena 3D (logo DT) |
| **GSAP** + **Lenis** | Animaciones y scroll |
| **SCSS** | Estilos con mixins |

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor dev en puerto 3000 |
| `npm run build` | Typecheck + build a `dist/` |
| `npm run preview` | Vista previa del build |
| `npm run typecheck` | Solo typecheck |

## Estructura

```
src/
├── components/       # Componentes reutilizables
├── features/         # Feature modules (home, projects)
│   ├── home/         # Secciones del homepage
│   └── projects/     # Vista de proyecto individual
├── animations/       # Sistema de animaciones y transiciones
├── three/            # Escena 3D (core, objetos, utils)
├── i18n/             # Traducciones ES/EN
├── content/          # Datos de proyectos
├── composables/      # Lógica compartida (hooks)
└── assets/           # Estilos e imágenes
```

## Proyectos

10 proyectos showcase con stack variado:
- **Motor-RPG.net** — RPG Java + Spring Boot
- **Coin Finder** — Criptomonedas React + Firebase
- **Task Manager** — Vue + Pinia + IndexedDB
- **IoT Sensor Simulator** — Node-RED + MQTT + ESP32
- **React + K8s Demo** — React + Docker + K8s
- **Mi Chatbot** — IA + NLP + chatbot interactivo
- **Star Wars App** — Angular + SWAPI
- **Fake Netflix** — Angular 19 + API REST
- **CR Chapela Web** — React + Firebase
- **Vue Slot Machine** — Vue + Vite + slot mechanics

## Atribución

Este proyecto está inspirado en el portfolio de **David Heckhoff** ([david-hckh.com](https://david-hckh.com)),  
cuyo código original sirvió como base arquitectónica.  
Se ha realizado una transformación sustancial: branding, contenido, escena 3D, proyectos, y más del 80% del código.

> Concepto original por [David Heckhoff](https://david-hckh.com)

## Licencia

Proyecto privado. Código original © David Heckhoff.  
Transformaciones y contenido original © Diego Trigo Iglesias.
Uso personal y educativo.
