import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-proceso-pago',
  templateUrl: './proceso-pago.component.html',
  styleUrls: ['./proceso-pago.component.css']
})
export class ProcesoPagoComponent implements OnInit {
  faCheckCircle=faCheckCircle;

  FormularioPago= new FormGroup({
    destino: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    referencia: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    telefono: new FormControl('',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    nombre: new FormControl('',[Validators.required, Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*')]),
    apellido: new FormControl('',[Validators.required, Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*')]),
    numeroTargeta: new FormControl('',[Validators.required, Validators.maxLength(15), Validators.minLength(15), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    codigoSeguridad: new FormControl('',[Validators.required, Validators.maxLength(4), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    expiracion: new FormControl('',[Validators.required]),
  });

  constructor(private OrdenExitosa:NgbModal) {}

  ngOnInit(): void {
  }

  get destino(){
    return this.FormularioPago.get('destino');
  }
  get referencia (){
    return this.FormularioPago.get('referencia');
  }
  get telefono(){
    return this.FormularioPago.get('telefono');
  }
  get nombre(){
    return this.FormularioPago.get('nombre');
  }
  get apellido(){
    return this.FormularioPago.get('apellido');
  }
  get numeroTargeta(){
    return this.FormularioPago.get('numeroTargeta');
  }
  get codigoSeguridad(){
    return this.FormularioPago.get('codigoSeguridad')
  }
  get expiracion(){
    return this.FormularioPago.get('expiracion');
  }

 exito(idmodal:any){
   this.OrdenExitosa.open(idmodal,
    {
      size:'xs',
      centered:true,
   })

 }

}
