# Dashboard

A modern, responsive dashboard built with React, TypeScript, and Vite. Features interactive charts, statistics cards, and real-time activity tracking.

## Features

- 📊 Interactive charts and data visualization
- 📈 Real-time statistics cards with trend indicators
- 🎨 Modern, clean UI with responsive design
- 🔄 Recent activity feed
- 📱 Mobile-friendly sidebar navigation
- ⚡ Fast development with Vite

## Tech Stack

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Recharts** - Chart library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Govind-Mishra23/Dashboard.git
cd Dashboard
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

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build

## Project Structure

```
Dashboard/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Dashboard.tsx
│   │   ├── StatsCard.tsx
│   │   ├── SalesChart.tsx
│   │   └── RecentActivity.tsx
│   ├── App.tsx          # Main App component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## Features Overview

### Dashboard Overview
- Four statistics cards showing key metrics with trend indicators
- Line chart displaying sales, revenue, and user data over time
- Recent activity feed with real-time updates

### Responsive Design
- Collapsible sidebar for mobile devices
- Adaptive grid layouts for different screen sizes
- Touch-friendly interface

## Customization

You can easily customize the dashboard by:

1. **Updating data**: Modify the data arrays in the components
2. **Changing colors**: Edit the CSS files for each component
3. **Adding new widgets**: Create new components in the `src/components` folder
4. **Modifying layout**: Adjust the grid layouts in `Dashboard.css`

## License

ISC

## Author

Govind Mishra