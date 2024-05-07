import { ThemeProvider } from "styled-components"
import { CoffeeContextProvider } from "./context/CoffeeContext"
import { Router } from "./router/Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { CartContextProvider } from "./context/CartContext"
import { AuthContextProvider } from "./context/AuthContext"



function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthContextProvider>
        <CartContextProvider>
          <CoffeeContextProvider>
            <Router />
          </CoffeeContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
