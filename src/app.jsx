/* eslint-disable perfectionist/sort-imports */
import './global.css';

// i18n
import './locales/i18n';

// ----------------------------------------------------------------------

import Router from './routes/sections';
import ThemeProvider from './theme';
import { useScrollToTop } from './hooks/use-scroll-to-top';
import ProgressBar from './components/progress-bar';
import { MotionLazy } from './components/animate/motion-lazy';
import SnackbarProvider from './components/snackbar/snackbar-provider';
import { SettingsDrawer, SettingsProvider } from './components/settings';
import { AuthProvider } from './auth/context';

// import { AuthProvider } from 'src/auth/context/auth0';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <AuthProvider>
      <SettingsProvider
        defaultSettings={{
          themeMode: 'light', // 'light' | 'dark'
          themeDirection: 'ltr', //  'rtl' | 'ltr'
          themeContrast: 'default', // 'default' | 'bold'
          themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
          themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
          themeStretch: false,
        }}
      >
        <ThemeProvider>
          <MotionLazy>
            <SnackbarProvider>
              <SettingsDrawer />
              <ProgressBar />
              <Router />
            </SnackbarProvider>
          </MotionLazy>
        </ThemeProvider>
      </SettingsProvider>
    </AuthProvider>
  );
}
