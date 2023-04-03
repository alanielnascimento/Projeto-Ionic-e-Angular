export class Usuarios {

    id: number;
    nome: string;
    telefone: number;
    datanasc: string;
    avatar: string;

    constructor(id: number, nome: string, telefone: number, datanasc: string, avatar: string,) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.datanasc = datanasc;
        this.avatar = avatar;
    }

}