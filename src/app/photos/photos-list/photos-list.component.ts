import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit{
  
  photos:Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  userName:string = '';
  currentPage:number = 1;
  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
    ){}
    
    
    ngOnInit(): void {  
      this.userName = this.activatedRoute.snapshot.params.userName;  
      this.photos = this.activatedRoute.snapshot.data.photos; // Conteudo vem do Resolver implementado no programa app-routing.module.ts
      //this.debounce.pipe(debounceTime(300))
      //.subscribe(filter => this.filter = filter);  // utilizado para aguardar 300 mileesegundo antes de fazer a requisição com filtro.
    }

    

    load(){
      this.photoService.listFromUserPaginated(this.userName,++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if(!photos.length) this.hasMore = false;
      })
    }
}
