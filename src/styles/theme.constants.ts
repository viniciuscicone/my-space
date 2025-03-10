export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

export const FONT_SIZES = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '3.75rem',
} as const;

export const SPACES = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
} as const;

export const COLORS = {
  light: {
    background: 'hsl(0, 0%, 100%)',
    foreground: 'hsl(240, 10%, 3.9%)',
    card: 'hsl(0, 0%, 100%)',
    cardForeground: 'hsl(240, 10%, 3.9%)',
    popover: 'hsl(0, 0%, 100%)',
    popoverForeground: 'hsl(240, 10%, 3.9%)',
    primary: 'hsl(210, 33.00%, 37.50%)',
    primaryForeground: 'hsl(210, 40%, 98%)',
    secondary: 'hsl(240, 4.8%, 95.9%)',
    secondaryForeground: 'hsl(240, 5.9%, 10%)',
    muted: 'hsl(240, 4.8%, 95.9%)',
    mutedForeground: 'hsl(240, 2.20%, 35.30%)',
    accent: 'hsl(240, 4.8%, 95.9%)',
    accentForeground: 'hsl(240, 5.9%, 10%)',
    destructive: 'hsl(0, 84.2%, 60.2%)',
    destructiveForeground: 'hsl(0, 0%, 98%)',
    border: 'hsl(240, 5.9%, 90%)',
    input: 'hsl(240, 5.9%, 90%)',
    ring: 'hsl(221.2, 83.2%, 53.3%)',
  },
  dark: {
    background: 'hsl(174, 10.90%, 18.00%)',
    foreground: 'hsl(0, 0%, 100%)',
    card: 'hsl(240, 10%, 3.9%)',
    cardForeground: 'hsl(0, 0%, 98%)',
    popover: 'hsl(240, 10%, 3.9%)',
    popoverForeground: 'hsl(0, 0%, 98%)',
    primary: 'hsla(210, 33.00%, 37.50%, 0.53)',
    primaryForeground: 'hsl(210, 40%, 98%)',
    secondary: 'hsl(240, 3.7%, 15.9%)',
    secondaryForeground: 'hsl(0, 0%, 98%)',
    muted: 'hsl(240, 3.7%, 15.9%)',
    mutedForeground: 'hsl(240, 5%, 64.9%)',
    accent: 'hsl(240, 3.7%, 15.9%)',
    accentForeground: 'hsl(0, 0%, 98%)',
    destructive: 'hsl(0, 62.8%, 30.6%)',
    destructiveForeground: 'hsl(0, 0%, 98%)',
    border: 'hsl(240, 3.7%, 15.9%)',
    input: 'hsl(240, 3.7%, 15.9%)',
    ring: 'hsl(224.3, 76.3%, 48%)',
  },
} as const; 