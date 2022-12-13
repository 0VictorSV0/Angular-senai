import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formCliente: FormGroup;

  constructor ( private fb: FormBuilder ) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.formCliente = this.fb.group(
      {
        cliente_nome:[ ,Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(12)]) ],
        cliente_E_mail:[ , Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(25)]) ],
        cliente_senha:[ , Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(12)]) ]
      }
    )
  } 
  entrar() {
    let form = this.formCliente.value;
    console.log(form);
  }
  get cliente_nome() { return this.formCliente.get("cliente_nome");}
  get cliente_E_mail() { return this.formCliente.get("cliente_E_mail");}
  get cliente_senha() { return this.formCliente.get("cliente_senha");}
}
