export const Books = ({ livros }) => {
    return (
        <section>
            <div className='container-books'>
                {Object.values(livros).map(
                    (livro) => {
                        return (
                            <div className='book' key={livro.id}>
                                <img src={livro.imagem} alt="" />
                                <div className="info">
                                    <p>
                                        Titulo: {livro.nome}
                                    </p>
                                    <p>
                                        Categoria: {livro.categoria}
                                    </p>
                                    <p>
                                        Páginas: {livro.paginas}
                                    </p>
                                    <p>
                                        Quantidade: {livro.quantidade}
                                    </p>
                                </div>
                            </div>
                        )
                    }
                )}
            </div>
        </section>
    );
}