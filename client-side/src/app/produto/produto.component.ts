import { Component, OnInit } from '@angular/core';
import { Produto } from '../util/model';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: any[] = [];
  produto = new Produto();
  displayForm: boolean = true;

  constructor(
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  novo(){
    this.displayForm = true;
  }

  getProduto(id: number){
    this.displayForm = true;
  }

  getAll(){
    this.produtoService.getAll()
    .then(resp=>{
      if(resp.length>0){
        this.produtos = resp;
      }
    })
    .catch(resp=>{
      console.log(resp);
    })
  }
}
