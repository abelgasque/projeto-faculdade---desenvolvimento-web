import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/produto/produto.service';

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
  menu: any[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.getcategorias();
  }

  getcategorias() {
    this.produtoService.getAllCategorias()
      .then(responseCategoria => {
        for (let i = 0; i < responseCategoria.length; i++) {
          let categoriaDTO = new CategoriaDTO();
          categoriaDTO.categoria = responseCategoria[i];
          this.produtoService.getSubcategoriasByIdCategoria(responseCategoria[i].id_categoria)
            .then((response: any[]) => {
              categoriaDTO.subcategorias = response;
            })
            .catch(response => {
              console.log(response);
            });
            this.menu.push(categoriaDTO);
        }
      })
      .catch(response => {
        console.log(response);
      });
  }

}
