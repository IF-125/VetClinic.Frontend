import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/authentication/authentication.service";


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  implements OnInit{
  
  isUserLoggedIn = false;
  isAdmin = false;

  constructor(private _authService: AuthenticationService) { }

  ngOnInit(): void {

    let storeData = localStorage.getItem("isUserLoggedIn");
    if( storeData != null && storeData == "true")
         this.isUserLoggedIn = true;
      else
         this.isUserLoggedIn = false;

    this.isAdmin = this._authService.CheckAdmin();
  }

  public logout = () => {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn'); 
    this._authService.logout('account/Logout').subscribe(
      _ =>{
        console.log("Successfully log out!")
      },
      error => {
        console.log(error.error.errors);
      })
  }
    displayPopup:boolean=false;
    displaySignup:boolean=true;
    displayLogin:boolean=false;
    togglePopup(){
        this.displayPopup=!this.displayPopup;
    }
    showSignup(){
        this.displaySignup=true;
        this.displayLogin=false;
    }
    showLogin(){
        this.displaySignup=false;
        this.displayLogin=true;
    }
}