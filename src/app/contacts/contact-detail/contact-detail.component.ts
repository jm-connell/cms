import { Component } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-detail',
  standalone: true,
  imports: [],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css',
})
export class ContactDetailComponent {
  contact: Contact = {
    id: '1',
    name: 'Example Contact',
    email: 'contact@example.com',
    phone: '555-555-5555',
    imageUrl: 'https://via.placeholder.com/80',
    group: 'null',
  };
}
