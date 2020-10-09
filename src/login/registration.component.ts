import { Component } from '@angular/core';
import { FormsService } from '../forms.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
    firstName: string;
    lastName: string;
    emailid: string;
    password: any;
    confirmpassword: any;
    phone: number;
    myRadio: any;
    address: any;
    emailFlag: boolean;
    mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
    isValidFormSubmitted = false;
    public loginMemberDetails = [];
    public loginMember = {}
    public loginDetails = {'name': '','email': ''};

    constructor(public Form: FormsService, public router: Router) {
        document.getElementById("login").style.display = 'none';
    }
    
    // For Email Validation
    emailvalidation() {
        this.emailFlag = false;
        if (this.emailid) {
            this.emailFlag = true;
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!filter.test(this.emailid)) {
                document.getElementById("txtEmail").style.color = "red";
            } else {
                this.emailFlag = false;
                document.getElementById("txtEmail").style.color = "gray";
            }
        }
    }

    // For Password and Confirm Password validation
    validatePassword() {
        if (this.password != this.confirmpassword) {
            console.log("Passwords Don't Match");
            document.getElementById("cfrmPass").style.color = "red";
        } else {
            console.log("Passwords Match");
            document.getElementById("cfrmPass").style.color = "gray";
        }
    }
    // For Phone Number Validation
    isNumberKey(event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }
     // For collect the submit Form details and stored into Main Object
    submitForm(page) {
        this.loginMember = {
            'email': this.firstName,
            'password': this.password
        };
         let obj: any = {};
        obj = { 'Email': this.emailid, 'Password': this.password }
        let forms_details: any = {
            'firstName': '',
            'lastName': '',
            'emailid': '',
            'password': '',
            'confirmpassword': '',
            'phone': '',
            'myRadio': '',
            'address': '',
            'emailFlag': '',
            'mobNumberPattern': ''
        };
        forms_details = {
            'firstName': this.firstName,
            'lastName': this.lastName,
            'emailid': this.emailid,
            'password': this.password,
            'confirmpassword': this.confirmpassword,
            'phone': this.phone,
            'myRadio': this.myRadio,
            'address': this.address,
            'emailFlag': this.emailFlag,
            'mobNumberPattern': this.mobNumberPattern
        }
        this.Form.loginMemberDetails.unshift(obj);
        this.Form.form_fulldetails.unshift(forms_details);
        this.router.navigateByUrl('login');  // Navigate to routing page
    }
}

