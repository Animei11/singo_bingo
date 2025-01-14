// Makes it to where you don't have to reinitialize the navbar in every js file 
import { NavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <>
            <NavBar/>
                <main>
                    <Outlet/>
                </main>
        </>
    )
}