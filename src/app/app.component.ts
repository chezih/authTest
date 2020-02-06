import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'auth-test';

  constructor(
    private http: HttpClient,
  ) {

  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }


  post(): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/device/verify`, {user_code: 'asdasdasdad'})
      .pipe(map(res => {
        console.log(res);
      }));
  }

  redirect() {
    this.post().subscribe(x => {
      console.log(x);
    });
  }

}
