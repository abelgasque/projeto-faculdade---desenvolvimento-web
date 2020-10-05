import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/produto/produto.service';
import { TreeNode } from 'primeng/api';

export class CategoriaDTO {
  categoria: any;
  subcategorias: any[] = [];
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  displaySidebar: boolean = false;
  menu: TreeNode[] = [];
  constructor(private produtoService: ProdutoService) {
    this.getcategorias();
  }

  ngOnInit(): void {}

  getcategorias() {
    let lista = [];
    this.produtoService.getAllCategorias()
      .then(responseCategoria => {
        for (let i = 0; i < responseCategoria.length; i++) {
          let dataCategoria = {
            'data': {
              'name': responseCategoria[i].nm
            },
            'children': [],
            'leaf': true,
            'expanded': false
          };
          this.produtoService.getSubcategoriasByIdCategoria(responseCategoria[i].id_categoria)
            .then((responseSub: any[]) => {
              let listaSub: any[] = [];
              for (let j = 0; j < responseSub.length; j++) {
                let dataSub = {
                  'data': {
                    'name': '- '+responseSub[j].nm
                  }
                }
                listaSub.push(dataSub);
              }
              dataCategoria.children = listaSub;
            })
            .catch(response => {
              console.log(response);
            });
          lista.push(dataCategoria);
        }
        this.menu = lista;
      })
      .catch(response => {
        console.log(response);
      });
  }

}
