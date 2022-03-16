<?php

//Cabecalhos obrigatorios
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

//Incluir a conexao
include_once 'conexao.php';

$response = file_get_contents("php://input");
//$dados = json_decode($response_json, true);

$nome = $_GET['categ'];

$query_produto = "SELECT id, nome, categoria, imagem, paginas, quantidade FROM livros WHERE categoria like CONCAT('%', :categoria , '%') ORDER BY id";
$result_produtos = $conn->prepare($query_produto);

$result_produtos->bindParam(':categoria', $nome);

$result_produtos->execute();

if(($result_produtos) AND ($result_produtos->rowCount() != 0)){
    while($row_produto = $result_produtos->fetch(PDO::FETCH_ASSOC)){
        extract($row_produto);

        $lista_produtos["livros"][$id] = [
            'id' => $id,
            'nome' => $nome,
            'categoria' => $categoria,
            'imagem' => $imagem,
            'paginas' => $paginas,
            'quantidade' => $quantidade
        ];
    }

    //Resposta com status 200
    http_response_code(200);

    //Retornar os produtos em formato json
    echo json_encode($lista_produtos);
}