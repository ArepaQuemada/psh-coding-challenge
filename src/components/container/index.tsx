import './index.scss'

const Container: React.FC = ({children}) => {
    return (  
        <section className="container">
            <div className='container__content'>
                {children}
            </div>
        </section>
    );
}

export default Container;