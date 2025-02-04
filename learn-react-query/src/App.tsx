import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { MainLayout } from "./components/Layout/MainLayout"
import FetchOld from "./Pages/FetchOld"
import FetchRQ from "./Pages/FetchRQ"
import Home from "./Pages/Home"
const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>,
    children: [
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/trad',
        element:<FetchOld />
      },
      {
        path:'/rq',
        element:<FetchRQ/>
      }

    ]
  }
])
const App = () => {
   const queryClient = new QueryClient();
  
 return 
 <QueryClientProvider client={queryClient}>
  <RouterProvider router={router}></RouterProvider>
  </QueryClientProvider>

}

export default App