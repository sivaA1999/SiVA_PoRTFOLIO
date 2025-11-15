import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-chatly-assistant-page',
  templateUrl: './chatly-assistant-page.component.html',
  styleUrls: ['./chatly-assistant-page.component.css']
})
export class ChatlyAssistantPageComponent implements OnInit {

  // ⭐ INJECT MATSNACKBAR
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {}

  loginWithLinkedIn() {
  //   window.location.href = 'http://localhost:8000/auth/linkedin/login';

  // ⭐ IMPLEMENT MATSNACKBAR
    this.snackBar.open(
      'To view this feature\'s backend implementation, the full-stack version of this project needs to be built.', 
      'Got it!', // Action button text
      {
        duration: 5000, // Duration in milliseconds (5 seconds)
        verticalPosition: 'top', // Position the snackbar at the top
        horizontalPosition: 'center',
        panelClass: ['snackbar-info'] // Custom CSS class for styling
      }
    );
  }
}



