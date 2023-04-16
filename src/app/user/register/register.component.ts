import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  //video 108 maybe change this all how he did it...?
    registerForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)

      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
<<<<<<< HEAD
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.min(18),
        Validators.max(120)
      ]),
      pw: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
      ]),
      pwconfirm: new FormControl('', [
        Validators.required
      ]),
=======
      ]),
      age: new FormControl('', [
        Validators.required,
        Validators.min(18),
        Validators.max(120)
      ]),
      pw: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
      ]),
      pwconfirm: new FormControl('', [
        Validators.required
      ]),
>>>>>>> 88bbf33a747ac1168b005112ed0164d73d3b1e99
      phone: new FormControl('', [
        Validators.required,
        Validators.min(13),
        Validators.max(13)
      ])

    })
    //retrieve info from the form and controll it

<<<<<<< HEAD
    showAlert = false
    alertMsg = 'Please wait! Your account is being created.'
    alertColor = 'blue'

    register(){
      this.showAlert = true
      this.alertMsg = 'Please wait! Your account is being created.'
      this.alertColor = 'blue'
    }
    //this update renders the component above the form
=======
    register(){
      console.log('register called')
    }
>>>>>>> 88bbf33a747ac1168b005112ed0164d73d3b1e99

    constructor(){
      this.registerForm.controls.name
    }
}
