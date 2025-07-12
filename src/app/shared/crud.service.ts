import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CrudService {
  errorData: {};
  public url = "http://localhost:81/uat/api/";

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    this.errorData = {
      errorTitle: "Oops! Request for document failed",
      errorDesc: "Something bad happened. Please try again later.",
    };
    return throwError(this.errorData);
  }

  addUser(user: any): Observable<any> {
    return this.http
      .post<any>(this.url + "userRegister.php", user, {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
        responseType: "text" as "json",
      })
      .pipe(catchError(this.handleError));
  }

  contactForm(formdata: any): Observable<any> {
    return this.http
      .post<any>(this.url + "contact", formdata, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  sendFeedbackEmail(): Observable<any> {
    return this.http.get(this.url + "feedbackEmail.php");
  }

  // ✅ Fix: Add this method
  registerInquiries(data: any): Observable<any> {
    return this.http
      .post<any>(this.url + "registerInquiries.php", data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
