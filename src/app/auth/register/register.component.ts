import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router,RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormGroupDirective, FormsModule, ReactiveFormsModule,FormGroup } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { NgForm, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone:true,
  imports: [MatButtonModule, CommonModule, MatDialogModule, MatFormFieldModule, FormsModule, ReactiveFormsModule,  MatInputModule, MatDialogTitle, MatDialogContent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup
  constructor(public dialog: MatDialog){}
  // button click function to open dailog with form
  openDialog() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog,
      {
        height: '500px',
        width: '900px',
      });
    
    }
  }
  /** Error when invalid control is dirty, touched, or submitted. */
  export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    //condition true
    const isSubmitted = form && form.submitted;
    //false
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
//Dialog Component
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['register.component.css'],
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatDialogModule, MatFormFieldModule, FormsModule, ReactiveFormsModule,  MatInputModule, MatDialogTitle, MatDialogContent],
})
export class DialogOverviewExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialog>) {}
  //Dialog close function 
  onNoClick(): void {
    this.dialogRef.close();
  }
  
}




