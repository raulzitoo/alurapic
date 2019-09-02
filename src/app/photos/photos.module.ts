import { NgModule } from '@angular/core';
import{HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';

import { PhotosListModule } from './photos-list/photos-list.module';
import { PhotoFormModule } from './photos-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';

@NgModule({
    imports:[
        HttpClientModule,
        CommonModule,
        PhotosListModule,
        PhotoFormModule,
        PhotoModule
    ]

})
export class PhotosModule{

}