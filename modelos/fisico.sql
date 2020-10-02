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
    genero VARCHAR(20),
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

INSERT INTO categoria(nm,de) VALUES('Imóveis',null);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Venda - casas e apartamentos', 1);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Terrenos, sítios e fazendas', 1);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Comércio e indústria', 1);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Aluguel - casas e apartamentos',1);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Temporada',1);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Lançamentos',1);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Outros', 1);

INSERT INTO categoria(nm,de) VALUES('Automóveis',null);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Carros, vans e utilitários', 2);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Peças', 2);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Acessórios',2);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Motos',2);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Barcos', 2);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Aeronaves', 2);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Ônibus', 2);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Outros', 2);

INSERT INTO categoria(nm,de) VALUES('Eletrônicos',null);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Celulares', 3);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Telefones', 3);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Computadores', 3);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Televisão', 3);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Videogame', 3);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Outros', 3);

INSERT INTO categoria(nm,de) VALUES('Músicas',null);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Instrumentos', 4);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Livros', 4);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Revistas', 4);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Coleções', 4);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('CDs, DVDs, etc', 4);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Antiguidades', 4);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Outros', 4);

INSERT INTO categoria(nm,de) VALUES('Esportes',null);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Ginástica', 5);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Ciclismo', 5);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Acádemia', 5);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Futebol', 5);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Skate', 5);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Natação', 5);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Outros', 5);

INSERT INTO categoria(nm,de) VALUES('Roupas',null);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Camisetas', 6);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Calças', 6);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Intimos', 6);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Moletons', 6);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Jaquetas', 6);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Pijamas', 6);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Outros', 6);

INSERT INTO categoria(nm,de) VALUES('Calçados',null);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Tênis', 7);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Sandalias', 7);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Chinelos', 7);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Botas', 7);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Sapatos', 7);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Meias', 7);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Outros', 7);

INSERT INTO categoria(nm,de) VALUES('Indúsria',null);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Items para agro', 8);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Máquinas de produção', 8);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Máquinas de contrução', 8);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Produção Rural', 8);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Tratores', 8);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Peças', 8);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Outros', 8);

INSERT INTO categoria(nm,de) VALUES('Comércio',null);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Equipamentos', 9);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Mobiliário', 9);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Itens comércio e escritório', 9);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Trailers e carrinhos', 9);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Outros', 9);

INSERT INTO categoria(nm,de) VALUES('Serviços',null);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Domésticos', 10);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Outros', 10);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Babá', 10);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Eventos - Festas', 10);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Conserto', 10);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Saude', 10);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Beleza', 10);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Informática', 10);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Tradução', 10);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Transporte - Mudança', 10);
INSERT INTO subcategoria(nm, fk_categoria) VALUES('Turismo', 10);
