import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BooksService } from '../service/books.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-book-add-edit',
  templateUrl: './book-add-edit.component.html',
  styleUrl: './book-add-edit.component.css'
})
export class BookAddEditComponent implements OnInit {

  bookForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _bookService: BooksService,
    private _dialogRef: MatDialogRef<BookAddEditComponent>,
    private _coreService: CoreService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.bookForm = this._fb.group({
      title: '',
      author: '',
      isbn: '',
      available: false
    });
  }

  ngOnInit(): void {
    if(this.data) {
      this.bookForm.patchValue(this.data);
    }
  }

  onBookFormSubmit(): void {
    if(this.bookForm.valid) {
      if(this.data) {
        this._bookService.updateBook(this.data.id, this.bookForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Book updated successfully!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      } else {
        this._bookService.addBook(this.bookForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Book added successfully!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      }
    }
  }

}
