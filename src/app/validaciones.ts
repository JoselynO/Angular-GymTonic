import { AbstractControl, ValidationErrors } from "@angular/forms";

export class Validaciones {

static validarIgualdadClaves(control: AbstractControl): ValidationErrors | null {
        return control.value === control.parent?.get('password')?.value ? null : {validarIgualdadClaves: true};  
    }
}
