import { Component } from '@angular/core';
import { Gallery } from './interfaces/Gallery';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unsplash-angular';
  images: Gallery[] = []
  loading = false
  
  constructor(private apiService: ApiService){}

 takeData(search:string){
  this.loading = true;

  this.apiService.fetchData(search).subscribe((data)=>{
    this.images = data.results
    this.loading = false;
  })
 }
}
