import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'Hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  icon = faSearch
  getData(event:NgForm){
    //alert(event.form.value)
    console.log(event.form.value)
  }
}
