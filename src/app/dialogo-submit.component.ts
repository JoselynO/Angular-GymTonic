import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  template: `
   <div style="white-space: pre-line;">
    <h1>{{ data.titulo }}</h1>
    <p>{{ data.mensaje }}</p>
  </div>
  `,
})
export class DialogoSubmitComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}