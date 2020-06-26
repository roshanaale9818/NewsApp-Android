import { Component, OnInit } from '@angular/core';
import { ResponseData,Response } from 'src/app/modal/response';
import { NewsapiService } from 'src/app/shared/newsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.page.html',
  styleUrls: ['./business.page.scss'],
})
export class BusinessPage implements OnInit {

  loadedData:ResponseData[];  
  isLoading:boolean = true;
  fetchedData:ResponseData[];
  constructor(private apiService:NewsapiService) { }
  ionViewDidEnter(){
    this.apiService.getNews('technology').subscribe((data:Response[]) =>{
      this.fetchedData= data['articles'];
      this.loadedData = this.fetchedData;
      this.isLoading = false;
    })
  }

  ngOnInit() {
  }

}
