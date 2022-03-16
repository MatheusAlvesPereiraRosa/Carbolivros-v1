<?php

//cabeçalhos obrigatórios
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

//Incluir a conexão
include_once 'conexao.php';

$response_json = file_get_contents("php://input");
$dados = json_decode($response_json, true);

if($dados){

    $query = "INSERT INTO livros (nome, categoria, imagem, paginas, quantidade) VALUES (:nome, :categoria, :imagem, :paginas, :quantidade)";
    $cad_produto = $conn->prepare($query);

    $cad_produto->bindParam(':nome', $dados['livro']['nome']);
    $cad_produto->bindParam(':categoria', $dados['livro']['categoria']);
    $cad_produto->bindParam(':imagem', $dados['livro']['imagem']);
    $cad_produto->bindParam(':paginas', $dados['livro']['paginas']);
    $cad_produto->bindParam(':quantidade', $dados['livro']['quantidade']);

    $cad_produto->execute();

    if($cad_produto->rowCount()){
        $response = [
            "erro" => false,
        "mensagem" => "Produto cadastrado com sucesso"
        ];
    } else {
        $response = [
            "erro" => true,
            "mensagem" => "Produto não cadastrado com sucesso"
        ];
    }

} else {
    $response = [
        "erro" => true,
        "mensagem" => "Produto não cadastrado com sucesso"
    ];
}

http_response_code(200);
echo json_encode($response);