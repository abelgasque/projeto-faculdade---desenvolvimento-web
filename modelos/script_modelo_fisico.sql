CREATE TABLE pessoa(
	id_pessoa BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(20) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
	cpf VARCHAR(20) NOT NULL UNIQUE,
    tipo VARCHAR(20) NOT NULL,
    genero VARCHAR(20) NOT NULL,
	situacao VARCHAR(20) NOT NULL
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

CREATE TABLE contato(
	id_contato BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(100) NOT NULL,
	celular VARCHAR(20) NOT NULL,
    telefone VARCHAR(20),
	fk_pessoa BIGINT(20) NOT NULL,
	CONSTRAINT fk_contato_pessoa FOREIGN KEY (fk_pessoa) REFERENCES pessoa(id_pessoa)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;