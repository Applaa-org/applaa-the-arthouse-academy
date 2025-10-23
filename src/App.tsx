import * as React from 'react'
import { 
  createRouter, 
  RouterProvider, 
  createRootRoute, 
  createRoute as createTanStackRoute, 
  Outlet 
} from '@tanstack/react-router'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";

const queryClient = new QueryClient();

// Create root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </QueryClientProvider>
  ),
})

// Create index route
const indexRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index,
})

// Create about route
const aboutRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

// Create courses route
const coursesRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/courses',
  component: Courses,
})

// Create gallery route
const galleryRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: Gallery,
})

// Create testimonials route
const testimonialsRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/testimonials',
  component: Testimonials,
})

// Create contact route
const contactRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
})

// Create booking route
const bookingRoute = createTanStackRoute({
  getParentRoute: () => rootRoute,
  path: '/booking',
  component: Booking,
})

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  coursesRoute,
  galleryRoute,
  testimonialsRoute,
  contactRoute,
  bookingRoute,
])

// Create router with proper TypeScript configuration
const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent' as const,
  defaultPreloadStaleTime: 0,
})

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => <RouterProvider router={router} />

export default App;