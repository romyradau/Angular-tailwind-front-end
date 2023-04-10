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
        // Validators.minLength(3)
        //is now in the <> file
        //but normally all validation rules will be stored in a class ;)
      ]),
      email: new FormControl(''),
      age: new FormControl(''),
      pw: new FormControl(''),
      pwconfirm: new FormControl(''),
      phone: new FormControl('')

    })
    //retrieve info from the form and controll it

    constructor(){
      this.registerForm.controls.name
    }
}
