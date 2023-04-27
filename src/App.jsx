import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { Container, CssBaseline } from "@mui/material";
import getDesignTokens from "./styles/customTheme";

import ColorModeContext from "./context/toggle-theme-ctx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Container>
          <Home />
          <About />
          <Projects />
          <Contact />
        </Container>
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
