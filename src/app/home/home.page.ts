import { Component, OnInit } from '@angular/core';
import { NewsapiService } from './../shared/newsapi.service';
import { Response } from './../modal/response';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private apiService:NewsapiService
  ) {}
  // ionViewDidEnter(){
  //   this.apiService.getNews().subscribe((data:Response[]) =>{
  //     console.log(data);
  //   })
  // }
  ngOnInit(){

  }



}
