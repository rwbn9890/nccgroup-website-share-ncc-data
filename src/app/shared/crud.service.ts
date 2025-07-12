import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { timeout, catchError, tap, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: "root",
})
export class CrudService {
  errorData: {};
  public url = "http://localhost:81/uat/api/";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  respType = { responseType: "text" };

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    this.errorData = {
      errorTitle: "Oops! Request for document failed",
      errorDesc: "Something bad happened. Please try again later.",
    };
    return throwError(this.errorData);
  }

  addUser(user: any): Observable<any> {
    console.log("From Service", user);

    return this.http
      .post<any>(this.url + "userRegister.php", user, {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
        responseType: "text" as "json",
      })
      .pipe(catchError(this.handleError));

    //     this.http
    // .post(this.url, user, {responseType: 'text'}) // no generic parameter
    // ;
  }
  contactForm(formdata) {
    return this.http
      .post<any>(this.url + "contact", formdata, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  sendFeedbackEmail() {
    return this.http.get(this.url + "feedbackEmail.php");
  }


}
