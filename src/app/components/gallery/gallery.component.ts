import { Component,Input } from '@angular/core';
@Component({
  selector: 'Gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Input() gallery:string[] =  []
}
