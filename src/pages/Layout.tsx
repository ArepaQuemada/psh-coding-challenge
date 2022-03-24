import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Container from "../components/container";

const Layout = () => {
    return (
        <>
            <Navbar>
                <ul className="navbar__item-container">
                    <li className="navbar__item">
                        <Link className="navbar__item--color-primary" to='crew'>Crew</Link>
                    </li>
                    <li className="navbar__item">
                        <Link className="navbar__item--color-primary" to='characters'>Characters</Link>
                    </li>
                </ul>
            </Navbar>
            <Container>
                <Outlet />
            </Container>
        </>
    )
}

export default Layout