import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { Cart } from "../pages/Cart"
import { Finalize } from "../pages/Finalize"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: '',
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/finalize',
        element: <Finalize />
      }
    ]
  },

])

export const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}
