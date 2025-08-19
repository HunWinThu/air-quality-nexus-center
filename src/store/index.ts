import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type ThemeProviderProps } from '@/components/theme-provider';

interface ThemeState {
  theme: ThemeProviderProps['theme'];
  setTheme: (theme: ThemeProviderProps['theme']) => void;
}

interface LayoutState {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'theme-storage',
    }
  )
);

export const useLayoutStore = create<LayoutState>((set) => ({
  isMobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}));
