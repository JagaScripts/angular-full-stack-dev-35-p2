import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Correo } from './correo/correo.modelo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-full-stack-dev-u35-2';

  formReactive: FormGroup;
  correos: Correo[] = [];
  correo: Correo = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  preguntasecreta: string = '';

  constructor(private formBuilder: FormBuilder){
    this.formReactive = this.formBuilder.group({
      nombre: ['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required],
      preguntasecreta: ['', Validators.required],
    });
  }

  enviarCorreo() {

    if(this.formReactive.valid){

      let auxCorreo = new Correo(this.correo.nombre,this.correo.email,this.correo.mensaje);

      this.correos.push(auxCorreo);

      this.onResetForm();

    }

  }

  onResetForm() {
    this.formReactive.reset();
  }

  getValue(value: string) {

    return this.formReactive.get(value); //retorna todo el control
  }

  validarPreguntaSecreta() {
    if (this.preguntasecreta === '5') {
      return true;
    } else {
      return false;
    }
  }
}
