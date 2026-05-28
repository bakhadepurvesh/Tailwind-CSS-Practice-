# 🎨 React + Vite + Tailwind CSS Practice

A professional practice repository focused on mastering utility-first styling using **Tailwind CSS** within a modern **React** and **Vite** development environment. 

## 🚀 Features & Practice Milestones

* 🏗️ **Modern Tooling:** Fast development and Hot Module Replacement (HMR) powered by Vite.
* 🎨 **Core Styling:** Hand-on implementation of background colors, text colors, and font weights.
* 📐 **Layout Basics:** Exploring padding (`p-*`), margins (`m-*`), and alignment helpers.
* 📱 **State & Interaction:** Implementing pseudo-classes like `hover:` and responsive variations.

## 🛠️ Project Setup

Follow these steps to run this project locally:

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd <repository-folder-name>
```
### 2. Install dependencies
```bash
npm install
```
### 3. Start the development server
```bash
npm run dev
```
## 📝 Tailwind CSS Implementation Notes
* **Class Strings:** Always use complete, unbroken class names (e.g., `bg-blue-500`) instead of string interpolation (`bg-${color}-500`) to ensure the Tailwind compiler detects and generates the CSS.
* **Component Attributes:** Remember to apply styling via the React `className="..."` attribute rather than the standard HTML `class`.
## ⚙️ Core Configuration
* **Bundler:** Vite 
* **Framework:** React 19+
* **Linter:** ESLint (recommended rules enabled)
