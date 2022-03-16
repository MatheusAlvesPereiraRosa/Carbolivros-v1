import { useEffect, useState } from 'react';
import { Books } from '../../components/books';
import './index.css';

export function Home() {
  const [livros, setLivros] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getProdutos = async () => {
    fetch('http://localhost/API_livros/index.php')
    .then((response) => response.json())
    .then((responseJson) => (
      setLivros(responseJson.livros)
    ))
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);

    console.log(searchValue);

    if (!searchValue) {
      return getProdutos();
    }

    const url = 'http://localhost/API_livros/filtro.php?categ=' + searchValue;

    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => (
      setLivros(responseJson.livros)
    ))
  }

  useEffect(() => {
    if (!searchValue) {
      getProdutos();
    }
  }, [livros])

  return (
    <main>
      <div className='search-input'>
        <input type="search" className='search' placeholder='Digite a categoria do livro' onChange={handleChange} value={searchValue}/>

        {!!searchValue && (
          <h1>Search value: {searchValue}</h1>
        )}
      </div>

      <Books livros={livros}/>
    </main>
  );
}
