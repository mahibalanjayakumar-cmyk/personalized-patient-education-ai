# Patient Education AI Platform - Implementation Plan

Develop a highly responsive and visually stunning web application designed for generating personalized patient education materials. The platform will collect patient details (diagnosis, health literacy, cultural context, learning preferences) and dynamically produce tailored content, including treatment explanations, medication guides, and lifestyle recommendations.

## Goal Description

The objective is to build a hackathon-ready prototype that demonstrates an AI-driven platform capable of adapting medical information to individual needs. The focus will be on a premium, state-of-the-art user interface that emphasizes both trust (clinical accuracy) and accessibility (tailored learning).

## User Review Required

> [!IMPORTANT]
> Since this is a hackathon project, please review the proposed technology stack and design aesthetic below. I will be using vanilla CSS for styling (avoiding Tailwind per standard guidelines unless you prefer otherwise) to ensure maximum flexibility and custom premium aesthetics.

## Proposed Changes

We will generate a modern React application using Vite.

### Core Architecture & Technologies
- **Framework**: React.js with Vite (`npm create vite@latest`)
- **Styling**: Vanilla CSS featuring CSS variables for theming, smooth gradients, glassmorphism, and dynamic animations.
- **Typography**: Modern Google Fonts (*Outfit* or *Inter*) for a clean, accessible look.
- **Mock Service (AI)**: A simulated backend service that takes the patient parameters and "generates" specific, highly realistic educational JSON responses to showcase the AI capability without needing an immediate API key.

---

### Key Components

#### [NEW] `src/App.jsx`
The central hub providing layout wrapping, navigation (Sidebar/TopNav), and routing logic.

#### [NEW] `src/pages/Generator.jsx`
A sleek, interactive intake form capturing:
- **Diagnosis** (e.g., Type 2 Diabetes, Hypertension)
- **Health Literacy Level** (Basic, Intermediate, Advanced)
- **Cultural Background** (e.g., specific dietary inclusions/exclusions)
- **Learning Preference** (Visual, Text, Interactive)

#### [NEW] `src/pages/EducationMaterial.jsx`
The "AI Output" page. This page will dynamically render the generated patient content. It will adapt its layout based on the *Learning Preference* and *Health Literacy Level* (e.g., larger icons and simplified language for Basic literacy; detailed physiological breakdowns for Advanced).

#### [NEW] `src/styles/Theme.css`
A comprehensive CSS system detailing:
- Curated color palettes (e.g., sleek dark mode with vibrant neon accents or a clean, clinical glass-like light mode).
- Utility classes for micro-animations (hover effects, page transitions).

#### [NEW] `src/services/aiMockService.js`
A robust Javascript module containing predefined, highly structured responses that mimic different combinations of inputs to show off the system's adaptability during a demo.

## Open Questions

> [!WARNING]  
> 1. **Color Palette:** Do you have a preferred aesthetic? (e.g., Clean/Clinical Light Theme, or a futuristic/Premium Dark Mode?)
> 2. **AI Integration:** For this hackathon, should I build a very convincing mock service that simulates the OpenAI/Gemini output, or do you have an API key and a specific LLM you want me to integrate directly?

## Verification Plan

### Automated Tests
- The application will be scaffolded and the development server started via `npm run dev`.

### Manual Verification
- I will ensure the UI looks premium with hover states, modern typography, and structured content.
- I will verify that submitting the Generator form correctly dynamically updates the "Education Material" page with custom content reflecting the chosen literacy & cultural settings.
