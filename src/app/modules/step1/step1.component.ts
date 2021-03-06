import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../core/models/user-model';
import { ValidatorNonSpecialAndNumberCharacters } from '../../core/utils/utils';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {
  @Output() user = new EventEmitter<User>();

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, ValidatorNonSpecialAndNumberCharacters]),
    lastname: new FormControl('', [Validators.required, ValidatorNonSpecialAndNumberCharacters])
  });
  constructor() { }

  ngOnInit(): void {  }

  onContinue() {
    this.user.emit(this.userForm.value);
  }

  checkContinueIsDisabled() {
    return this.userForm.invalid;
  }
}
