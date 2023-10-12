import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'Hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Output() fetchData = new EventEmitter()
  icon = faSearch

  async getData(event:NgForm){
    const {search} = event.value;
    if(search)
    return this.fetchData.emit(search);
  }
}
