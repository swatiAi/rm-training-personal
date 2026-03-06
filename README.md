# RM Training Platform

A modern **Nuxt.js web application** designed to present and manage information for a **Regenerative Medicine (RM) Training Program**.
The project focuses on clean UI architecture, modular styling, and responsive design to deliver a professional educational program website.

---

# Overview

The RM Training platform showcases the structure and details of a regenerative medicine certification program. It provides clear sections describing curriculum, faculty, program highlights, eligibility, certification, and enrollment.

The application follows a **component-driven architecture** with reusable UI components and modular CSS files powered by **Tailwind CSS utilities via `@apply`**.

---

# Tech Stack

### Frontend Framework

* **Nuxt.js** (JavaScript)

### Styling

* **Tailwind CSS**
* Modular component styles using `@apply`

### Icons

* **Nuxt Icon**

### Image Optimization

* **Nuxt Image Module**

### Fonts

* **Google Fonts (Manrope)**

---

# Key Features

* Fully responsive layout
* Component-based UI architecture
* Gradient-based design system
* Reusable button components
* Modular CSS structure
* Optimized images
* SEO-friendly Nuxt structure
* Clean project organization

---

# Project Architecture

```text
app
│
├── app.vue
├── app.config.js
│
├── components
│   ├── Navbar.vue
│   ├── HeroSection.vue
│   ├── AboutProgram.vue
│   ├── KeyHighlights.vue
│   ├── CurriculumSection.vue
│   ├── ProgramStructure.vue
│   ├── FacultySection.vue
│   ├── CertificationSection.vue
│   ├── AdditionalCertificationTrack.vue
│   ├── AdmissionEligibility.vue
│   ├── WhoShouldAttend.vue
│   ├── FeeStructure.vue
│   ├── EnrollmentSection.vue
│   └── ui
│        └── BaseButton.vue
│
├── assets
│   └── css
│        └── components
│            ├── navbar.css
│            ├── herosection.css
│            ├── aboutprogram.css
│            ├── keyhighlights.css
│            ├── curriculumsection.css
│            ├── programstructure.css
│            ├── facultysection.css
│            ├── certificationsection.css
│            ├── additionalcertificationtrack.css
│            ├── admissioneligibility.css
│            ├── whoshouldattend.css
│            ├── feestructure.css
│            ├── enrollmentsection.css
│            └── button.css
```

---

# Website Sections

The application consists of multiple structured sections designed for a training program website.

### Main Sections

* Navigation Bar
* Hero Section
* About the Program
* Key Highlights
* Curriculum Overview
* Program Structure
* Distinguished Faculty
* Certification
* Additional Certification Track
* Admission Eligibility
* Who Should Attend
* Fee Structure
* Enrollment

Each section is implemented as a **separate component** to keep the codebase scalable and maintainable.

---

# Installation

Clone the repository

```bash
git clone https://github.com/swatiAi/rm-training-personal.git
```

Navigate into the project

```bash
cd rm-training-personal
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

The project will run at

```
http://localhost:3000
```

---

# Production Build

Build the application

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

# Development Guidelines

* Use **JavaScript (not TypeScript)**
* Use **Nuxt Icon instead of inline SVG files**
* Keep styling inside **component CSS files**
* Use **Tailwind utilities with `@apply`**
* Create reusable UI components
* Follow clean and readable folder structures

---

# Git Workflow

Development typically follows this branching strategy:

```
main        → stable production code
develop     → active development branch
feature/*   → new features
```

Example workflow:

```bash
git checkout -b feature/new-section
git commit -m "Add new section layout"
git push origin feature/new-section
```

---

# Author

**Swati**
Frontend Developer

---

# License

This project is intended for **internal development and training purposes**.

---

# Future Improvements

Potential enhancements include:

* CMS integration
* dynamic content management
* multilingual support
* SEO optimization
* performance tuning
* deployment pipeline (CI/CD)

---
