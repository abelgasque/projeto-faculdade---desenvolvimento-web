export class Pessoa{
    id_pessoa: number = 0;
    img_pessoa: string = "foto-usuario-010.jpg";
    img_fundo: string;
    nome: string;
    sobrenome: string;
	cpf: string;
    genero: string;
    tipo_pessoa: string = "CLIENTE";
    email: string;
	celular: string;
    telefone: string;
	situacao_pessoa: string = "INATIVO";
    senha: string;
    cep: string;
    uf: string;
    cidade: string;
    bairro: string;
	logradouro: string;
    complemento: string;
	numero: string;
}

export class Publicacao{
    id_publicacao: number;
    img_publicacao: string;
    titulo: string;
    descricao: string;
    tipo: string;
    dt_publicacao: Date;
    situacao_publicacao: string = "ATIVO";
    fk_pessoa: string;
}