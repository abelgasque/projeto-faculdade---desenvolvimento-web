CREATE DATABASE db_trabalhophp;
USE db_trabalhophp;

CREATE TABLE pessoa(
    id_pessoa BIGINT PRIMARY KEY AUTO_INCREMENT,
	cpf VARCHAR(20) NOT NULL UNIQUE,
	img_pessoa VARCHAR(50) NOT NULL,
    img_fundo VARCHAR(50) NOT NULL,
    nome VARCHAR(20) NOT NULL,
    tipo_pessoa VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL,
	situacao_pessoa VARCHAR(20) NOT NULL,
    senha VARCHAR(20) NOT NULL,
	sobrenome VARCHAR(50),
    genero VARCHAR(15) ,
    celular VARCHAR(20),
    telefone VARCHAR(20),
    cep VARCHAR(10),
    uf VARCHAR(2),
    cidade VARCHAR(50),
    bairro VARCHAR(30),
	logradouro VARCHAR(50),
    complemento VARCHAR(15),
	numero VARCHAR(10)    
);

CREATE TABLE publicacao(
	id_publicacao BIGINT PRIMARY KEY AUTO_INCREMENT,
    img_publicacao VARCHAR(50) NULL,
    titulo VARCHAR(125) NOT NULL,
    descricao VARCHAR(2500) NOT NULL,
    dt_publicacao DATE NOT NULL,
    tipo_publicacao VARCHAR(20) NOT NULL,
    situacao_publicacao VARCHAR(10) NOT NULL,
    fk_pessoa BIGINT(20) NOT NULL,
	CONSTRAINT fk_publicacao_pessoa FOREIGN KEY (fk_pessoa) REFERENCES pessoa(id_pessoa)
);