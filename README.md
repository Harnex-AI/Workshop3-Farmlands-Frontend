# Farmlands Field Assistant - Canterbury Operations

A modern Progressive Web Application for agricultural field operations and farmer support in Canterbury, New Zealand.

## Project Overview

This application provides farmers and agricultural workers with a comprehensive dashboard for managing field operations, tracking equipment, monitoring weather conditions, and organizing farming tasks.

## Features

- **Dashboard**: Real-time overview of field operations and statistics
- **Field Management**: Track and manage different agricultural fields
- **Equipment Tracking**: Monitor farm equipment status and maintenance
- **Task Management**: Organize and track farming tasks
- **Analytics**: Data insights for farming operations
- **Directory**: Contact information and resources

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - Frontend library
- **shadcn/ui** - Modern UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Recharts** - Charts and data visualization

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd farm-field-pilot
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── dashboard/  # Dashboard-specific components
│   ├── layout/     # Layout components
│   └── ui/         # Base UI components (shadcn/ui)
├── pages/          # Application pages/routes
├── types/          # TypeScript type definitions
├── data/           # Mock data and constants
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
└── assets/         # Static assets
```