import { Component, OnInit } from '@angular/core';
import { NewsapiService } from './../../shared/newsapi.service';
import { Response, ResponseData } from './../../modal/response';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {
  loadedData:ResponseData[];  
  isLoading:boolean = true;
  fetchedData:ResponseData[];
  constructor(private apiService:NewsapiService) { }
  ionViewDidEnter(){
    this.apiService.getNews('sports').subscribe((data:Response[]) =>{
      this.fetchedData= data['articles'];
      this.loadedData = this.fetchedData;
      this.isLoading = false;
    })
  }

  ngOnInit() {
  }

}
