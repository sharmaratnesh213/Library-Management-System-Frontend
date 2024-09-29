import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookAddEditComponent } from './book-add-edit/book-add-edit.component';
import { BooksService } from './service/books.service';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'LMS-Frontend';

  displayedColumns: string[] = ['id', 'title', 'author', 'isbn' , 'available', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _bookService: BooksService,
    private _coreService: CoreService
  ) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  openAddEditBookForm(): void {

    const dialogRef = this._dialog.open(BookAddEditComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.getAllBooks();
        }
      }
    });
  }

  getAllBooks(): void {
    this._bookService.getAllBooks().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteBook(id: number): void {
    this._bookService.deleteBook(id).subscribe({
      next: () => {
        this._coreService.openSnackBar('Book deleted successfully!', "OK");
        this.getAllBooks();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  openEditBookForm(data: any): void {
    const dialogRef = this._dialog.open(BookAddEditComponent, {
      width: '400px',
      data: data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.getAllBooks();
        }
      }
    });
  }

  getBookByTitleOrAuthor(query: string): void {
    this._bookService.getBookByTitleOrAuthor(query).subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  borrowBook(id: number): void {
    this._bookService.borrowBook(id).subscribe({
      next: () => {
        this._coreService.openSnackBar('Book borrowed successfully!', "OK");
        this.getAllBooks();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  returnBook(id: number): void {
    this._bookService.returnBook(id).subscribe({
      next: () => {
        this._coreService.openSnackBar('Book returned successfully!', "OK");
        this.getAllBooks();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}

