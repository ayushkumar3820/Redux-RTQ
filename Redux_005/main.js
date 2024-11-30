import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'  // Ensure this import is correct
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './page/Home'
import Cart from './page/cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
])

// Ensure createRoot is used correctly
const root = createRoot(document.getElementById('root'))
root.render(
  
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
 
)