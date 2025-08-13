# Farmlands Field Assist – Frontend

## Overview
The **Farmlands Field Assistant** is a Progressive Web App (PWA) built for agricultural field operations and farmer support.  
It is designed as a modern React-based dashboard for **Canterbury, New Zealand** farmers, enabling real-time insights into field management, equipment tracking, and task scheduling.

**GitHub Repo:** [Workshop3-Farmlands](https://github.com/Harsh-HarnexAI/Workshop3-Farmlands)

---

## Technical Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS with agricultural colour palette
- **Components:** shadcn/ui, Radix UI, Lucide React
- **State Management:** Zustand
- **Data Fetching:** React Query / TanStack Query
- **Forms & Validation:** React Hook Form + Zod
- **Data Visualization:** Recharts
- **PWA Features:** Service worker, offline support
- **Mock API:** JSON Server / MSW
- **Testing:** Vitest
- **Linting/Formatting:** ESLint + Prettier
- **Build Tools:** Vite, PostCSS, Autoprefixer
- **Utilities:** date-fns, class-variance-authority, cmdk, Sonner (toasts)

---

## Features

### 1. Dashboard Overview (`/`)
- Weather widget for **Christchurch, NZ**
- Field status cards (5–6 mock fields)
- Quick stats (crop health, irrigation status, upcoming tasks)
- Quick actions (Add Task, Record Observation, Equipment Check-in)
- Task list (current & upcoming, with priority indicators)

### 2. Field Management (`/fields`)
- Field list with crop types, planting dates, and status
- Individual field detail pages
- Field notes/observations form
- Photo upload simulation (drag & drop)
- Search and filter by crop type or status

### 3. Task Management (`/tasks`)
- Today’s tasks list
- Task creation form (Irrigation, Spraying, Harvesting, etc.)
- Calendar view of upcoming tasks
- Task completion tracking with status & priority

### 4. Equipment Tracker (`/equipment`)
- Equipment list (tractors, spreaders, harvesters, etc.)
- Status tracking (Available, In Use, Maintenance)
- Maintenance log form
- Operating hours, fuel level alerts, and location tracking

### 5. Farmer Directory (`/farmers`)
- Contact list of local farmers and suppliers
- Professional categories: Advisors, Equipment Dealers, Veterinary Services
- Click-to-call and click-to-email functionality
- Relationship history & last contact tracking

### 6. Analytics & Reporting (`/analytics`)
- Key performance metrics (farm area, health score, task completion rate)
- Crop distribution, task frequency, and equipment utilisation charts
- Month-over-month trend analysis
- Fully responsive & interactive graphs

---

## UI/UX Guidelines
- Mobile-first responsive design
- Agricultural colour scheme (greens, earth tones)
- Clear typography optimised for outdoor/mobile use
- Touch-friendly controls
- Loading states & error boundaries
- Accessibility (ARIA labels, keyboard navigation)

---

## Development Setup
- Clear `README` with setup instructions
- `.env.example` for environment variables
- Optional Docker setup
- GitHub Actions for CI/CD
- Modular folder structure
- Component documentation examples

---

## Known Issues for Workshop Fix

### Issue 1: "View All" Button on Dashboard Tasks Card
**Problem:**  
- Button is non-functional/misaligned and doesn’t navigate to the tasks list.

**Goal:**  
- Ensure the "View All" button navigates to `/tasks` with proper styling and responsiveness.

**Acceptance Criteria:**
1. Clicking "View All" opens `/tasks` without page reload (SPA routing).
2. Styling matches the rest of the UI.
3. Works consistently across devices.

---

### Issue 2: Missing Data Visualisations on Analytics Page
**Problem:**  
- Analytics page only shows raw data; lacks visual graphs.

**Goal:**  
- Add interactive, styled graphs to better present key data points.

**Acceptance Criteria:**
1. Graphs reflect data accurately.
2. Charts follow UI theme and are responsive.
3. Interactive features: tooltips, hover effects, zoom/pan.
4. Auto-refresh on data updates.

---