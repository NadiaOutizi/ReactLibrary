import React from "react";
import Spinner from './spinner';
import { ThemeProvider } from "styled-components";


function Sus() {
  const theme = {
    primary: {
      // main: "#29b6f6",
      main: "#000",
      light: "#dcf3fa",
      // dark: "#0086c3",
      dark:'#000',
      TextColor: "#000",
      danger: "#e91e63",
      dangerDark: "#8c0101",
    },
    secondary: {
      main: "#9e9e9e",
      light: "#cfcfcf",
      dark: "#707070",
      TextColor: "#fff",
    }
  }
  return (
    <div>
  <ThemeProvider theme={theme}> 
  
       <Spinner/>
</ThemeProvider>
    </div>
  )
}

export default Sus
