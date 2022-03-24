import './index.scss'

const Container: React.FC = ({children}) => {
    return (  
        <section className="container">
            {children}
        </section>
    );
}

export default Container;