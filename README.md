# Mohammed Bosaid - Personal Portfolio

A modern, responsive personal portfolio website built with Vite + React + TypeScript, featuring Arabic/English support and dark/light mode toggle.

## Features

- ⚡ Built with Vite + React + TypeScript
- 🎨 Styled with Tailwind CSS and shadcn-ui components
- 🌍 Internationalization (i18n) with Arabic/English support
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive design
- 🚀 Deployed on GitHub Pages

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn-ui
- **Internationalization**: i18next, react-i18next
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MohammedBosaid/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint

## Deployment

To deploy to GitHub Pages:

1. Make sure you have a GitHub repository set up
2. Update the `homepage` field in `package.json` with your GitHub Pages URL
3. Run the deployment command:

```bash
npm run deploy
```

The site will be available at `https://yourusername.github.io/my-portfolio`

## Project Structure

```
my-portfolio/
├── public/
│   └── images/
│       └── profile.jpg
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── LanguageToggle.tsx
│   │   └── ThemeToggle.tsx
│   ├── hooks/
│   │   └── useDarkMode.ts
│   ├── i18n/
│   │   ├── ar.json
│   │   ├── en.json
│   │   └── index.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Customization

### Adding New Languages

1. Create a new translation file in `src/i18n/` (e.g., `fr.json`)
2. Add the translations following the same structure as `en.json`
3. Import and add the new language to `src/i18n/index.ts`
4. Update the language toggle component if needed

### Modifying Content

- Update translations in `src/i18n/en.json` and `src/i18n/ar.json`
- Replace the profile image in `public/images/profile.jpg`
- Modify component styles in the respective component files

### Styling

The project uses Tailwind CSS with a custom theme configuration. You can:
- Modify colors and spacing in `tailwind.config.js`
- Update CSS variables in `src/index.css`
- Customize component styles using Tailwind classes

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Mohammed Bosaid - [mohammedbousaeed@email.com](mailto:mohammedbousaeed@email.com)

Project Link: [https://github.com/MohammedBosaid/my-portfolio](https://github.com/MohammedBosaid/my-portfolio)

