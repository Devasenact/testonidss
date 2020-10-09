import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsService } from '../forms.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public emailid: any;
    public password;
    public obj = {
        'Email': "",
        'Password': ""
    }
    // Main object of the Credinatial Details
    public loginMemberDetails = [];

    constructor(public router: Router, public Forms: FormsService) {
    }

    logIn() {        
        /* Login Member Details condition Start check the main object*/
        if (this.emailid && this.password) {
            for (let i = 0; i < this.Forms.loginMemberDetails.length; i++) {
                if (this.Forms.loginMemberDetails[i].Email == this.emailid && this.Forms.
                    loginMemberDetails[i].Password == this.password) {                   
                    this.router.navigateByUrl('success');
                    return false;
                } else {
                    window.alert('Login Unsuccessfull');
                    return false;
                }
            }
        }        
    }
    
    // For Signup Object
    signUp() {
        this.router.navigateByUrl('registration');
    }
}



