import { Component, OnInit } from '@angular/core';
import { ToastyService } from '../shared/components/toasty/toasty.service';
import { PublicacoesService } from './publicacoes.service';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.css']
})
export class PublicacoesComponent implements OnInit {

  displaySpinner: boolean = false;
  publicacoes: any[] = [];

  constructor(
    private publicacoesService: PublicacoesService,
    private toastyService: ToastyService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  novaPublicacao() {

  }

  getPublicacao(id: string) {

  }

  getAll(){
    this.displaySpinner = true;
    this.publicacoes = [];
    this.publicacoesService.getAll()
    .then(response => {
      if(response != null){
        this.publicacoes = response;
      }
      this.displaySpinner = false;
    })
    .catch(error =>{
      console.log(error);
      this.toastyService.showError("Erro ao buscar pessoa");
      this.displaySpinner = false;
    });
  }
}
