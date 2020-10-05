import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtos: any[] = [];
  produto;
  displayForm: boolean = false;

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
    console.log(id);
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
