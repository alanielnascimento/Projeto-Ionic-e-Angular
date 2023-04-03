import { Component, HostListener, OnInit } from '@angular/core';
import { AngularDelegate } from '@ionic/angular';
import { HomeService } from './home.service';
import { Usuarios } from '../model/usuarios';
import { response } from 'express';
import { Observable } from 'rxjs';
import { IUsuario } from '../interfaces/iusuario';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  //user = { nome: '', telefone: '', datanasc: '' };

  // newUsuario: IUsuario = {
  //   avatar: '',
  //   nome: '',
  //   telefone: 83912345678,
  //   datanasc: ''
  // }

  usuarios = new Array<Usuarios>();
  usuario: any;
  serv: HomeService;

  constructor(service: HomeService) {
    this.serv = service;
    service.getUsuarios().subscribe((response) => (this.usuarios = response));
  }

  ngOnInit() {
    this.usuario = {};
  }

  @HostListener('document:ionBackButton', ['$event'])
  overrideHardwareBackAction(event: any) {
    event.detail.register(100, async () => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    });
  }

  onClickPost() {
    let proximoId = this.usuarios.length+1;
    let usuario = new Usuarios(proximoId, '', 0, '', '');
    this.serv.criar(this.usuario).subscribe(response=>{
      this.usuario.push(response);
      this.serv.getUsuarios().subscribe(response => (this.usuarios = response));
    });
  }

  onClickDelete() {
    let id = this.usuarios.length;

    this.serv.deleteUsuario(id).subscribe(response => {
      this.serv.getUsuarios().subscribe(response => (this.usuarios = response));
    });
  }

  onClickAtualizar(){
    let id = this.usuarios.length-1;
    let usuario = new Usuarios(id, this.usuario.nome, this.usuario.telefone, this.usuario.datanasc, this.usuario.avatar);
    this.serv.atualizar(this.usuario).subscribe(response=>{
      this.usuario.push(response);
      this.serv.getUsuarios().subscribe(response => (this.usuarios = response));
    });
  }

 







}
