import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
  }

  registerForm : FormGroup = this.fb.group({
    name: ['',[Validators.required]],
    username: ['',[Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordconfirm: ['',[Validators.required]]
  })

  onRegister(){
    if (!this.registerForm.valid) {
      return;
    }
    console.log(this.registerForm.value);
  }

}
