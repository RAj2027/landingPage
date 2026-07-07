<div align="center">

<br />

<img src="public/logo.svg" alt="Realtors World Logo" width="72" height="72" />

<h1>Realtors World — Landing Page</h1>

<p>A production-ready, pixel-perfect landing page for <strong>Realtors World</strong>, a premium real estate brand.</p>

<br />

<!-- Tech Badges -->
![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge&logo=framer&logoColor=white)

<br /><br />

<!-- Status Badges -->
![Status](https://img.shields.io/badge/Status-In_Development-07be8a?style=flat-square)
![Responsive](https://img.shields.io/badge/Responsive-Desktop_•_Tablet_•_Mobile-172023?style=flat-square)
![App Router](https://img.shields.io/badge/Next.js-App_Router-black?style=flat-square&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/Typed-Strict_TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-Not_Specified-lightgrey?style=flat-square)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Folder Structure](#-folder-structure)
- [Installation](#-installation)
- [Running Locally](#-running-locally)
- [Project Structure](#-project-structure)
- [License](#-license)

---

## 🏠 Overview

Realtors World is a modern real estate landing page built to serve as the public-facing home for the Realtors World brand. The project is scoped to a single, fully responsive Hero section with a fixed navbar, animated headings, an interactive navigation menu drawer, and a floating property information card.

The implementation closely mirrors the design language and interaction patterns of a high-end Framer website, with all animations rebuilt natively using Framer Motion.

---

## ✨ Features

- ✅ **Responsive Hero Section** — Full-viewport hero with a background image, eyebrow text, animated heading, description, and CTA buttons.
- ✅ **Per-Word Text Roll Animation** — Smooth, GPU-accelerated, staggered character-by-character roll animation on each hero heading word (independent hover trigger per word).
- ✅ **Animated Navigation Menu Drawer** — Sliding panel menu with Framer Motion spring physics, staggered entrance animations, and a backdrop overlay.
- ✅ **Floating Property Information Card** — Right-aligned card overlapping the hero bottom edge, displaying property service categories with responsive grid/flex layout.
- ✅ **Interactive CTA Buttons** — Primary and secondary buttons with smooth color-inversion hover transitions.
- ✅ **Accessible Navigation** — Keyboard navigation (Escape to close menu), focus trapping, scroll locking, and screen reader–compatible ARIA attributes.
- ✅ **Reusable Animation Component** — `TextRoll` animation component with center stagger calculation, usable across the application.
- ✅ **Design Token System** — Global CSS custom properties for brand colors, typography families, and shadows via Tailwind CSS v4 `@theme`.
- ✅ **Fully Typed** — Strict TypeScript throughout all components and animation logic.

---

## 🛠 Tech Stack

<div align="center">

[![My Skills](https://skillicons.dev/icons?i=nextjs,react,typescript,tailwind)](https://skillicons.dev)

</div>

<br />

| Technology | Version | Role |
|:---|:---:|:---|
| [Next.js](https://nextjs.org/) | 16.2.10 | React framework (App Router, SSR/SSG) |
| [React](https://react.dev/) | 19.2.4 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Static typing |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Utility-first CSS |
| [Framer Motion](https://www.framer.com/motion/) | ^12 | Animations and transitions |
| [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) | — | Display / sans-serif font |
| [Radio Canada Big](https://fonts.google.com/specimen/Radio+Canada+Big) | — | Accent / italic font |
| [Inter](https://fonts.google.com/specimen/Inter) | — | Body copy font |
| ESLint | ^9 | Code linting |

---

## 🏗 Architecture

### App Router

The project uses the Next.js **App Router** (`app/` directory). The root layout (`app/layout.tsx`) configures global fonts, metadata, and the root HTML shell. The homepage is rendered via `app/page.tsx`.

### Component Architecture

All UI is split into focused, single-responsibility components organized by feature domain. Server Components are the default; components that require browser APIs, hooks, or Framer Motion are explicitly marked `"use client"`.

### Styling Approach

Styling is done exclusively with **Tailwind CSS v4** utility classes. Global design tokens — colors, font families, and box shadows — are defined in `app/globals.css` using the Tailwind `@theme` block, making them available as semantic class names (e.g. `text-charcoal`, `bg-mint`).

### Animation Approach

All animations use **Framer Motion** exclusively. The `TextRoll` component implements a pure Framer Motion character-roll effect without GSAP. Navigation menu transitions use `AnimatePresence` for mount/unmount orchestration with spring physics.

### Asset Organization

Static assets (SVGs, background images) are stored in the `public/` directory and referenced with root-relative paths (e.g. `url('/heroBg.avif')`).

---

## 📂 Folder Structure

```text
landingPage/
├── 📁 app/
│   ├── globals.css              # Design tokens, Tailwind theme config
│   ├── layout.tsx               # Root layout: fonts, metadata, HTML shell
│   └── page.tsx                 # Homepage entry point
│
├── 📁 components/
│   ├── 📁 animations/
│   │   └── TextRoll.tsx         # Reusable character-roll hover animation
│   ├── 📁 hero/
│   │   └── Hero.tsx             # Full Hero section component
│   ├── 📁 layout/
│   │   ├── ButtonGroup.tsx
│   │   ├── Container.tsx
│   │   ├── FlexWrapper.tsx
│   │   ├── MaxWidthWrapper.tsx
│   │   ├── Section.tsx
│   │   └── Stack.tsx
│   ├── 📁 navbar/
│   │   ├── ContactInfo.tsx
│   │   ├── Logo.tsx
│   │   ├── MenuButton.tsx
│   │   ├── Navbar.tsx
│   │   └── NavigationMenu.tsx
│   ├── 📁 property/
│   │   └── PropertyCard.tsx
│   └── 📁 ui/
│       ├── Badge.tsx
│       ├── Divider.tsx
│       ├── IconWrapper.tsx
│       ├── Surface.tsx
│       ├── 📁 button/
│       └── 📁 typography/
│
├── 📁 public/
│   ├── heroBg.avif              # Hero section background image
│   └── logo.svg                 # Realtors World logo (SVG)
│
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Installation

**1️⃣ Clone the repository**

```bash
git clone <repository-url>
```

**2️⃣ Navigate to the project directory**

```bash
cd landingPage
```

**3️⃣ Install dependencies**

```bash
npm install
```

---

## 💻 Running Locally

**Development server** — with hot-reloading

```bash
npm run dev
```

**Production build** — compile and optimize

```bash
npm run build
```

**Production server** — serve the built output

```bash
npm start
```

**Linting** — run ESLint across the project

```bash
npm run lint
```

The development server starts at `http://localhost:3000` by default.

> **📡 Tunneling with ngrok**
>
> When exposing the development server via ngrok, use the `--host-header` flag to bypass Next.js Host header validation:
> ```bash
> ngrok http 3000 --host-header="localhost:3000"
> ```
> For production preview without tunneling issues, always prefer `npm run build && npm start`.

---

## 📁 Project Structure

| Directory | Purpose |
|:---|:---|
| `app/` | Next.js App Router entry point. Contains the root layout, page, global CSS, and favicon. |
| `components/animations/` | Reusable, self-contained animation components (`TextRoll`). |
| `components/hero/` | The Hero section — combines all sub-components into the full above-the-fold layout. |
| `components/navbar/` | Navbar and its sub-components: Logo, ContactInfo, MenuButton, and the NavigationMenu drawer. |
| `components/property/` | The floating PropertyCard component rendered at the base of the Hero section. |
| `components/layout/` | Generic, headless layout primitives (Container, Stack, Section, FlexWrapper, etc.). |
| `components/ui/` | Low-level, composable UI primitives (Badge, Divider, IconWrapper, Surface, button, typography). |
| `public/` | Static assets served from the web root. |

---


## 📄 License

> No license has been specified for this project.

---

<div align="center">

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion.

</div>
