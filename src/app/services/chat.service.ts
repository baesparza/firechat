import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

import { Mensaje } from './../interface/Mensaje';

@Injectable()
export class ChatService {

  chats: FirebaseListObservable<any[]>;
  usuario: any = {};

  constructor(private _angularFireDatabase: AngularFireDatabase,
              private _angularFireAuth: AngularFireAuth) {

    if ( localStorage.getItem('usuario') ) {
      // usuario logeado
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.usuario = null;
    }
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
      mensaje: sms
    };

    return this.chats.push( mensajedata );

  }

  login( proveedor: string ) {

    let provider;

    if (proveedor === 'google') {
      provider = new firebase.auth.GoogleAuthProvider();
    } else if (proveedor === 'twitter') {
      provider = new firebase.auth.TwitterAuthProvider();
    }

    this._angularFireAuth.auth.signInWithPopup(provider)
        .then(data => {
          // console.log(data);
          this.usuario = data;
          localStorage.setItem('usuario', JSON.stringify(data));
        });
  }

  logout() {
    localStorage.removeItem('usuario');
    this.usuario = null;
    this._angularFireAuth.auth.signOut();
  }

}
