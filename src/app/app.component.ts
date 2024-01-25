import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  telefonoRegex = /^[6-9][0-9]{8}$/;
  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$/;
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    nombre:  ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
    direccion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
    telefono: ['', [Validators.required, Validators.pattern(this.telefonoRegex)]],
    email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
    password: ['', [Validators.required, Validators.pattern(this.passwordRegex)]],
    repetirPassword: ['', [Validators.required]]
  });

  submit(){}

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
    base: ['', [Validators.required]],
    clases: ['', [Validators.required]],
    aceptarC: ['',[Validators.requiredTrue]]
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder){}
}
