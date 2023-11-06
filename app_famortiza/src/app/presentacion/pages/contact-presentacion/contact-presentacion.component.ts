import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-presentacion',
  templateUrl: './contact-presentacion.component.html',
  styleUrls: ['./contact-presentacion.component.css']
})
export class ContactPresentacionComponent {
  items: any;
  checkoutForm: any;
  constructor(
        private formBuilder: FormBuilder ) 
  {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = [{ Id: 1, name: 'Diego', address: 'Izamba', price:25.25 }]
  }
  onSubmit(row: any) {
    // Process checkout data here
    this.items = []
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', row);
  }

}
