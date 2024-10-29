import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Login from './components/Sign-in';
import Signup from './components/Sign-up';
import Dashboard from './components/Dashboard';

import 'react-toastify/dist/ReactToastify.css';
import useSocket from './hooks/socket';
import { checkTokensValidation } from './util/checkTokensValidation';
import { history } from '../src/util/history';
import lightTheme from "./Themes/light";
import darkTheme from "./Themes/dark";

import HeaderContainer from "./components/Containers/HeaderContainer";
import PageContainer from "./components/Containers/PageContainer";
import { checkAuthentication } from "./middleware/auth";

function App() {
  // Retrieve theme setting from Redux store
  const theme = useSelector((state) => state.theme);

  // State to handle theme mode (dark/light)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Validate tokens and check login status
  const { isLoggedIn, refresh } = checkTokensValidation();

  // Socket instance and connect function
  const { socket, connectSocket } = useSocket();

  // Effect for handling theme mode based on system preferences or user setting
  useEffect(() => {
    const updateThemeMode = () => {
      const isSystemDark = theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(theme === "dark" || isSystemDark);
    };

    updateThemeMode();

    // Listen for system theme changes if "system" theme is selected
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateThemeMode);

    // Cleanup listener on component unmount
    return () => mediaQuery.removeEventListener("change", updateThemeMode);
  }, [theme]);

  // Effect for managing socket connection based on login status
  useEffect(() => {
    if (isLoggedIn) {
      connectSocket(refresh);
    } else {
      socket?.disconnect();
    }
  }, [isLoggedIn, refresh]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />

      {/* Router with custom history */}
      <Router history={history}>
        {/* Header container for consistent layout styling */}
        <HeaderContainer>
          <Header />
        </HeaderContainer>

        {/* Main content container */}
        <PageContainer>
          <Routes>
            {/* Define routes with authentication handling */}
            <Route path="/" Component={checkAuthentication(Home, false)} />
            <Route path="/login" Component={checkAuthentication(Login, false)} />
            <Route path="/signup" Component={checkAuthentication(Signup, false)} />
            <Route path="/dashboard" Component={checkAuthentication(Dashboard, true)} />
            <Route path="*" Component={NotFound} /> {/* Fallback route */}
          </Routes>
        </PageContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
