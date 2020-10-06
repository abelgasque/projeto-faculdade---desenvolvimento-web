import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastyService } from 'src/app/shared/components/toasty/toasty.service';
import { Pessoa } from 'src/app/util/model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  @Input() pessoa: Pessoa;
  @Output() retornoPersistencia = new EventEmitter<boolean>();
  @Input() isSituacao:boolean = false;
  @Input() isTipo:boolean = false;
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
  
  constructor(
    private pessoaService: PessoaService,
    private toastyService: ToastyService
  ) { }

  ngOnInit(): void {}

  cancelar(){
    this.retornoPersistencia.emit(true);
  }

  gerenciarPersistencia(f: NgForm){
    if(this.pessoa.id_pessoa > 0){
      this.alterar();
    }else{
      this.incluir();
    }
  }
  
  incluir(){
    this.pessoaService.incluir(this.pessoa)
    .then(response => {
      this.retornoPersistencia.emit(true);
      this.toastyService.showSuccess("Pessoa adicionada com sucesso!");
    })
    .catch(response => {
      console.log(response);
      this.toastyService.showError("Erro ao adicionar pessoa!");
    });
  }

  alterar(){
    this.pessoaService.alterar(this.pessoa.id_pessoa, this.pessoa)
    .then(response => {
      this.retornoPersistencia.emit(true);
      this.toastyService.showSuccess("Pessoa alterada com sucesso!");
    })
    .catch(response => {
      console.log(response);
      this.toastyService.showError("Erro ao alterar pessoa!");
    });
  }

}
