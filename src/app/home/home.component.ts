import { Component } from '@angular/core';

@Component({
  selector: 'home-root',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class AppComponent {

    usuario = {nome: '', telefone: '', datanasc: ''};
  constructor() {}
}