import { Component,Input } from '@angular/core';
import { Gallery } from 'src/app/interfaces/Gallery';
@Component({
  selector: 'Gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  @Input() gallery:Gallery[] =  []

}
