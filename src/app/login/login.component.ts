import { Component, OnInit, ViewChild } from '@angular/core'; 
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router'; 
 
@Component({ 
    selector: 'app-login', 
    templateUrl: './login.component.html', 
    styleUrls: ['./login.component.css'] 
}) 
export class LoginComponent implements OnInit { 
 
    constructor(private router: Router) { } 
 
    ngOnInit(): void { 
    } 
 
    @ViewChild('alert') alert: any; 
 
    public loginError = 'Fill All Required Fields'; 
 
    login(loginForm: NgForm): void  { 
        if (loginForm.valid) { 
            console.log(loginForm.value, loginForm.valid); 
            this.router.navigate(['administration/dashboard']); 
        } 
        else { 
            this.alert.nativeElement.classList.remove('hidden'); 
            this.loginError; 
        } 
    } 
 
    closeAlert(): void  { 
        this.alert.nativeElement.classList.add('hidden'); 
    } 
 
} 
