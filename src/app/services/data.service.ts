import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/bad-request-error';

@Injectable()
export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
    .pipe(catchError(this.handleError));
  }

  create(Resource) {
    return this.http.post(this.url, JSON.stringify(Resource))
    .pipe(catchError(this.handleError));
  }
  update(Resource) {
    return this.http.patch(this.url + '/' + Resource.id, JSON.stringify({isRead: true})).pipe(catchError(this.handleError));
  }
  delete(id) {
    return this.http.delete(this.url + '/' + id).pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if(error.status === 404)
        return Observable.throw(new NotFoundError(error));

    if(error.status === 400)
        return Observable.throw(new BadRequestError(error));

      return Observable.throw(new AppError(error));
  }
}
