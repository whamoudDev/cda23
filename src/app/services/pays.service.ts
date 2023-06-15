import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pays } from '../model/pays';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaysService {

  constructor(private http: HttpClient) {}

  public getPays(): Observable<Pays[]> {
    return this.http.get<Pays[]>(environment.serverUrl+'/liste-pays');
  }
}
