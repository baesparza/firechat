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

    this._chatService.cargatdata()
      .subscribe(() => {
        console.log('Mensajes Cargados')
      });
  }

  ngOnInit() {
  }

  enviar() {

    if (this.mensaje_form.valid) {
      this._chatService.agregarmensaje(this.mensaje_form.value.mensaje)
          .then(() => console.log('Enviado.'))
          .catch((error) => console.error(error));
    }

    this.mensaje_form.reset();
  }

}
