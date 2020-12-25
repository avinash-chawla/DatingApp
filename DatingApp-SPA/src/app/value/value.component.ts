import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values : Object;

  constructor(private http: HttpClient) { }

    ngOnInit(): void {
    this.getValues();
  }

  getValues(){
    this.http.get<any[]>("https://localhost:44398/api/values")
    .subscribe((response) => {
      this.values = response;
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }
  
}
