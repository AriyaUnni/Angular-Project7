import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private myapi:ApiService) { 

    this.fetchData()
  }

  fetchData =() =>{
    this.myapi.viewdoData().subscribe(
      (data) =>{
        this.ToViewData=data
      }
    )
  }

  ToViewData:any={}

  ngOnInit(): void {
  }

}
