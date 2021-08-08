import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
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