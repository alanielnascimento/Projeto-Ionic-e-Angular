import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../model/usuarios';
import { IUsuario } from '../interfaces/iusuario';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  endpoint = 'http://localhost:3000/usuarios';

  constructor(public http: HttpClient) { }

  public getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.endpoint);
  }

  criar(usuario: any){
    return this.http.post(this.endpoint, usuario);
  }

  public addUsuario(user: Usuarios): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'applicatin/json' })
    };
    return this.http.post(this.endpoint, JSON.stringify(user), httpOptions);
  }

  deleteUsuario(id: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'applicatin/json' })
    };
    return this.http.delete(this.endpoint + "/" + id);
  }

  updateUsuario(id: number,usuario: Usuarios): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'applicatin/json' })
    };
    return this.http.put(this.endpoint+"/"+id, JSON.stringify(usuario), httpOptions);
  }

  atualizar(usuario: any){
    return this.http.put(this.endpoint, usuario.id);
  }




}
