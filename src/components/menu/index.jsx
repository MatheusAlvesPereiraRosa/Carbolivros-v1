import { Link } from 'react-router-dom';

export const Menu = () => {

    return (
        <header>
            <nav className='nav-bar'>
                <Link to="/" className='nav-item'>Carbolivros</Link>
                <Link to="/Cadastro" className='nav-item'>Cadastrar livros</Link>
            </nav>
        </header>
    )
}