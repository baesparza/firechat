import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatService } from './../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje_form: FormGroup;

  constructor( public _chatService: ChatService ) {
    this.mensaje_form = new FormGroup({
      mensaje: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  enviar() {

    if (this.mensaje_form.valid) {
      this._chatService.agregarmensaje(this.mensaje_form.value)
          .then(() => console.log('Enviando...'))
          .catch((error) => console.error(error));
    }
    console.log(this.mensaje_form.value);
    console.log(this.mensaje_form);
    console.log(this.mensaje_form.valid);
  }

}
