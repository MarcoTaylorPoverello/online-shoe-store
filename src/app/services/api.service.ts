import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  fetchData(){
   return this.http.get('http://192.168.1.12:8080/products/?')
  }

  postData() {

    const body = { title: 'Angular Post', content: 'Sending data to API'};
  
    this.http.post('https://api.example.com/posts', body).subscribe(response => {
  
    });
  }

}
