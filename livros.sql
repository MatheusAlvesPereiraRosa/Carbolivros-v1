-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16-Mar-2022 às 15:28
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `livros`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `livros`
--

CREATE TABLE `livros` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  `paginas` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `livros`
--

INSERT INTO `livros` (`id`, `nome`, `categoria`, `imagem`, `paginas`, `quantidade`) VALUES
(1, 'A volta ao mundo em 80 dias', 'Ação/Aventura', 'https://img.travessa.com.br/livro/GR/c7/c7c0ecb8-d092-40d0-8e2c-604e86386d0b.jpg', 10, 5),
(2, 'O diário de Annie Frank', 'Suspence', 'https://images-na.ssl-images-amazon.com/images/I/91RMqWB-CTL.jpg', 300, 2),
(3, 'Paranormal', 'Terror', 'https://m.media-amazon.com/images/I/51Q5qCViMqL.jpg', 105, 6),
(9, 'Um diário de um banana 2', 'Comédia', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8MQFFsGZd3acEESWbC8CXM9XmNm24R_x9Qw&usqp=CAU', 110, 3),
(10, 'Um diário de um banana', 'Comédia', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8MQFFsGZd3acEESWbC8CXM9XmNm24R_x9Qw&usqp=CAU', 110, 3),
(11, 'Bem do seu tamanho', 'Infantil', 'https://img.travessa.com.br/livro/BA/ec/ec5775d8-bae8-4534-9836-91a6fdbfdbdf.jpg', 56, 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `livros`
--
ALTER TABLE `livros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `livros`
--
ALTER TABLE `livros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
