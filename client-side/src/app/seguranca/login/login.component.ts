import { Component, OnInit } from '@angular/core';

export class Usuario{
  email: string;
  senha: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();


  constructor() { }

  ngOnInit(): void {
  }

  validar(){
    
  }
}
