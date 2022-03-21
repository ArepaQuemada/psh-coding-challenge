import './index.scss'

const Navbar: React.FC = ({ children }) => {
    return (
        <>
            <nav className='navbar navbar__color--primary'>
                {children}
            </nav>
        </>
    )
}

export default Navbar