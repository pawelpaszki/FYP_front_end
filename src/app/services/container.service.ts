import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {RequestOptions} from '@angular/http';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs/Observable';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class ContainerService {

  constructor(private http: HttpClient, private toastr: ToastrService) {

  }

  public getContainers(): Observable<any[]> {
    const token: string = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'x-access-token': token});
    return this.http.get<any[]>('http://localhost:3000/api/containers', {headers}).pipe(
        tap(() => {}),
      );
  }

  public createContainer(imageName: string): Observable<any[]> {
    const token: string = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'x-access-token': token});
    return this.http.post<any[]>('http://localhost:3000/api/containers/create', {imageName}, {headers}).pipe(
      tap((_) =>
        this.toastr.success('Container created: ' + imageName, 'Success')),
    );
  }

}