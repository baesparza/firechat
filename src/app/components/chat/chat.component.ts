import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit {

  mensaje_form: FormGroup;

  constructor() {
    this.mensaje_form = new FormGroup({
      mensaje: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  enviar() {

    if (this.mensaje_form.valid) {
      console.log('Enviando...');
    }
    console.log(this.mensaje_form.value);
    console.log(this.mensaje_form);
    console.log(this.mensaje_form.valid);
  }

}
