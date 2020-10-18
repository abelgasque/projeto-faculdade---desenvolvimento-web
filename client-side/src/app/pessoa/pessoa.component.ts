import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { ToastyService } from '../shared/components/toasty/toasty.service';
import { Pessoa } from '../util/model';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoas: any[] = [];
  displayForm: boolean = false;
  titleDisplay: string;
  pessoa = new Pessoa();
  displaySpinner: boolean = false;

  //pessoa
  tipos = [
    { label: 'Selecione', value: null },
    { label: 'Administrador', value: 'ADMINISTRADOR' },
    { label: 'Funcionário', value: 'FUNCIONARIO' },
    { label: 'Cliente', value: 'CLIENTE' },
  ];
  generos = [
    { label: 'Selecione', value: null },
    { label: 'Masculino', value: 'MASCULINO' },
    { label: 'Feminino', value: 'FEMININO' }
  ];
  situacoes = [
    { label: 'Ativo', value: 'ATIVO' },
    { label: 'Inativo', value: 'INATIVO' }
  ];
  enderecos: any[] = [];
  images = [
    { title: 'foto-usuario-001.jpg' },
    { title: 'foto-usuario-002.jpg' },
    { title: 'foto-usuario-003.jpg' },
    { title: 'foto-usuario-004.jpg' },
    { title: 'foto-usuario-005.jpg' },
    { title: 'foto-usuario-006.jpg' },
    { title: 'foto-usuario-007.jpg' },
    { title: 'foto-usuario-008.jpg' },
    { title: 'foto-usuario-009.jpg' },
    { title: 'foto-usuario-010.jpg' },
  ];
  displayImages: boolean = false;
  imagemSelecionada: any;
  pathImgPessoaPerfil= "./../../../assets/img/pessoas_perfil/";

  constructor(
    private pessoaService: PessoaService,
    private confirmationService: ConfirmationService,
    private toastyService: ToastyService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getRetornoFormPessoa(retorno: boolean) {
    if (retorno == true) {
      this.displayForm = false;
      this.getAll();
    }
  }

  novaPessoa() {
    this.pessoa = new Pessoa();
    this.titleDisplay = "Adicionar";
    this.displayForm = true;
  }

  getPessoa(id: number) {
    this.titleDisplay = "Edição de";
    this.getById(id);
  }

  getById(id: number) {
    this.displaySpinner = true;
    this.pessoaService.getById(id)
      .then(response => {
        if (response != []) {
          this.pessoa = response[0];
          this.displayForm = true;
        }
        this.displaySpinner = false;
      })
      .catch(response => {
        console.log(response);
        this.toastyService.showError("Erro ao buscar pessoa");
        this.displaySpinner = false;
      });
  }

  getAll() {
    this.displaySpinner = true;
    this.pessoas = [];
    this.pessoaService.getAll()
      .then(response => {
        if (response != null) {
          this.pessoas = response;
        }
        this.displaySpinner = false;
      })
      .catch(error => {
        console.log(error);
        this.toastyService.showError("Erro ao buscar pessoa");
        this.displaySpinner = false;
      });
  }

  confirmarExclusao(id: number) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir pessoa?',
      accept: () => {

      }
    });
  }
}
