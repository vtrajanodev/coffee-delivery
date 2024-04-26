import { ThemeProvider } from "styled-components"
import { CoffeeContextProvider } from "./context/CoffeeContext"
import { Router } from "./router/Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { CartContextProvider } from "./context/CartContext"



function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </CartContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
