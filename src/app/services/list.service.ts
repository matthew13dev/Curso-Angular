import { Animal } from './../interfaces/Animal';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl:string = "http://localhost:3000/animals";
  constructor(private http: HttpClient) { }

  public remove(id:number){
    let url:string = `${this.apiUrl}/${id}`;
    return this.http.delete<Animal>(url);

  }

  public getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.getApiURL())
  }

  public getItem(id: number): Observable<Animal>{

    let urlId:string = `${this.apiUrl}/${id}`;
    return this.http.get<Animal>(urlId);


  }

  private getApiURL():string{
    return this.apiUrl;
  }
}
