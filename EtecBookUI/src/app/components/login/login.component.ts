import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: []
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      //Enviar dadods para API
      console.log(this.loginForm.value);
    }else {
      //Exibir uma mensagem
      this.validateAllFormField(this.loginForm);
    }
  }

  private validateAllFormField(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field =>{
      const control = formGroup.get(field);
      if (control instanceof FormControl){
        control.markAsDirty({onlySelf: true});
      }else if (control instanceof FormGroup){
        this.validateAllFormField(control)
      }
    });
  }



}
