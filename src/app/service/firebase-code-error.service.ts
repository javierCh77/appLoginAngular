import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';


@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }
  
  codeError(code: string) {
    switch (code) {
    
    // El correo ya existe 
      case FirebaseCodeErrorEnum.EmailAlReadyInUse:
        return 'El usuario ya existe';  
    // la contraseña es debil    
      case FirebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy debil';
 
    // correo invalido
      case FirebaseCodeErrorEnum.EmailAlReadyInUse:
        return 'Correo invalido';
    //contraseña incorrecta    
    case FirebaseCodeErrorEnum.WrongPassword:
      return 'Contraseña incorrecta';  
      // usuario no existe
      case FirebaseCodeErrorEnum.UserNotFound:
        return 'El usuario no existe';
      
      default:
        return 'Error Desconocido';
    }
}
}