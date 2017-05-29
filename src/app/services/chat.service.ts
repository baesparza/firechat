import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Mensaje } from './../interface/Mensaje';

@Injectable()
export class ChatService {

  chats: FirebaseListObservable<any[]>;

  constructor(private _angularFireDatabase: AngularFireDatabase) {

    // this.chats = _angularFireDatabase.list('/chats');
  }

  cargatdata() {

    this.chats = this._angularFireDatabase.list('chats',{
      query: {
        limitToLast: 20,
        orderByKey: true
      }
    });

    return this.chats;

  }

  agregarmensaje(sms: string) {

    // let mensajedata: Mensaje = {
    let mensajedata = {
      nombre: 'Bruno',
      mensajes: sms
    };

    return this.chats.push( mensajedata );

  }

}
