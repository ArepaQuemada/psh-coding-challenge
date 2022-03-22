import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Layout = () => {
    return (
        <>
            <Navbar>
                <ul>
                    <li>
                        <Link to='crew'>Crew</Link>
                    </li>
                    <li>
                        <Link to='characters'>Characters</Link>
                    </li>
                </ul>
            </Navbar>
            <Outlet />
        </>
    )
}

export default Layout