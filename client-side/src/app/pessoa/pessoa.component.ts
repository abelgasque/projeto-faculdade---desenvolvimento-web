import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
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

  constructor(
    private pessoaService: PessoaService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getRetornoFormPessoa(retorno: boolean){
    if(retorno == true){
      this.displayForm = false;
      this.getAll();
    }
  }
  
  novaPessoa(){
    this.pessoa = new Pessoa();
    this.titleDisplay = "Adicionar";
    this.displayForm = true;
  }

  getPessoa(id: number){
    this.titleDisplay = "Edição de";
    this.getById(id);
  }

  getById(id: number){
    this.pessoaService.getById(id)
    .then(response => {
      if(response != []){
        console.log(response[0]);
        this.pessoa = response[0];
        this.displayForm = true;
      }
    })
    .catch(response => {
      console.log(response);
    });
  }

  getAll(){
    this.pessoas = [];
    this.pessoaService.getAll()
    .then(response => {
      if(response.length>0){
        this.pessoas = response;
      }
    })
    .catch(error =>{
      console.log(error);
    });
  }

  confirmarExclusao(id: number){
    this.confirmationService.confirm({message: 'Tem certeza que deseja excluir pessoa?',
    accept: ()=>{

    }});
  }
}
