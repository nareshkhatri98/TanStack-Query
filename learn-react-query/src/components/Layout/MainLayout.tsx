import { ReactElement } from "react"
import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const MainLayout = ():ReactElement => {
  return (
    <div>
    <Header/>
    <main >
        <Outlet/>

    </main>
    <Footer/>
    </div>
  )
}
