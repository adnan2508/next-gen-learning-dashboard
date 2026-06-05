# Next Gen Learning Dashboard

Live Site: https://next-gen-learning-dashboard-two-ashy.vercel.app/

A high-performance, beautifully animated learning dashboard built with Next.js 16, React 19, and Framer Motion. This project demonstrates modern web architecture patterns for optimal performance and user experience.

## Architecture Overview

### Server Components

- **Courses fetched inside Server Components**: Data is retrieved server-side using the `getCourses()` function within the `BentoGrid` async server component
- **No client-side fetch waterfall**: Eliminates waterfalls by fetching data on the server before rendering, ensuring all data is available during the initial server render
- **Implementation**: The [getCourses.ts](app/lib/supabase/getCourses.ts) function creates a Supabase server client and fetches courses with proper ordering and error handling

### Suspense & Loading

- **Route-level loading.tsx**: Implements a [loading.tsx](app/loading.tsx) component at the route level that displays while data is being fetched
- **Skeleton loaders**: Custom [Skeleton.tsx](app/components/ui/Skeleton.tsx) component provides visual placeholders with CSS animations (`animate-pulse`) that create a smooth loading experience
- **Graceful UX**: Loading states show realistic content shapes (hero tile, activity tile, and course grid) matching the actual layout

### Animation

- **Framer Motion stagger**: The [StaggerContainer.tsx](app/components/ui/StaggerContainer.tsx) component orchestrates a staggered animation sequence with `staggerChildren: 0.15` for cascading entrance animations
- **Spring hover interactions**: [AnimatedCard.tsx](app/components/ui/AnimatedCard.tsx) implements spring physics-based hover animations with `whileHover={{ scale: 1.02 }}` and precise spring configuration (stiffness: 300, damping: 20)
- **Animated progress bars**: [ProgressBar.tsx](app/components/ui/ProgressBar.tsx) animates width transitions with easing for smooth progress visualization
- **Layout animations for sidebar**: [Sidebar.tsx](app/components/layout/Sidebar.tsx) uses CSS `transition-all duration-300` for smooth expand/collapse animations without triggering layout recalculations

### Performance Optimizations

- **Transform + opacity animations**: All animations use GPU-accelerated properties (transform, opacity) instead of layout-affecting properties
- **No layout-shift-based animation**: 
  - Uses `opacity` for fade transitions
  - Uses `y` transforms for vertical movement (translateY)
  - Uses `scale` transforms for size changes
  - Avoids animating `width`, `height`, `padding`, `margin` on layout-dependent elements
- **Result**:   Attractive animations with impact

## Tech Stack

- **Next.js 16**: Latest React framework with App Router
- **React**: Latest React with improvements to concurrent features
- **Framer Motion**: Production-ready animation library
- **Tailwind CSS**: Utility-first styling
- **TypeScript**: Type-safe development
- **Supabase**: Backend-as-a-service for data management
- **Lucide React**: Icon library

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## Project Structure

```
app/
├── page.tsx                    # Main server component that renders the dashboard
├── layout.tsx                  # Root layout with metadata
├── loading.tsx                 # Route-level loading UI
├── components/
│   ├── bento/                  # Grid layout components
│   │   ├── BentoGrid.tsx       # Main grid (async server component)
│   │   ├── HeroTile.tsx        # Hero section
│   │   ├── ActivityTile.tsx    # Activity display
│   │   └── CourseTile.tsx      # Course card
│   ├── layout/
│   │   └── Sidebar.tsx         # Navigation sidebar with collapse animation
│   └── ui/
│       ├── AnimatedCard.tsx    # Spring-based hover animations
│       ├── AnimatedItem.tsx    # Stagger animation wrapper
│       ├── StaggerContainer.tsx # Orchestrates staggered animations
│       ├── ProgressBar.tsx     # Animated progress indicator
│       └── Skeleton.tsx        # Loading placeholder
├── lib/
│   └── supabase/
│       ├── getCourses.ts       # Server-side data fetching
│       └── server.ts           # Supabase client configuration
└── types/
    └── course.ts               # Course data type definitions
```
