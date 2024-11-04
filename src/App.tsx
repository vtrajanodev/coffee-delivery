import { ThemeProvider } from "styled-components"
import { AuthContextProvider } from "./context/AuthContext"
import { CartContextProvider } from "./context/CartContext"
import { CoffeeContextProvider } from "./context/CoffeeContext"
import { Router } from "./router/Router"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"


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
