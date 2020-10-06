export class Pessoa{
    id_pessoa: number = 0;
    nome: string;
    sobrenome: string;
	cpf: string;
    genero: string;
    tipo: string = "CLIENTE";
    email: string;
	celular: string;
    telefone: string;
	situacao: string = "INATIVO";
    senha: string;
}

export class Endereco{
    id_endereco: number;
    cep: string;
    uf: string;
    cidade: string;
    bairro: string;
	logradouro: string;
    complemento: string;
	numero: string;
    observacao: string;
    fk_pessoa: number;
}

export class Categoria{
    id_categoria: number;
    nm: string;
    de: string;
}

export class Subcategoria{
    id_subcategoria: number;
    nm: string;
    fk_categoria: number;
}

export class Produto{
    id_produto: number;
    nm: string;
    vl: number;
    genero: string;
    situacao: string = "ATIVO";
    qtd: number;
    de: string;
    tamanho: string;
    cor: string;
    dt_atribuicao: Date = new Date();
    fk_subcategoria: number;
}