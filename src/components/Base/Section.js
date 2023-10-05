import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles'
import Box from '@mui/joy/Box';
import { defaultTheme, light, colored, dark, darkest } from "../../configs/themes.mui.config";

const Section = ({ theme, sx, children }) => {
  const themeMap = {
    "light": light,
    "colored": colored,
    "dark": dark,
    "darkest": darkest,
  }
  
  const sectionTheme = themeMap[theme] || defaultTheme;

  return (
    <CssVarsProvider theme={sectionTheme}>
      <Box
        sx={{
          backgroundColor: "background.body",
          ...sx,
        }}
      >
        {children}
      </Box>
    </CssVarsProvider>
  )
}

export default Section;