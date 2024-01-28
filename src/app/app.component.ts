import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Validaciones } from './validaciones';
import { MatDialog } from '@angular/material/dialog';
import { DialogoSubmitComponent } from './dialogo-submit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  telefonoRegex = /^[6-9][0-9]{8}$/;
  passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,12}$/;
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  firstFormGroup = this._formBuilder.group({
    nombre:  ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
    direccion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
    telefono: ['', [Validators.required, Validators.pattern(this.telefonoRegex)]],
    email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
    password: ['', [Validators.required, Validators.pattern(this.passwordRegex)]],
    repetirPassword: ['', [Validators.required, Validaciones.validarIgualdadClaves]]
  });

  secondFormGroup = this._formBuilder.group({
    clases: ['', [Validators.required]],
    base: ['', [Validators.required]],
    aceptarC: ['',[Validators.requiredTrue]]
  });
  isLinear = false;

  submit() {
    if (this.firstFormGroup.valid && this.secondFormGroup.valid) {
      this.mostrarDialogoExito();
    } else {
      this.mostrarDialogoError();
    }
  }

  private mostrarDialogoExito() {
    const dialogRef = this.dialog.open(DialogoSubmitComponent, {
      data: {
        titulo: 'GYM TONIC CLUB',
        mensaje: `
          Nombre: ${this.firstFormGroup.value.nombre}\n
          Dirección: ${this.firstFormGroup.value.direccion}\n 
          Teléfono: ${this.firstFormGroup.value.telefono}\n
          Email: ${this.firstFormGroup.value.email}\n
          Clases: ${this.secondFormGroup.value.clases}\n
          Sexo: ${this.secondFormGroup.value.base}
        `
      }
    });
  }

  private mostrarDialogoError() {
    const dialogRef = this.dialog.open(DialogoSubmitComponent, {
      data: {
        titulo: 'La inscripción no es válida',
        mensaje: 'No se pudo llevar a cabo el registro.\nAlgunos campos del formulario son inválidos o incompletos.'
      }
    });
  }

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog){}
}
