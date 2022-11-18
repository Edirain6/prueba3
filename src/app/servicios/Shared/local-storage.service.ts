import { Injectable } from '@angular/core';
import { DatosSesionModel } from 'src/app/Modelos/datos-sesion.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  GuardarDatosSesion(datos:DatosSesionModel){
    let datosActuales = localStorage.getItem("datossesion");
    if (datosActuales) {
      return false;
    } else {
      let datosSesionString=JSON.stringify(datos);
      localStorage.setItem("datossesion",datosSesionString);
      return true;
    }
  }

  EliminarDatosSesion(){
    let datosActuales=localStorage.getItem("datossesion");
    if (datosActuales) {
      localStorage.removeItem("datossesion");
      return true;
    } else {
      return false;
    }
  }

  ObtenerToken():string{
    let datosActuales= localStorage.getItem("datossesion");
    if (datosActuales) {
      let datosSesionJSON=JSON.parse(datosActuales);
      return datosSesionJSON.tk;
    } else {
      return "";
    }
  }
}
