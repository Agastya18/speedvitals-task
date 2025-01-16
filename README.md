# SpeedVitals Performance Dashboard

A modern, responsive React application for visualizing web performance metrics. Built with React, TypeScript, Apache ECharts, and Tailwind CSS.

![SpeedVitals Dashboard](https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000)

## Features

- 📊 Real-time performance metric visualization
- 📱 Device-specific metrics (Mobile/Desktop)
- 📈 Interactive charts with Apache ECharts
- 🎨 Modern UI with Tailwind CSS
- 🔄 Dynamic data updates
- 💪 TypeScript support
- 🚀 Built with Vite

## Performance Metrics

- **Largest Contentful Paint (LCP)**: Measures loading performance
- **Cumulative Layout Shift (CLS)**: Measures visual stability

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/speedvitals-dashboard.git
cd speedvitals-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
speedvitals-dashboard/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Dropdown.tsx
│   │   └── PerformanceGraph.tsx
│   ├── App.tsx
│   └── main.tsx
├── public/
└── package.json
```

## Tech Stack

- **React** - UI Framework
- **TypeScript** - Type Safety
- **Apache ECharts** - Data Visualization
- **Tailwind CSS** - Styling
- **Vite** - Build Tool
- **ESLint** - Code Quality

## API Integration

The dashboard integrates with a performance metrics API:

```typescript
https://example-metrics.speedvitals.workers.dev/?metric={metric}&device={device}
```

Parameters:
- `metric`: `lcp` | `cls`
- `device`: `desktop` | `mobile`




## Acknowledgments

- [Apache ECharts](https://echarts.apache.org/en/index.html) for the powerful charting library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) for the beautiful icons