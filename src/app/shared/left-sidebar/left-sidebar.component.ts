import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
// import { UserService } from '@/service/user.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {
  exitsUsers = false;
  user: any = {cover: ""};
  constructor(
    private _router: Router,
    private auth: AuthenticationService,
    // private userService: UserService
  ) { }

  ngOnInit() {
    this.exitsUsers = true;

    /*
    this.userService.getManager(localStorage.getItem('manager_id')).subscribe(
      (response) => {

        this.user = response.data.user;


      },
      (error) => {

        console.log(error)

      }
    )
    */
  }

  logout(){

    this.auth.logout();
    this._router.navigate(['iniciar-sesion']);
    setTimeout( function () { window.location.reload(); }, 100);
  
  }

}
