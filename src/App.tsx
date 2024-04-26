import { ThemeProvider } from "styled-components"
import { CoffeeContextProvider } from "./context/CoffeeContext"
import { Router } from "./router/Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"



function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeContextProvider>
        <Router />
      </CoffeeContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
