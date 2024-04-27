import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { DefaultLayout } from "../layouts/DefaultLayout"
import { Home } from "../pages/Home"
import { Cart } from "../pages/Cart"

const router = createBrowserRouter([
  {
    path: '/login',
    element: <h1>login</h1>
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
      }
    ]
  },

])

export const Router = () => {
  return (
    <RouterProvider router={router} />
  )
}
