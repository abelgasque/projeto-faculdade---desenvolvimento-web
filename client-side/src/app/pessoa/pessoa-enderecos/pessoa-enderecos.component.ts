import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/util/model';

@Component({
  selector: 'app-pessoa-enderecos',
  templateUrl: './pessoa-enderecos.component.html',
  styleUrls: ['./pessoa-enderecos.component.css']
})
export class PessoaEnderecosComponent implements OnInit {

  pessoa = new Pessoa();
  enderecos: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
