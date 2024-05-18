// src/theme.js
import { createTheme } from '@mui/material/styles';

// Color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E8F5E9",
    100: "#C8E6C9",
    200: "#A5D6A7",
    300: "#81C784",
    400: "#66BB6A",
    500: "#4CAF50",
    600: "#43A047",
    700: "#388E3C",
    800: "#2E7D32",
    900: "#1B5E20",
  },
};

// MUI theme settings
export const themeSettings = (mode) => {
  const isDarkMode = mode === 'dark';

  return createTheme({
    palette: {
      mode: mode,
      primary: {
        dark: isDarkMode ? colorTokens.primary[200] : colorTokens.primary[700],
        main: colorTokens.primary[500],
        light: isDarkMode ? colorTokens.primary[800] : colorTokens.primary[50],
      },
      neutral: {
        dark: isDarkMode ? colorTokens.grey[100] : colorTokens.grey[700],
        main: colorTokens.grey[500],
        mediumMain: colorTokens.grey[400],
        medium: colorTokens.grey[300],
        light: isDarkMode ? colorTokens.grey[700] : colorTokens.grey[50],
      },
      background: {
        default: isDarkMode ? colorTokens.grey[900] : colorTokens.grey[10],
        alt: isDarkMode ? colorTokens.grey[800] : colorTokens.grey[0],
      },
      text: {
        primary: isDarkMode ? colorTokens.grey[50] : colorTokens.grey[900],
        secondary: isDarkMode ? colorTokens.grey[200] : colorTokens.grey[600],
      },
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 36,
        fontWeight: 700,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 30,
        fontWeight: 600,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
        fontWeight: 500,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 500,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
        fontWeight: 500,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 500,
      },
      body1: {
        fontSize: 14,
        fontWeight: 400,
      },
      body2: {
        fontSize: 12,
        fontWeight: 400,
      },
      button: {
        textTransform: "none",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            textTransform: 'none',
            fontSize: '14px',
            padding: '10px 20px',
          },
          containedPrimary: {
            backgroundColor: colorTokens.primary[500],
            '&:hover': {
              backgroundColor: colorTokens.primary[400],
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
  });
};
