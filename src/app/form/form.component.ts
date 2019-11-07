import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email: [''],
    message: ['']
    })

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }

  onSubmit() {
    alert("Thank you for sending the message. Somebody will contact you shortly.")
  }

}