import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http';
import { Response } from './../modal/response';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(
    private http:HttpClient
  ) { }
  private apiKey = "df5e930127154ad0be4aa8fbb6d12016";

  getNews(data:string){
    return this.http.get<Response[]>(`https://newsapi.org/v2/top-headlines?country=us&category=${data}&apiKey=${this.apiKey}`);
  }
}
