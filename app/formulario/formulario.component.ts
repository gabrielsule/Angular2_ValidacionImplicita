import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-form',
  templateUrl: 'app/formulario/formulario.component.html', 
  styleUrls: ['app/formulario/formulario.component.css']
})
export class FormularioComponent { 
  enviarFormulario(formulario:NgForm){
      console.log(formulario);
  }
}