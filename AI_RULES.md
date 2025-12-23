# AI Development Rules & Tech Stack

## Tech Stack Overview

• **Frontend Framework**: React 18 with TypeScript for type-safe development
• **Styling**: Tailwind CSS with shadcn/ui components for consistent UI
• **Routing**: React Router v6 for client-side navigation
• **Build Tool**: Vite for fast development and optimized builds
• **State Management**: React Query (TanStack Query) for server state management
• **UI Components**: Radix UI primitives with Tailwind styling
• **Icons**: Lucide React for consistent iconography
• **Animations**: Tailwind CSS animations and custom CSS keyframes
• **Code Quality**: ESLint with TypeScript rules for code consistency
• **Deployment**: Lovable platform with automatic GitHub integration

## Library Usage Rules

### Core UI Libraries
• **Primary UI Library**: Use shadcn/ui components whenever possible for consistency
• **Icons**: Always use lucide-react icons to maintain visual consistency
• **Styling**: Use Tailwind CSS classes exclusively - avoid inline styles or CSS-in-JS solutions
• **Animations**: Prefer Tailwind's built-in animations or custom CSS keyframes

### State Management
• **Component State**: Use React's built-in useState and useReducer hooks
• **Server State**: Use React Query (@tanstack/react-query) for all API data fetching and caching
• **Global State**: Avoid global state libraries unless absolutely necessary - prefer prop drilling or context for simple cases
• **Form State**: Use React Hook Form for complex forms with validation

### Routing and Navigation
• **Routing**: Use React Router DOM v6 for all client-side routing needs
• **Navigation Components**: Create custom navigation components using React Router hooks
• **Scroll Management**: Handle scroll behavior within navigation components

### Data Fetching and API Integration
• **HTTP Requests**: Use the browser's native fetch API unless React Query provides significant benefits
• **API Abstraction**: Create service modules for API interactions
• **Error Handling**: Let errors bubble up to React Query error boundaries unless custom handling is required

### Form and Validation
• **Form Library**: Use React Hook Form for all forms
• **Validation**: Use Zod for schema validation when needed
• **Form Components**: Use shadcn/ui form components with proper accessibility attributes

### Notifications and Toasts
• **Toast System**: Use the existing sonner and toaster components already configured
• **Alerts**: Use shadcn/ui alert components for inline notifications
• **Dialogs**: Use shadcn/ui dialog components for modal interactions

### Date and Time Handling
• **Date Library**: Use date-fns for all date manipulation and formatting
• **Date Components**: Use shadcn/ui date picker or calendar components when needed

### Charts and Data Visualization
• **Charting**: Use recharts for data visualization needs
• **Data Display**: Prefer shadcn/ui table components for tabular data

### Code Quality and Development
• **Type Safety**: Always use TypeScript with strict typing
• **Component Structure**: Create separate files for each component in the src/components directory
• **Page Structure**: Create separate files for each page in the src/pages directory
• **Hooks**: Create custom hooks in src/hooks when logic needs to be shared
• **Utility Functions**: Place utility functions in src/lib/utils.ts or create separate utility files
• **Testing**: Write unit tests for utility functions and complex logic
• **Accessibility**: Ensure all components follow accessibility best practices with proper ARIA attributes

### Third-Party Integrations
• **Analytics**: Do not add analytics libraries without explicit approval
• **External Scripts**: Avoid adding external scripts unless absolutely necessary
• **CDN Resources**: Prefer local assets over CDN when possible for better performance

### Performance Considerations
• **Bundle Size**: Avoid adding heavy libraries - prefer lightweight alternatives
• **Lazy Loading**: Use React.lazy and Suspense for code splitting when appropriate
• **Image Optimization**: Use modern image formats and proper sizing
• **Re-rendering**: Use React.memo, useMemo, and useCallback judiciously to optimize performance