import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
nameForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.nameForm = new FormGroup({
    firstname: new FormControl('',{
      validators:Validators.required,
      updateOn:'change'

    }),
    lastname: new FormControl('',{
      validators:Validators.required,
      updateOn:'change'

    })
  });

}
}

