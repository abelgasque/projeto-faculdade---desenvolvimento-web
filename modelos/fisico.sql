CREATE DATABASE db_trabalhophp;
USE db_trabalhophp;

CREATE TABLE pessoa(
	id_pessoa BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(20) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
	cpf VARCHAR(20) NOT NULL UNIQUE,
    genero VARCHAR(15),
    tipo VARCHAR(15) NOT NULL,
    email VARCHAR(100) NOT NULL,
	celular VARCHAR(20) NOT NULL,
    telefone VARCHAR(20),
	situacao VARCHAR(20) NOT NULL,
    senha VARCHAR(20) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE endereco(
	id_endereco BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    cep VARCHAR(10) NOT NULL,
    uf VARCHAR(2) NOT NULL,
    cidade VARCHAR(30) NOT NULL,
    bairro VARCHAR(30) NOT NULL,
	logradouro VARCHAR(50) NOT NULL,
    complemento VARCHAR(30) NOT NULL,
	numero VARCHAR(10) NOT NULL,
    observacao VARCHAR(500),
    fk_pessoa BIGINT(20) NOT NULL,
	CONSTRAINT fk_endereco_pessoa FOREIGN KEY (fk_pessoa) REFERENCES pessoa(id_pessoa)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE pessoa_endereco(
	fk_pessoa_endereco_endereco BIGINT(20) NOT NULL,
    fk_pessoa_endereco_pessoa BIGINT(20) NOT NULL,
	CONSTRAINT fk_endereco_pessoa_pessoa FOREIGN KEY (fk_pessoa_endereco_pessoa) REFERENCES pessoa(id_pessoa),
    CONSTRAINT fk_endereco_pessoa_endereco FOREIGN KEY (fk_pessoa_endereco_endereco) REFERENCES endereco(id_endereco)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE categoria(
	id_categoria BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    nm VARCHAR(30) NOT NULL,
    de VARCHAR(2000)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE subcategoria(
	id_subcategoria BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    nm VARCHAR(30) NOT NULL,
    fk_categoria BIGINT(20) NOT NULL,
	CONSTRAINT fk_subcategoria_categoria FOREIGN KEY (fk_categoria) REFERENCES categoria(id_categoria)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE compra(
	id_compra BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    nm VARCHAR(50),
    vl_total DECIMAL(10.2) NOT NULL,
    tipo VARCHAR(10) NOT NULL,
    dt DATE NOT NULL,
    situacao VARCHAR(20) NOT NULL,
    fk_pessoa BIGINT(20) NOT NULL,
    fk_endereco BIGINT(20) NOT NULL,
	CONSTRAINT fk_comp_pess FOREIGN KEY (fk_pessoa) REFERENCES pessoa(id_pessoa),
    CONSTRAINT fk_comp_ende FOREIGN KEY (fk_endereco) REFERENCES endereco(id_endereco)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE produto(
	id_produto BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    nm VARCHAR(50) NOT NULL,
    vl DECIMAL(10.2) NOT NULL,
    qtd INT NOT NULL,
    de VARCHAR(5000),
    tamanho VARCHAR(10),
    cor VARCHAR(20),
    situacao VARCHAR(15) NOT NULL,
    fk_subcategoria BIGINT(20) NOT NULL,
	CONSTRAINT fk_prod_subc FOREIGN KEY (fk_subcategoria) REFERENCES subcategoria(id_subcategoria)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE carrinho(
	id_carrinho BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
    qtd_produto INT NOT NULL,
	vl_parcial DECIMAL(10.2) NOT NULL,
    dt_atribuicao DATE NOT NULL,
    situacao VARCHAR(20) NOT NULL,
    fk_produto BIGINT(20) NOT NULL,
    fk_compra BIGINT(20) NOT NULL,
    CONSTRAINT fk_carr_comp FOREIGN KEY (fk_compra) REFERENCES compra(id_compra),
	CONSTRAINT fk_carr_prod FOREIGN KEY (fk_produto) REFERENCES produto(id_produto)
);