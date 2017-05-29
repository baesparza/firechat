import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Mensaje } from './../interface/Mensaje';

@Injectable()
export class ChatService {

  chats: FirebaseListObservable<any[]>;

  constructor(private _angularFireDatabase: AngularFireDatabase) {

    // this.chats = _angularFireDatabase.list('/chats');
  }

  agregarmensaje(sms: string) {

    let mensajedata = {
      nombre: 'Bruno',
      mensaje: sms
    };

    return this.chats.push( mensajedata );

  }

}
