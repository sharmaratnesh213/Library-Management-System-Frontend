# LMSFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Book Related Services and Components

### Services

#### BookService

The `BookService` is responsible for handling all book-related operations such as fetching book data from the server, adding new books, updating existing books, and deleting books. It communicates with the backend API to perform these operations.

- **Methods:**
  - `getBooks()`: Fetches the list of all books.
  - `getBookByTitleorAuthor(query: string)`: Fetches the details of a book by its title or author.
  - `addBook(book: Book)`: Adds a new book.
  - `updateBook(id: number, book: Book)`: Updates an existing book.
  - `deleteBook(id: number)`: Deletes a book by its ID.
  - `borrowBook(id: number)` : Borrows a book.
  - `returnBook(id: number)` : Returns a book.

### SnackbarService

The `SnackbarService` is responsible for displaying brief messages to the user. It can be used to show success, error, or informational messages.

- **Methods:**
  - `openSnackBar(message: string, action: string = 'OK)`: Displays a success message.

### Components

#### BookListComponent

The `BookListComponent` displays a list of all books. It uses the `BookService` to fetch the data and displays it in a tabular format. Users can click on a book to view more details or perform actions like edit and delete.

#### BookFormComponent

The `BookFormComponent` is used for adding and editing books. It contains a form where users can enter book details. It uses the `BookService` to save the new or updated book data.

### Models

#### Book

The `Book` model represents the structure of a book object. It includes properties like `id`, `title`, `author`, `isbn` and `available`.

### Summary

These services and components together provide a comprehensive solution for managing books in the application. They cover all CRUD (Create, Read, Update, Delete) operations and ensure a smooth user experience.
