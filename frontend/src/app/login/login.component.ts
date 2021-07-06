import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth.service';
import { AuthenticationService } from '../shared/services/authentication.service';
import { JarwisService } from '../shared/services/jarwis.service';
import { TokenService } from '../shared/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  redirectUrl: string;
  submitted = false;
  userEmails = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6)]),
    }); 

    error:any;
  users: any[];
    constructor(private formBuilder: FormBuilder,
      private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    private authservice: AuthenticationService,
    //private snackBar: MatSnackBar
    ) { }

    ngOnInit() {
      
    }

  onSubmit() {
    this.submitted =true;
    //console.log(this.userEmails.value);
    this.authservice.login(this.userEmails.value.email, this.userEmails.value.password)
    .pipe(
      tap(user => {
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        //console.log(JSON.parse(localStorage.getItem('currentUser')));
        this.authservice.getUserByEmail(user,this.userEmails.value.email)
        .pipe(
          tap(user => {
            //console.log(user);
            this.users = user['records'];
            console.log(this.users);
            this.users.forEach(x=>{
              //console.log(x);
              if(x.email == this.userEmails.value.email)
              localStorage.setItem('user', JSON.stringify(x));
              this.router.navigate(['/home']);
            })
          //
          }),
          catchError(error => {
            console.log('Caught in CatchError. Returning 0',error);
            return error;     //return from(['A','B','C'])
          })
        ).subscribe();
      //this.router.navigate(['/']);
      }),
      catchError(error => {
        console.log('Caught in CatchError. Returning 0',error);
        return error;     //return from(['A','B','C'])
      })
    ).subscribe();
    /*.subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );*/
  }
  /*
  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
*/
  handleResponse(data) {
    this.Token.handle(data);
    console.log(data.user);
    localStorage.setItem('user', JSON.stringify(data));
    this.Auth.changeAuthStatus(true);
    if(data.user.role == 'admin')
      this.router.navigateByUrl('/dashboard');
    if(data.user.role == 'patient')
      this.router.navigateByUrl('/home');
  }

  handleError(error) {
    this.error = error.error.error;
    console.log(error);
  }


}
