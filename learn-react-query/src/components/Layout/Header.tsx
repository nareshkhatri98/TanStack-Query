import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header>
        <div className=" flex items-center justify-around mx-20 py-5">
           <div className="basis-1/4 text-xl font-semibold"> <NavLink to={"/"}>TanStack Query</NavLink></div>
            <ul className=" flex-1 flex items-center  justify-between text-xl font-semibold">
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li><NavLink to={"/trad"}>FetchOld</NavLink></li>
                <li><NavLink to={"/rq"}> FetchRQ</NavLink></li>
            </ul>
        </div>
    </header>
  )
}
