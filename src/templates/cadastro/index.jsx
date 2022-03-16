import { useState } from 'react';
import './index.css';

export function Cadastro() {
    const [livro, setLivro] = useState({
        nome: '',
        categoria: '',
        paginas: '',
        quantidade: ''
    })

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    })

    const valorInput = (e) => {
        setLivro({ ...livro, [e.target.name]: e.target.value})
        console.log(livro); 
    };

    const cadLivro = async (e) => {
        e.preventDefault()
        console.log(livro);

        await fetch("http://localhost/API_livros/cadastrar.php", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({livro})
        })
        .then((response)=> response.json())
        .then((responseJson) => {
            //console.log(responseJson)
            if(responseJson.erro) {
                setStatus({
                    type: 'erro',
                    mensagem: responseJson.mensagem
                })
            } else {
                setStatus({
                    type: 'sucess',
                    mensagem: responseJson.mensagem
                })
            }
        }).catch(() => {
            setStatus({
                type: 'erro',
                mensagem: 'Produto não cadastrado com sucesso, tente mais tarde!'
            })
        })
    };

    return (
        <main>
            <div className='container-cadastro'>
                <h1 className='titulo'>Carbolivros</h1>

                {status.type === 'erro'? <p>{status.mensagem}</p> : ""}
                {status.type === 'sucess'? <p>{status.mensagem}</p> : ""}

                <form onSubmit={cadLivro} className='container-inputs'>
                    <input type="text" name='nome' placeholder='Nome do livro' onChange={valorInput} />
                    <input type="text" name='categoria' placeholder='Categoria' onChange={valorInput} />
                    <input type="text" name='imagem' placeholder='Link da imagem' onChange={valorInput} />
                    <input type="text" name='paginas' placeholder='Páginas' onChange={valorInput} />
                    <input type="text" name='quantidade' placeholder='Quantidade do livro' onChange={valorInput} />
                    <button type='submit'>Cadastrar</button>
                </form>
            </div>
        </main>
    )
}