<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/39ab19ce-3fbf-41e9-9f77-0e8e274983ab
# Thermal Quest

A modern, interactive tutoring web app designed to help students master the concepts of **Conduction**, **Convection**, and **Radiation**.

## Features

- **20 Real-World Scenarios**: Carefully crafted examples to test knowledge.
- **Micro-animations**: Powered by Motion (Framer Motion) for a premium feel.
- **Fast-Paced Gameplay**: Speed bonuses for quick and accurate answers.
- **Explanations**: Immediate feedback and detailed explanations for every scenario.
- **Responsive Design**: Works beautifully on desktops and mobile devices.

## Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS**
- **Motion (Framer Motion)**
- **Lucide React** (Icons)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rrmudry/Thermal_Quest.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

The project is configured for deployment to GitHub Pages. The `base` path in `vite.config.ts` is set to `/Thermal_Quest/`.

To build the project:
```bash
npm run build
```
The output will be in the `dist` folder.
