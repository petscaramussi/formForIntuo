import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateValidator } from './validators/dateValidator';
import { GenericValidator } from './validators/cpfValidator';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{

  registerForm: FormGroup;

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      dataNasc: new FormControl('', [Validators.required, DateValidator.ptDate]),
      cpf: new FormControl('', [Validators.required, GenericValidator.isValidCpf()]),
      endereco: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      }
    )
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  openDialog() {
    this.matDialog.open(DialogBodyComponent,{
      data: this.registerForm.value,
      width: '500px',
    })
  }

  
}
