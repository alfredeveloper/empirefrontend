import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { UserService } from '../pages/services/user.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    public userService: UserService,
    public router: Router
  ) {}

  canActivate() {

    if ( this.userService.estaLogueado() ) {
      return true;
    } else {
      console.log( 'Bloqueado por guard' );
      this.router.navigate(['/iniciar-sesion']);
      return false;
    }

  }
}
