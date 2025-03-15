import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports:[FormsModule, CommonModule]
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    if (this.contactData.name && this.contactData.email && this.contactData.message) {
      alert('Message sent successfully!');
      // Here you can integrate an API to send form data to your email or database
      this.contactData = { name: '', email: '', message: '' }; // Reset form after submission
    }
  }
}
