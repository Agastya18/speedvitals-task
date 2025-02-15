# SpeedVitals Performance Dashboard

A modern, responsive React application for visualizing web performance metrics. Built with React, TypeScript, Apache ECharts, and Tailwind CSS.

<img width="1457" alt="Screenshot 2025-01-16 at 7 16 25 PM" src="https://github.com/user-attachments/assets/0fcd7fa6-1ec7-4300-a194-2f13935e531b" />



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
git clone https://github.com/Agastya18/speedvitals-task.git
cd speedvitals-task
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
speedvitals-task/
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
