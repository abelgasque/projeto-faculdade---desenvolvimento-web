export class Pessoa{
    id_pessoa: number;
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