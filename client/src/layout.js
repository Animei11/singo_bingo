import { NavBar } from "./Components/navBar";
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