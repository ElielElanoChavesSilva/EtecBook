import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5)])]
    });
  }


  onSubmit() {
    if (this.registerForm.valid) {
      //Enviar dadods para API
      console.log(this.registerForm.value);
    }else {
      //Exibir uma mensagem de erro
    }
  }
}
