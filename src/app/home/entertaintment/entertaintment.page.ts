import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/shared/newsapi.service';
import { ResponseData,Response } from 'src/app/modal/response';

@Component({
  selector: 'app-entertaintment',
  templateUrl: './entertaintment.page.html',
  styleUrls: ['./entertaintment.page.scss'],
})
export class EntertaintmentPage implements OnInit {

  loadedData:ResponseData[];  
  isLoading:boolean = true;
  fetchedData:ResponseData[];
  constructor(private apiService:NewsapiService) { }
  ionViewDidEnter(){
    this.apiService.getNews('entertainment').subscribe((data:Response[]) =>{
      this.fetchedData= data['articles'];
      this.loadedData = this.fetchedData;
      this.isLoading = false;
    })
  }

  ngOnInit() {
  }

}
