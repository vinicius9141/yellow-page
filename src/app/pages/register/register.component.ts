import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterFormService } from 'src/app/services/register-form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public formRegister!: FormGroup;
  public allUsers: any;

  constructor(
    private formBuilder: FormBuilder,
    private registerFormService: RegisterFormService
  ) {}

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])],
      neighborhood: ['', Validators.compose([Validators.required])],
      number: ['', Validators.compose([Validators.required])],
      typeBussiness: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      description: [
        '',
        Validators.compose([Validators.required, Validators.minLength(10)]),
      ],
      approved: false,
    });
  }

  public sendForm() {
    this.registerFormService.saveRegisterFrom(this.formRegister.value);
    console.log('enviado');
    this.formRegister.reset();
  }
}
