import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos:Photo[] = [];
  filter: string = '';
  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
    ){}


  ngOnInit(): void {    

      const userName = this.activatedRoute.snapshot.params.userName;
      this.photoService.listFromUser(userName)
          .subscribe(photos => {
            console.log(photos[0].description);
            this.photos = photos
          } )  
  }

}
