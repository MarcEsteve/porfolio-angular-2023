import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor( private htpp:HttpClient ) {
    console.log('Servicio de infoPagina listo');
   }
}