import React from "react";
import Head from "next/head";

// project import

//MUI Dark Mode
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
//theme
import { ColorModeContext, useMode } from "../theme/theme";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>My Next App</title>
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
        </Head>

        <main>{children}</main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Layout;
