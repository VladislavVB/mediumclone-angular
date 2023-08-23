import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { registerAction } from 'src/app/auth/store/actions/register.action'
import { IRegisterRequest } from 'src/app/auth/types/registerRequest.interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private store: Store) {}
  form = new FormGroup({
    username: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>(''),
  })

  onSubmit() {
    this.store.dispatch(registerAction(this.form.value as IRegisterRequest))
  }

  ngOnInit(): void {
    console.log(this.form.value)
  }
}
